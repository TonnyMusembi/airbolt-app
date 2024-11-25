<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Dhow from "../assets/images/dhow.jpg";
import Vite from "../assets/images/vite.jpeg";
import Vite2 from "../assets/images/vite2.png";
// Array of images
const images = ref([Dhow, Vite, Vite2]);

// Current image index
const currentImageIndex = ref(0);

// Loader progress value
const loaderProgress = ref(0);

const startImageSlider = () => {
  const intervalDuration = 3000; // Duration for each image (ms)
  const loaderStep = 100; // Time interval for loader progress (ms)

  // Start the interval for image switching
  const intervalId = setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % images.value.length; // Cycle through indices
    loaderProgress.value = 0; // Reset loader progress
  }, intervalDuration);

  // Start the loader progress
  const loaderId = setInterval(() => {
    loaderProgress.value += (loaderStep / intervalDuration) * 100;
    if (loaderProgress.value >= 100) loaderProgress.value = 100; // Cap at 100%
  }, loaderStep);

  return { intervalId, loaderId };
};

let intervalId = null;
let loaderId = null;

onMounted(() => {
  const timers = startImageSlider();
  intervalId = timers.intervalId;
  loaderId = timers.loaderId;
});

onUnmounted(() => {
  clearInterval(intervalId); // Cleanup image slider interval
  clearInterval(loaderId); // Cleanup loader interval
});
</script>

<template>
  <div class="relative w-full h-64 overflow-hidden">
    <!-- Display images -->
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :alt="'Image ' + (index + 1)"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      :class="{
        'opacity-100': index === currentImageIndex,
        'opacity-0': index !== currentImageIndex,
      }"
    />

    <!-- Loader -->
    <div class="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
      <div
        class="h-full bg-green-500 transition-all"
        :style="{ width: loaderProgress + '%' }"
      ></div>
    </div>
  </div>
</template>

<style>
/* Smooth image transition */
img {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
</style>
