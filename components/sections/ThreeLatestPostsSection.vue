<template>
  <section class="mt-16 md:mt-24 lg:mt-32">
    <p class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      Read more posts
    </p>

    <div
      class="mx-6 mt-9 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-16 md:mx-12 md:mt-12 md:grid-cols-2 lg:mx-20 lg:mt-16 lg:grid-cols-3"
    >
      <BlogPostItem :posts="posts" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ClassDictionary } from "clsx";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
}

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const posts = ref<BlogPost[]>([]);

const { data, error } = await useFetch(
  `${strapiApiUrl}/blog-posts?populate=*&sort=createdAt:desc&pagination[pageSize]=3`,
  {
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  },
);

if (data.value) {
  const postData = (data.value as ClassDictionary).data;

  posts.value = postData.map((post: ClassDictionary) => ({
    id: post.id,
    title: post.attributes.Title,
    content: extractFirstParagraph(post.attributes.Content),
    author: post.attributes.Author.data.attributes.FullName,
    date: new Date(post.attributes.Date).toLocaleDateString(),
    imageUrl: post.attributes.Image.data.attributes.url,
  }));
}

if (error.value) {
  console.error("Error fetching latest posts:", error.value);
}

useSeoMeta({
  title: "Blog Post",
  ogTitle: "QED Internship Nuxt - Blog Post",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Blog Post",
});
</script>
