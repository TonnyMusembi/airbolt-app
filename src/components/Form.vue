<script setup>
import { ref } from "vue";
import { useRefHistory } from "@vueuse/core";
const text = ref("");
const { history, undo, redo } = useRefHistory(text);
</script>
<template>
  <p>
    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>
  </p>
  <textarea v-model="text" />
  <ul>
    <li v-for="entry in history" :key="entry.timestamp">
      {{ entry }}
    </li>
  </ul>
</template>

<style scoped>
button {
  border: none;
  outline: none;
  margin-right: 10px;
  background-color: #2ecc71;
  color: white;
  padding: 5px 10px;
}
</style>
