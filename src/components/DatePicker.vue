<script setup>
import { ref, computed, watch, onMounted } from "vue";

const props = defineProps({
  modelValue: Date,
});

const emit = defineEmits(["update:modelValue"]);

const showCalendar = ref(false);
const currentDate = ref(new Date());
const selectedDate = ref(
  props.modelValue ? new Date(props.modelValue) : new Date(),
);

const getFutureLabel = (offset) => {
  if (offset === 0) return "Today";
  const future = new Date();
  future.setDate(future.getDate() + offset);
  return future.toLocaleDateString("default", { weekday: "short" });
};
const options = [
  { label: getFutureLabel(0), offset: 0 },
  { label: getFutureLabel(1), offset: 1 },
  { label: getFutureLabel(2), offset: 2 },
  { label: getFutureLabel(3), offset: 3 },
  { label: "Pick a date...", offset: null },
];

// Sync when modelValue changes externally
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) selectedDate.value = new Date(newVal);
  },
);

const handleSelect = (value) => {
  if (value === "custom") {
    showCalendar.value = true;
    return;
  }

  const offset = parseInt(value);
  const date = new Date();
  date.setDate(date.getDate() + offset);
  selectedDate.value = date;
  emit("update:modelValue", date);

  console.log(date);
};

const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonthName = computed(() =>
  currentDate.value.toLocaleString("default", { month: "long" }),
);

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const calendarDays = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysFromPrevMonth = firstDay.getDay();
  const totalDays = Math.ceil((daysInMonth + daysFromPrevMonth) / 7) * 7;
  const daysFromNextMonth = totalDays - (daysInMonth + daysFromPrevMonth);

  const days = [];

  // Previous month days
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDay - i),
      isCurrentMonth: false,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(year, month, i), isCurrentMonth: true });
  }

  // Next month days
  for (let i = 1; i <= daysFromNextMonth; i++) {
    days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
  }

  return days;
});

function isSelected(date) {
  return (
    selectedDate.value &&
    date.getDate() === selectedDate.value.getDate() &&
    date.getMonth() === selectedDate.value.getMonth() &&
    date.getFullYear() === selectedDate.value.getFullYear()
  );
}

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function selectDate(date) {
  selectedDate.value = date;
  emit("update:modelValue", date);
  showCalendar.value = false;
}

function prevMonth() {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
}
function nextMonth() {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
}

// Close calendar when clicking outside
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".date-picker")) {
      showCalendar.value = false;
    }
  });
});
</script>

<template>
  <div class="relative date-picker w-1/4 max-w-xs">
    <select
      class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      @change="handleSelect($event.target.value)"
    >
      <option
        v-for="opt in options"
        :key="opt.label"
        :value="opt.offset === null ? 'custom' : opt.offset"
        :selected="opt.offset === 0"
      >
        {{ opt.label }}
      </option>
    </select>

    <!-- Calendar -->
    <div
      v-if="showCalendar"
      class="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-64 p-2"
    >
      <div class="flex items-center justify-between px-2 py-2">
        <button @click="prevMonth" class="p-1 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            />
          </svg>
        </button>
        <span class="font-semibold text-gray-800">
          {{ currentMonthName }} {{ currentYear }}
        </span>
        <button @click="nextMonth" class="p-1 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4 4a1 1 0 01-1.414 0z"
            />
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-7 gap-1 mb-1">
        <div
          v-for="day in weekdays"
          :key="day"
          class="text-xs text-center text-gray-500 py-1 font-medium"
        >
          {{ day }}
        </div>
      </div>

      <div class="grid grid-cols-7 gap-1">
        <div
          v-for="day in calendarDays"
          :key="day.date.toString()"
          @click="selectDate(day.date)"
          :class="{
            'py-1 text-center rounded-full cursor-pointer text-sm': true,
            'text-gray-400': !day.isCurrentMonth,
            'text-gray-800': day.isCurrentMonth,
            'bg-blue-500 text-white': isSelected(day.date),
            'font-bold': isToday(day.date) && !isSelected(day.date),
            'hover:bg-gray-100': !isSelected(day.date),
          }"
        >
          {{ day.date.getDate() }}
        </div>
      </div>
    </div>
  </div>
</template>
