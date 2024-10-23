<template>
  <header
    class="sticky top-0 w-full shadow h-14 flex justify-center border-stone-700 bg-[#1d1d20] text-white z-10"
  >
    <div class="max-w-4xl w-full flex justify-between items-center font-thin">
      <a
        class="text-left px-8 text-lg l hover:cursor-pointer hover:underline underline-offset-auto !text-white"
        :href="useLink('/')"
      >
        disservin's blog
      </a>
      <a
        class="text-right text-lg px-8 hover:underline underline-offset-auto hover:cursor-pointer !text-white"
        :href="useLink('/about')"
      >
        about
      </a>
    </div>
  </header>

  <main class="flex flex-col items-center w-full text-white overflow-y-auto">
    <div class="max-w-4xl w-full px-8 custom-scrollbar height text-wrap">
      <NotFound v-if="page.isNotFound" />
      <Home v-else-if="frontmatter.home" />
      <template v-else>
        <Page :frontmatter="frontmatter" />
      </template>
    </div>
  </main>

  <!-- <footer class="fixed bottom-0 w-full">
    <hr class="opacity-20" />
    <div class="w-full text-white text-center py-2">
      <div class="w-full font-thin">
        <p class="text-sm">&copy; {{ new Date().getFullYear() }} disservin</p>
      </div>
    </div>
  </footer> -->
</template>

<script setup lang="ts">
import { useData } from "vitepress";

import NotFound from "./pages/NotFound.vue";
import Home from "./pages/Home.vue";
import Page from "./pages/Page.vue";

import { useLink } from "./link.ts";

const { page, frontmatter } = useData();
</script>

<style>
.height {
  height: calc(100vh - 56px);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #1b1b1f !important;
}
.custom-scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(83, 83, 83, 0.07);
  background-color: #1b1b1f;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 7px;
  background-color: #1b1b1f;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #1b1b1f;
  border: 4px solid #4b5563;
  border-radius: 16px;
}
</style>
