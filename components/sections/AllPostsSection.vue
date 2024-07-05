<template>
  <section class="mt-16 md:mt-24 lg:mt-32">
    <h2 class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      All posts
    </h2>

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
const fallbackImage = "/uploads/fallback_blog_image_d67d69f3e1.png";

const route = useRoute();
const pageCount = ref(0);
const page = ref((route.query.page as string) || "1");

const navigateToPage = (pageNumber: number) => {
  navigateTo({
    path: route.path,
    query: { ...route.query, page: pageNumber.toString() },
  });
};

const { data } = useFetch(`${strapiApiUrl}/api/blog-posts?`, {
  query: {
    populate: "*",
    "pagination[page]": page,
    "pagination[pageSize]": "3",
  },
  headers: {
    Authorization: `Bearer ${strapiApiKey}`,
  },
});

const posts = computed<BlogPost[]>(() => {
  if (data.value) {
    const postData = (data.value as ClassDictionary).data;

    const allPosts = postData.map((post: ClassDictionary) => ({
      id: post.id,
      title: post.attributes.Title,
      content: extractFirstParagraph(post.attributes.Content),
      author: post.attributes.Author.data.attributes.FullName,
      date: new Date(post.attributes.Date),
      imageUrl: post.attributes.Image.data?.attributes.url || fallbackImage,
      imageAlt: post.attributes.ImageAlt,
    }));

    return allPosts;
  } else {
    return [];
  }
});

watchEffect(() => {
  if (data.value) {
    pageCount.value = (data.value as ClassDictionary).meta.pagination.pageCount;
  }
});

watchEffect(() => {
  page.value = (route.query.page as string) || "1";
});
</script>

<style lang="scss" scoped></style>
