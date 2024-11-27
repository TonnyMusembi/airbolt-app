<script setup>
// import {} from '..compaosables/'
import { useTheme } from "../composables/useTheme";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <div class="flex justify-end">
    <button
      @click="toggleTheme"
      class="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      aria-label="Toggle theme"
    >
      <component :is="isDark ? SunIcon : MoonIcon" class="h-6 w-6" />
    </button>
  </div>
</template>
