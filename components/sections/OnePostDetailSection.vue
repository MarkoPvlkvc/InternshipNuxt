<template>
  <section class="mt-12 flex w-full flex-col items-center md:mt-16 lg:mt-24">
    <p
      class="max-w-3xl px-6 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
    >
      {{ blog?.title }}
    </p>
    <p class="mt-4 font-medium text-[#6D6E76] md:mt-6">
      {{ blog?.author }} | {{ formatDate(blog?.date!) }}
    </p>

    <div
      class="mt-12 h-[512px] w-full max-w-screen-xl overflow-hidden rounded-3xl px-6 md:mt-16 md:px-12 lg:px-20"
    >
      <img
        :src="`http://localhost:1337${blog?.imageUrl}`"
        class="h-full w-full rounded-3xl object-cover"
      />
    </div>

    <p class="mt-12 max-w-3xl px-6 md:mt-16">
      {{ blog?.content }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

const blog = ref<Blog | null>(null);

const route = useRoute();
const strapiApiKey = useRuntimeConfig().public.strapiApiKey;

const fetchBlogDetails = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/blog-posts/${id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${strapiApiKey}`,
        },
      },
    );
    const blogData = response.data.data;
    blog.value = {
      id: blogData.id,
      title: blogData.attributes.Title,
      content: blogData.attributes.Content,
      author: blogData.attributes.Author,
      date: new Date(blogData.attributes.Date).toLocaleDateString(),
      imageUrl: blogData.attributes.Image.data.attributes.url,
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);
  }
};

onMounted(() => {
  const { id } = route.params;
  fetchBlogDetails(id.toString());
});

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

<style lang="scss" scoped></style>
