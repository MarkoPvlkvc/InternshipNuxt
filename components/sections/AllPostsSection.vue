<template>
  <section class="mt-16 md:mt-24 lg:mt-32">
    <p class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      All posts
    </p>

    <div
      class="mx-6 mt-9 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-16 md:mx-12 md:mt-12 md:grid-cols-2 lg:mx-20 lg:mt-16 lg:grid-cols-3"
    >
      <BlogPostItem :posts="posts" />
    </div>

    <div class="mx-auto mt-16 flex w-fit gap-2">
      <button
        v-for="(_, index) in pageCount"
        :key="index"
        :class="`${Number.parseInt(page) - 1 == index ? 'bg-black text-white' : ''} size-9 rounded-xl border-[1px] border-[#D8D8D8] transition-colors`"
        @click="navigateToPage(index + 1)"
      >
        {{ index + 1 }}
      </button>
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

const route = useRoute();
const pageCount = ref();
const page = ref(route.query.page as string);

const posts = ref<BlogPost[]>([]);

const navigateToPage = (pageNumber: number) => {
  navigateTo({
    path: route.path,
    query: { ...route.query, page: pageNumber.toString() },
  });
};

watch(
  () => route.query.page,
  (newPage) => {
    page.value = (newPage as string) || "1";
    fetchAllPosts();
  },
);

const fetchAllPosts = async () => {
  const { data, error } = await useFetch(
    `${strapiApiUrl}/blog-posts?pagination[page]=${page.value}&pagination[pageSize]=3&populate=*`,
    {
      headers: {
        Authorization: `bearer ${strapiApiKey}`,
      },
    },
  );

  if (data.value) {
    const postData = (data.value as ClassDictionary).data;
    pageCount.value = (data.value as ClassDictionary).meta.pagination.pageCount;

    posts.value = postData.map((post: ClassDictionary) => ({
      id: post.id,
      title: post.attributes.Title,
      content: extractFirstParagraph(post.attributes.Content),
      author: post.attributes.Author.data.attributes.FullName,
      date: new Date(post.attributes.Date).toLocaleDateString(),
      imageUrl: post.attributes.Image.data.attributes.url,
      imageAlt: post.attributes.ImageAlt,
    }));
  }

  if (error.value) {
    console.error("Error fetching all posts:", error.value);
  }
};

fetchAllPosts();

useSeoMeta({
  title: "Blog",
  ogTitle: "QED Internship Nuxt - Blog",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Blog",
});
</script>

<style lang="scss" scoped></style>
