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
    <h5 class="heading-5 mt-4 group-hover:underline md:mt-8">
      {{ props.title }}
    </h5>
    <p class="mt-3 line-clamp-3 text-ellipsis md:mt-4">
      {{ props.shortContent }}
    </p>
    <p class="mt-4 font-medium text-[#6D6E76]">
      {{ props.author }} | {{ formatDate(props.date) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/interfaces/interfaces";
import navigateToPost from "@/utils/navigateToPost";

const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const props = defineProps<BlogPost>();
</script>
