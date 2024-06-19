<template>
  <section class="mt-16 md:mt-24 lg:mt-32">
    <p class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      Read more posts
    </p>

    <div
      class="mx-6 mt-9 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-16 md:mx-12 md:mt-12 md:grid-cols-2 lg:mx-20 lg:mt-16 lg:grid-cols-3"
    >
      <div
        v-for="post in latestPosts"
        :key="post.id"
        class="group row-span-4 grid max-w-sm grid-rows-subgrid gap-y-0 rounded-3xl hover:cursor-pointer"
        @click="navigateToPost(post.id)"
      >
        <div class="h-64 overflow-hidden rounded-3xl">
          <img
            :src="`http://localhost:1337${post.imageUrl}`"
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import type { ClassDictionary } from "clsx";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

const latestPosts = ref<Blog[]>([]);

const router = useRouter();
const strapiApiKey = useRuntimeConfig().public.strapiApiKey;

const navigateToPost = (id: number) => {
  router.push({ path: `/blog/${id}` });
};

const fetchLatestPosts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/blog-posts?populate=*&sort=createdAt:desc&pagination[pageSize]=3",
      {
        headers: {
          Authorization: `Bearer ${strapiApiKey}`,
        },
      },
    );
    latestPosts.value = response.data.data.map(
      (post: {
        id: number;
        attributes: {
          Title: string;
          Content: string;
          Author: string;
          Date: string | number | Date;
          Image: ClassDictionary;
        };
      }) => ({
        id: post.id,
        title: post.attributes.Title,
        content: post.attributes.Content,
        author: post.attributes.Author,
        date: new Date(post.attributes.Date).toLocaleDateString(),
        imageUrl: post.attributes.Image.data.attributes.url,
      }),
    );
  } catch (error) {
    console.error("Error fetching latest posts:", error);
  }
};

onMounted(() => {
  fetchLatestPosts();
});

const shortenContent = (content: string) => {
  const maxLength = 150; // Adjust the maximum length as needed
  if (content.length <= maxLength) {
    return content;
  } else {
    return content.slice(0, maxLength) + "...";
  }
};

const formatDate = (dateString: string) => {
  if (!dateString) return;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

useSeoMeta({
  title: "Blog Post",
  ogTitle: "QED Internship Nuxt - Blog Post",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Blog Post",
});
</script>
