<script setup>
import { sortUsers } from "../utils/format-stuff";
import { ref } from "vue";

import {
  BanknotesIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const users = ref([
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Williams" },
  { id: 5, name: "Emma Wilson" },
  { id: 6, name: "Franklin Harris" },
  { id: 7, name: "Grace Miller" },
  { id: 8, name: "Henry Davis" },
  { id: 9, name: "Isabella Clark" },
  { id: 10, name: "Jack Martinez" },
]);

sortUsers(users);
console.log(sortUsers(users));
</script>
<template>
  <nav class="bg-gray-200 shadow-md sticky top-0">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <!-- Logo -->
          <div>
            <a href="#" class="flex items-center py-4 px-2">
              <span class="font-semibold text-gray-500 text-lg">MyLogo</span>
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              href="#"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Home</a
            >
            <a
              href="#"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Services</a
            >
            <a
              href="#"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >About</a
            >
            <a
              href="#"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >Contact</a
            >
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <a
            href="#"
            class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
          >
            <UserIcon class="h-6 w-6" />
          </a>
          <a
            href="#"
            class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
          >
            <ShoppingCartIcon class="h-6 w-6" />
          </a>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="outline-none mobile-menu-button">
            <BanknotesIcon class="h-6 w-6 text-gray-500 hover:text-green-500" />
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      :class="{ hidden: isOpen, block: isOpen }"
      class="mobile-menu md:hidden"
    >
      <ul class="">
        <li>
          <a
            href="#"
            class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >Services</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >About</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.mobile-menu {
  transition: all 0.3s ease;
}
</style>
