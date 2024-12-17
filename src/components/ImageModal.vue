<script setup>
import { ref } from "vue";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
});

const isVisible = ref(true);

const closeModal = () => {
  isVisible.value = false;
};
</script>
<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
  >
    <div class="relative p-4 max-w-lg bg-white rounded-lg shadow-lg">
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="Close modal"
      >
        &times;
      </button>
      <img :src="imageSrc" alt="Modal Image" class="max-w-full rounded-lg" />
    </div>
  </div>
</template>
