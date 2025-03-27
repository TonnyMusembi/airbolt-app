<script setup>
import { ref, watch } from "vue";

const items = ref([
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com"
]);

const selectedItems = ref([]); // Holds selected emails
const checked = ref(false); // Controls "Select All" checkbox
const indeterminate = ref(false); // Handles partial selection state

// Watch selectedItems to update "Select All" & "Indeterminate" state
watch(selectedItems, (newVal) => {
  if (newVal.length === 0) {
    checked.value = false;
    indeterminate.value = false;
  } else if (newVal.length === items.value.length) {
    checked.value = true;
    indeterminate.value = false;
  } else {
    checked.value = false;
    indeterminate.value = true;
  }
});

// Handle "Select All" checkbox
function handleCheckAll() {
  if (checked.value) {
    selectedItems.value = [];
  } else {
    selectedItems.value = [...items.value];
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 p-5">
    <h1 class="text-lg font-semibold">Select Email Addresses</h1>

    <!-- "Select All" Checkbox -->
    <div>
      <input
        type="checkbox"
        :checked="checked"
        :indeterminate="indeterminate"
        @click="handleCheckAll"
        class="mr-2"
      />
      <label class="font-medium">Select All</label>
    </div>

    <hr class="border-gray-300" />

    <!-- Email Checkboxes -->
    <div v-for="(email, index) in items" :key="index" class="flex items-center">
      <input
        type="checkbox"
        :value="email"
        v-model="selectedItems"
        class="mr-2"
      />
      <label>{{ email }}</label>
    </div>

    <hr class="border-gray-300" />

    <!-- Display Selected Emails -->
    <div class="mt-2">
      <strong>Selected Emails:</strong>
      <span v-if="selectedItems.length === 0">None</span>
      <ul v-else class="list-disc list-inside">
        <li v-for="email in selectedItems" :key="email">{{ email }}</li>
      </ul>
    </div>
  </div>
</template>

<style  scoped>
/* Custom Styling */
input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>
