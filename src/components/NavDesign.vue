<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>

<template>
  <div>
    <nav class="sticky top-0 z-20 w-full p-2 bg-gray-100 dark:bg-[#241E34]">
      <div class="flex items-center justify-between">
        <div class="w-1/4 p-3">
          <router-link to="/">
            <TheLogo />
          </router-link>
        </div>

        <div class="flex items-center space-x-2 md:space-x-4">
          <!-- Sign Up & Login Buttons - Hidden on small screens, shown from md breakpoint -->
          <div class="hidden md:flex space-x-2">
            <router-link
              to="/signup"
              class="px-3 py-1.5 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Sign Up
            </router-link>
            <router-link
              to="/login"
              class="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Login
            </router-link>
          </div>

          <!-- Mobile Menu Button - Shows on small screens -->
          <button
            class="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <ThemeToggle />
        </div>
      </div>

      <!-- Mobile Menu - Shows when hamburger is clicked -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-gray-50 dark:bg-gray-800 p-4 space-y-2"
      >
        <router-link
          to="/signup"
          class="block w-full px-4 py-2 text-left rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          @click="isMobileMenuOpen = false"
        >
          Sign Up
        </router-link>
        <router-link
          to="/login"
          class="block w-full px-4 py-2 text-left rounded-md bg-blue-500 text-white hover:bg-blue-600"
          @click="isMobileMenuOpen = false"
        >
          Login
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
