<template>
  <section class="mt-16 md:mt-24 lg:mt-32">
    <p class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      All posts
    </p>

    <div
      class="mx-6 mt-9 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-16 md:mx-12 md:mt-12 md:grid-cols-2 lg:mx-20 lg:mt-16 lg:grid-cols-3"
    >
      <template v-for="post in posts" :key="post.id">
        <BlogPostItem v-bind="post" />
      </template>
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
import type { BlogPost } from "@/interfaces/interfaces";

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const route = useRoute();
const pageCount = ref(0);
const page = ref((route.query.page as string) || "1");

const posts = ref<BlogPost[]>([]);

const navigateToPage = (pageNumber: number) => {
  navigateTo({
    path: route.path,
    query: { ...route.query, page: pageNumber.toString() },
  });
};

const fetchAllPosts = async (pageValue: string) => {
  const { data, error } = await useFetch(
    `${strapiApiUrl}/api/blog-posts?pagination[page]=${pageValue}&pagination[pageSize]=3&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${strapiApiKey}`,
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
      date: new Date(post.attributes.Date),
      imageUrl: post.attributes.Image.data.attributes.url,
      imageAlt: post.attributes.ImageAlt,
    }));
  }

  if (error.value) {
    console.error("Error fetching all posts:", error.value);
  }
};

watch(
  () => route.query.page,
  (newPage) => {
    if ((newPage as string) != page.value) {
      page.value = (newPage as string) || "1";
      fetchAllPosts(page.value);
    }
  },
);

fetchAllPosts(page.value);
</script>

<style lang="scss" scoped></style>
