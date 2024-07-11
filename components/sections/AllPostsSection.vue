<template>
  <section class="mt-16 md:mt-24 lg:mt-32">
    <h2 class="heading-2 text-center">All posts</h2>

    <div
      class="mx-6 mt-9 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-16 md:mx-12 md:mt-12 md:grid-cols-2 lg:mx-20 lg:mt-16 lg:grid-cols-3"
    >
      <template v-if="status === 'pending' || status === 'error'">
        <BlogPostItemSkeleton v-for="i in 3" :key="i" />
      </template>
      <template v-else>
        <BlogPostItem v-for="post in posts" :key="post.id" v-bind="post" />
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

const navigateToPage = (pageNumber: number) => {
  navigateTo({
    path: route.path,
    query: { ...route.query, page: pageNumber.toString() },
  });
};

const { data, pending, error, refresh } = await useLazyAsyncData(() =>
  $fetch(`${strapiApiUrl}/api/blog-posts`, {
    params: {
      populate: "*",
      "pagination[page]": page.value,
      "pagination[pageSize]": "3",
    },
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  }),
);

const status = computed(() => {
  if (pending.value) return "pending";
  if (error.value) return "error";
  if (data.value) return "success";
  return "pending";
});

const posts = computed<BlogPost[]>(() => {
  if (data.value) {
    const postData = (data.value as ClassDictionary).data;

    return postData.map((post: ClassDictionary) => ({
      id: post.id,
      title: post.attributes.Title,
      shortContent: post.attributes.shortContent,
      content: extractFirstParagraph(post.attributes.Content),
      author: post.attributes.Author.data.attributes.FullName,
      date: new Date(post.attributes.Date),
      imageUrl: post.attributes.Image.data?.attributes.url,
      imageAlt: post.attributes.Image.data.attributes.alternativeText,
    }));
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
  refresh();
});
</script>

<style lang="scss" scoped></style>
