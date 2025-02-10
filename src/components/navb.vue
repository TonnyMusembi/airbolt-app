<script setup lang="ts"></script>

<template>
  <nav class="bg-gray-800 text-white">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- Left Section: Logo -->
      <div class="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          class="w-10 h-10"
        />
        <span class="font-semibold text-xl">BrandName</span>
      </div>

      <!-- Center Section: Navigation Links -->
      <div class="hidden md:flex items-center space-x-6">
        <a href="#" class="hover:text-gray-300 transition duration-200">Home</a>
        <a href="#" class="hover:text-gray-300 transition duration-200"
          >About</a
        >
        <a href="#" class="hover:text-gray-300 transition duration-200"
          >Services</a
        >
        <a href="#" class="hover:text-gray-300 transition duration-200"
          >Contact</a
        >
      </div>

      <!-- Right Section: Icons -->
      <div class="flex items-center space-x-4">
        <button
          class="relative focus:outline-hidden text-gray-400 hover:text-gray-300 transition duration-200"
        >
          <!-- Notification Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11.5a6.5 6.5 0 10-13 0v2.658c0 .538-.214 1.055-.595 1.437L3 17h5m7 0a3 3 0 11-6 0m6 0H9"
            />
          </svg>
          <span
            class="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center"
            >3</span
          >
        </button>

        <button
          class="focus:outline-hidden text-gray-400 hover:text-gray-300 transition duration-200"
        >
          <!-- User Profile Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.121 17.804A7.5 7.5 0 1117.804 5.121M15 15l5.5 5.5"
            />
          </svg>
        </button>

        <!-- Mobile Menu Button (Visible only on small screens) -->
        <button
          class="md:hidden focus:outline-hidden text-gray-400 hover:text-gray-300 transition duration-200"
        >
          <!-- Hamburger Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
