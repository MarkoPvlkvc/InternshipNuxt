<template>
  <div
    class="group row-span-4 grid max-w-sm grid-rows-subgrid gap-y-0 rounded-3xl hover:cursor-pointer"
    @click="navigateToPost(props.id)"
  >
    <div class="h-64 overflow-hidden rounded-3xl">
      <img
        :src="`${strapiApiUrl}${props.imageUrl}`"
        :alt="props.imageAlt"
        class="h-full w-full object-cover transition-all group-hover:scale-105"
      />
    </div>
    <h3
      class="mt-4 text-lg font-bold group-hover:underline md:mt-8 md:text-xl lg:text-2xl"
    >
      {{ props.title }}
    </h3>
    <p class="mt-3 md:mt-4">
      {{ shortenContent(props.content) }}
    </p>
    <p class="mt-4 font-medium text-[#6D6E76]">
      {{ props.author }} | {{ formatDate(props.date) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from "nuxt/app";
import type { BlogPost } from "@/interfaces/interfaces";

const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const props = defineProps<BlogPost>();

const navigateToPost = (id: number) => {
  navigateTo({ path: `/blog/${id}` });
};
</script>
