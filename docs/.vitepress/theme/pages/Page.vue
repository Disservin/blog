<template>
  <div class="mt-5">
    <div class="mt-2 text-sm font-thin opacity-60" v-show="frontmatter.date">
      {{ formatDate(frontmatter.date) }}
    </div>
    <Content />
    <div class="">
      <div class="w-16 my-8 h-1 bg-violet-400 rounded-full mx-auto"></div>
      <div class="mb-8">Disservin</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  frontmatter: {
    date: string;
  };
}>();

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style></style>
