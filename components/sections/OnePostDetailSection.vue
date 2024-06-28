<template>
  <section class="mt-12 flex w-full flex-col items-center md:mt-16 lg:mt-24">
    <p
      class="max-w-3xl px-6 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
    >
      {{ post?.title }}
    </p>
    <p class="mt-4 font-medium text-[#6D6E76] md:mt-6">
      {{ post?.author }} | {{ formatDate(post?.date!) }}
    </p>

    <div
      class="mt-12 h-[512px] w-full max-w-screen-xl overflow-hidden rounded-3xl px-6 md:mt-16 md:px-12 lg:px-20"
    >
      <img
        :src="`${strapiApiUrl}${post?.imageUrl}`"
        :alt="post?.imageAlt"
        class="h-full w-full rounded-3xl object-cover"
      />
    </div>

    <div
      class="prose mt-12 max-w-3xl px-6 md:mt-16"
      v-html="sanitizedContent"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import DOMPurify from "dompurify";
import type { ClassDictionary } from "clsx";
import type { BlogPost } from "@/interfaces/interfaces";

const post = ref<BlogPost | null>(null);

const route = useRoute();
const postId = route.params.id;
const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const sanitizedContent = computed(() => {
  return post.value ? DOMPurify.sanitize(post.value.content) : "";
});

const { data, error } = await useFetch(
  `${strapiApiUrl}/api/blog-posts/${postId}?populate=*`,
  {
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  },
);

// Handle the response and map it to the Post interface
if (data.value) {
  const postData = (data.value as ClassDictionary).data;
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
  console.error("Error fetching post details:", error.value);
}

useSeoMeta({
  title: "Blog Post",
  ogTitle: "QED Internship Nuxt - Blog Post",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Blog Post",
});
</script>

<style lang="scss" scoped></style>
