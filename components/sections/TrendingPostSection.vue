<template>
  <section class="mt-12 flex flex-col items-center md:mt-16 lg:mt-24">
    <p class="mx-6 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      Read our latest blogs
    </p>
    <p
      class="mx-6 mt-6 max-w-3xl text-center text-sm md:mx-12 md:text-base lg:mx-20 lg:text-lg"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor.
    </p>

    <div
      class="mx-6 mt-12 grid max-w-7xl grid-cols-1 gap-12 rounded-3xl border-[1px] border-[#D8D8D8] p-6 md:mx-12 md:grid-cols-2 md:p-9 lg:mx-20 lg:p-16"
    >
      <div class="h-fit">
        <p
          class="mb-2 w-fit bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-lg font-bold text-transparent md:mb-4 md:text-xl lg:mb-6 lg:text-2xl"
        >
          Trending Post
        </p>
        <p class="mt-6 text-3xl font-bold md:text-4xl lg:text-5xl">
          {{ post?.title }}
        </p>
        <p class="mt-6 text-[#6D6E76]">
          {{ shortenContent(extractFirstParagraph(post?.content)) }}
        </p>
        <p class="mt-8 font-medium text-[#6D6E76]">
          {{ post?.author }} | {{ formatDate(post?.date) }}
        </p>
      </div>

      <div class="relative overflow-hidden rounded-3xl">
        <img
          :src="`${strapiApiUrl}${post?.imageUrl}`"
          :alt="post?.imageAlt"
          class="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ClassDictionary } from "clsx";
import type { BlogPost } from "@/interfaces/interfaces";

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const post = ref<BlogPost | null>(null);

const { data, error } = await useFetch(
  `${strapiApiUrl}/api/blog-posts?filters[Featured][$eq]=true&populate=*`,
  {
    headers: {
      Authorization: `bearer ${strapiApiKey}`,
    },
  },
);

if (data.value) {
  const postData = (data.value as ClassDictionary).data[0];
  post.value = {
    id: postData.id,
    title: postData.attributes.Title,
    content: postData.attributes.Content,
    author: postData.attributes.Author.data.attributes.FullName,
    date: new Date(postData.attributes.Date),
    imageUrl: postData.attributes.Image.data.attributes.url,
    imageAlt: postData.attributes.ImageAlt,
  };
}

if (error.value) {
  console.error("Error fetching all posts:", error.value);
}
</script>

<style lang="scss" scoped></style>
