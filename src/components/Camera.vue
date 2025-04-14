<script setup>
import { ref, onBeforeUnmount } from "vue";

const video = ref(null);
const canvas = ref(null);
const selfieImage = ref(null);
let stream = null;

// Start the webcam
const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.value.srcObject = stream;
  } catch (err) {
    console.error("Error accessing camera:", err);
  }
};

// Capture the selfie
const takeSelfie = () => {
  const context = canvas.value.getContext("2d");
  canvas.value.width = video.value.videoWidth;
  canvas.value.height = video.value.videoHeight;
  context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
  selfieImage.value = canvas.value.toDataURL("image/png");
};

// Stop the camera when leaving the page/component
onBeforeUnmount(() => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
  }
});
</script>
<template>
  <div class="flex flex-col items-center space-y-4">
    <video
      ref="video"
      autoplay
      playsinline
      class="w-64 h-48 bg-black rounded-md"
    ></video>
    <canvas ref="canvas" class="hidden"></canvas>

    <div class="flex gap-4">
      <button
        @click="startCamera"
        class="px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Start Camera
      </button>
      <button
        @click="takeSelfie"
        class="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Take Selfie
      </button>
    </div>

    <div v-if="selfieImage">
      <h2 class="text-lg font-bold mt-4">Your Selfie:</h2>
      <img :src="selfieImage" alt="Selfie" class="w-64 h-48 rounded-md mt-2" />
    </div>
  </div>
</template>

<style scoped>
video,
img {
  object-fit: cover;
}
</style>
