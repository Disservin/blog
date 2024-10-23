<template>
  <h2 class="text-2xl font-thin">posts</h2>
  <div>
    <template v-for="(post, index) of posts" class="my-4 rounded -m-5 p-5">
      <div class="my-4 rounded -m-5 p-5">
        <div class="font-thin text-sm opacity-60">
          {{ formatDate(post.frontmatter.date) }}
        </div>
        <a
          :href="useLink(post.url)"
          class="text-xl hover:underline underline-offset-auto !text-violet-400 hover:cursor-pointer"
        >
          {{ post.frontmatter.title }}
        </a>
        <div class="mt-2">
          <div v-html="post.frontmatter.description"></div>
        </div>
        <div class="mt-5">
          <a
            class="hover:underline underline-offset-auto hover:cursor-pointer text-sm"
            :href="useLink(post.url)"
          >
            read more
          </a>
        </div>
      </div>

      <hr class="" v-show="index < posts.length - 1" />
    </template>
  </div>
</template>

<script setup>
import { data as posts } from "../posts.data.js";
import { useLink } from "../link.ts";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped></style>
