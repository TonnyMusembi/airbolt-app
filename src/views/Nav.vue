<script setup>
import TheNavBar from "@/components/TheNavBar.vue";
import Category from "../components/Category.vue";
</script>

<template>
  <div>
    <TheNavBar />
    <Category />
    <div class="p-2">
      <RouterView />
    </div>
  </div>
</template>
