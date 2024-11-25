<template>
  <div class="border-b">
    <div class="container mx-auto px-4">
      <div class="flex space-x-8 overflow-x-auto pb-4 pt-5 scrollbar-hide">
        <div
          v-for="category in categories"
          :key="category.label"
          class="flex flex-col items-center space-y-2 min-w-fit cursor-pointer text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-colors duration-200"
        >
          <component :is="category.icon" class="h-6 w-6" />
          <span class="text-xs font-medium">{{ category.label }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center space-x-2">
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import {
  BuildingOfficeIcon as Building,
  HomeIcon as Home,
  BanknotesIcon as Castle,
  // BeachIcon as Tent,
  //   TentIcon as Tent,
  //   BeachIcon as Umbrella,
  //   TreeIcon as Trees,
  // MountainIcon as Mountain,
  ChartBarIcon as Umbrella,
  BanknotesIcon as Mountain,
  EyeIcon as Warehouse,
} from "@heroicons/vue/24/outline";

const categories = ref([
  { label: "Mansions", icon: Castle },
  { label: "Cabins", icon: Home },
  //   { label: "Camping", icon: Tent },
  { label: "Beach", icon: Umbrella },
  //   { label: "Countryside", icon: Trees },
  { label: "Mountains", icon: Mountain },
  { label: "City", icon: Building },
  { label: "Lofts", icon: Warehouse },
]);
</script>

<style>
/* Hides scrollbar visually while still allowing scrolling */
.scrollbar-hide {
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  scrollbar-width: none; /* For Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}
</style>
