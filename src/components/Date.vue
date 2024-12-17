<script setup>
import { ref, reactive, computed, onMounted } from "vue";

const showDatepicker = ref(false);
const datepickerValue = ref("");
const state = reactive({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  noOfDays: [],
  blankdays: [],
});

const days = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
const MONTH_NAMES = ref([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);

const formattedDate = computed(() => datepickerValue.value);
const monthName = computed(() => MONTH_NAMES[state.month]);
const noOfDays = computed(() => state.noOfDays);
const blankdays = computed(() => state.blankdays);
const selectedDate = ref("");

const toggleDatepicker = () => {
  showDatepicker.value = !showDatepicker.value;
};

const closeDatepicker = () => {
  showDatepicker.value = false;
};

const initDate = () => {
  const today = new Date();
  datepickerValue.value = today.toDateString();
};

const isToday = (date) => {
  const today = new Date();
  const d = new Date(state.year, state.month, date);
  return today.toDateString() === d.toDateString();
};

const selectDate = (date) => {
  const selected = new Date(state.year, state.month, date);
  datepickerValue.value = selected.toDateString();
  selectedDate.value = `${selected.getFullYear()}-${String(
    selected.getMonth() + 1,
  ).padStart(2, "0")}-${String(selected.getDate()).padStart(2, "0")}`;
  closeDatepicker();
};

const getNoOfDays = () => {
  const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
  const firstDayOfMonth = new Date(state.year, state.month).getDay();

  state.blankdays = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  state.noOfDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const changeMonth = (direction) => {
  state.month += direction;
  if (state.month < 0) {
    state.month = 11;
    state.year--;
  } else if (state.month > 11) {
    state.month = 0;
    state.year++;
  }
  getNoOfDays();
};

onMounted(() => {
  initDate();
  getNoOfDays();
});
</script>
<template>
  <div class="relative w-1/4 max-w-xs mx-auto">
    <label class="font-bold mb-1 text-gray-700 block" for="datepicker">
      Select Date
    </label>
    <div class="relative">
      <input type="hidden" :value="selectedDate" ref="dateInput" />
      <input
        type="text"
        readonly
        :value="formattedDate"
        @click="toggleDatepicker"
        @keydown.escape="closeDatepicker"
        class="w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
        placeholder="Select date"
      />
      <div class="absolute top-0 right-0 px-3 py-2">
        <svg
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <!-- Datepicker Dropdown -->
      <div
        v-if="showDatepicker"
        class="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0 z-50 w-full"
      >
        <div class="flex justify-between items-center mb-2">
          <div>
            <span class="text-lg font-bold text-gray-800">
              {{ monthName }}
            </span>
            <span class="ml-1 text-lg text-gray-600 font-normal">
              {{ year }}
            </span>
          </div>
          <div>
            <button
              class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
              :disabled="month === 0"
              @click="changeMonth(-1)"
            >
              <svg
                class="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
              :disabled="month === 11"
              @click="changeMonth(1)"
            >
              <svg
                class="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap mb-3 -mx-1">
          <div
            v-for="(day, index) in days"
            :key="index"
            class="text-center text-sm font-medium text-gray-800 w-1/7 px-1"
          >
            {{ day }}
          </div>
        </div>
        <div class="flex flex-wrap -mx-1">
          <div
            v-for="blank in blankdays"
            :key="'blank-' + blank"
            class="w-1/7 px-1"
          ></div>
          <div
            v-for="date in noOfDays"
            :key="'date-' + date"
            class="w-1/7 px-1 mb-1"
          >
            <div
              class="cursor-pointer text-center text-sm rounded-full transition ease-in-out duration-100"
              :class="{
                'bg-blue-500 text-white': isToday(date),
                'hover:bg-blue-200 text-gray-700': !isToday(date),
              }"
              @click="selectDate(date)"
            >
              {{ date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Tailwind CSS is used, no additional styles needed. */
</style>
