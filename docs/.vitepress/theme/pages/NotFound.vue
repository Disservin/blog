<template>
  <div
    class="top-0 left-0 -z-20 fixed flex justify-center items-center h-screen w-full"
  >
    <div>
      <h1 class="text-center">404</h1>
      <p class="text-center">Page not found</p>
      <p class="text-center">
        <a
          :href="useLink('/')"
          target="_self"
          class="hover:underline underline-offset-auto hover:cursor-pointer"
        >
          Go back to the home page
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useLink } from "../link.ts";

onMounted(() => {
  document.title = "404 - Page not found";
  console.clear();
});
</script>

<style scoped></style>
