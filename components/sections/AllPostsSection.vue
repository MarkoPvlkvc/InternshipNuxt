<template>
  <section class="mt-16 md:mt-24 lg:mt-32">
    <p class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      All posts
    </p>

    <div
      class="mx-6 mt-9 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-16 md:mx-12 md:mt-12 md:grid-cols-2 lg:mx-20 lg:mt-16 lg:grid-cols-3"
    >
      <div
        v-for="blog in blogs"
        :key="blog.id"
        class="group row-span-4 grid max-w-sm grid-rows-subgrid gap-y-0 rounded-3xl hover:cursor-pointer"
        @click="navigateToPost(blog.id)"
      >
        <div class="h-64 overflow-hidden rounded-3xl">
          <img
            :src="`http://localhost:1337${blog.imageUrl}`"
            class="h-full w-full object-cover transition-all group-hover:scale-105"
          />
        </div>
        <p
          class="mt-4 text-lg font-bold group-hover:underline md:mt-8 md:text-xl lg:text-2xl"
        >
          {{ blog.title }}
        </p>
        <p class="mt-3 md:mt-4">
          {{ shortenContent(blog.content) }}
        </p>
        <p class="mt-4 font-medium text-[#6D6E76]">
          {{ blog.author }} | {{ formatDate(blog.date) }}
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
  date: string; // Assuming Date is stored as string in your API response
  imageUrl: string; // Assuming imageUrl is a string
}

const blogs = ref<Blog[]>([]);
const strapiApiKey = useRuntimeConfig().public.strapiApiKey;

const router = useRouter();

const navigateToPost = (id: number) => {
  router.push({ path: `/blog/${id}` });
};

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/blog-posts?populate=*",
      {
        headers: {
          Authorization: `bearer ${strapiApiKey}`,
        },
      },
    );
    // Assuming response.data.data contains the array of blogs
    blogs.value = response.data.data.map(
      (blog: {
        id: number;
        attributes: {
          Title: string;
          Content: string;
          Author: string;
          Date: string;
          Image: ClassDictionary;
        };
      }) => ({
        id: blog.id,
        title: blog.attributes.Title,
        content: blog.attributes.Content,
        author: blog.attributes.Author,
        date: new Date(blog.attributes.Date).toLocaleDateString(),
        imageUrl: blog.attributes.Image.data.attributes.url, // Adjust according to your Strapi response
      }),
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
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
  title: "Blog",
  ogTitle: "QED Internship Nuxt - Blog",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Blog",
});
</script>

<style lang="scss" scoped></style>
