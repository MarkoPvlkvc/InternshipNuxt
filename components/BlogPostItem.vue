<template>
  <div
    v-for="post in props.posts"
    :key="post.id"
    class="group row-span-4 grid max-w-sm grid-rows-subgrid gap-y-0 rounded-3xl hover:cursor-pointer"
    @click="navigateToPost(post.id)"
  >
    <div class="h-64 overflow-hidden rounded-3xl">
      <img
        :src="`http://localhost:1337${post.imageUrl}`"
        :alt="post.imageAlt"
        class="h-full w-full object-cover transition-all group-hover:scale-105"
      />
    </div>
    <p
      class="mt-4 text-lg font-bold group-hover:underline md:mt-8 md:text-xl lg:text-2xl"
    >
      {{ post.title }}
    </p>
    <p class="mt-3 md:mt-4">
      {{ shortenContent(post.content) }}
    </p>
    <p class="mt-4 font-medium text-[#6D6E76]">
      {{ post.author }} | {{ formatDate(post.date) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from "nuxt/app";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
}

const props = defineProps<{ posts: BlogPost[] }>();

const navigateToPost = (id: number) => {
  navigateTo({ path: `/blog/${id}` });
};

const shortenContent = (content: string) => {
  const maxLength = 150; // Adjust the maximum length as needed
  if (content.length <= maxLength) {
    return content;
  } else {
    return content.slice(0, maxLength) + "...";
  }
};
</script>
