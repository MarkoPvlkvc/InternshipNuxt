<template>
  <template v-if="status === 'pending' || status === 'error'">
    <section class="mt-12 flex w-full flex-col items-center md:mt-16 lg:mt-24">
      <h1
        class="heading-1 max-w-3xl animate-pulse rounded-xl bg-[#d8d8d8] px-6 text-center text-transparent"
      >
        New invoicing features to help you get paid faster
      </h1>
      <p
        class="mt-4 animate-pulse rounded-xl bg-[#d8d8d8] font-medium text-[#6D6E76] text-transparent md:mt-6"
      >
        Luke Matthews | November 8, 2021
      </p>

      <div
        class="mt-12 h-[512px] w-full max-w-screen-xl overflow-hidden rounded-3xl px-6 md:mt-16 md:px-12 lg:px-20"
      >
        <NuxtImg
          src=""
          alt="placeholder image"
          class="h-full w-full rounded-3xl object-cover"
          :placeholder="placeholderImage"
        />
      </div>

      <div
        class="prose mt-12 max-w-3xl animate-pulse rounded-xl bg-[#d8d8d8] px-6 text-transparent md:mt-16"
      >
        Loading...
      </div>
    </section>
  </template>

  <template v-else>
    <section class="mt-12 flex w-full flex-col items-center md:mt-16 lg:mt-24">
      <h1 class="heading-1 max-w-3xl px-6 text-center">
        {{ post?.title }}
      </h1>
      <p class="mt-4 font-medium text-[#6D6E76] md:mt-6">
        {{ post?.author }} |
        {{ formatDate(post?.date!) }}
      </p>

      <div
        class="mt-12 h-[512px] w-full max-w-screen-xl overflow-hidden rounded-3xl px-6 md:mt-16 md:px-12 lg:px-20"
      >
        <NuxtImg
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import DOMPurify from "isomorphic-dompurify";
import type { ClassDictionary } from "clsx";
import type { BlogPost } from "@/interfaces/interfaces";

const post = ref<BlogPost | null>(null);

const route = useRoute();
let postId = route.params.id;
const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;
const placeholderImage = "/person-fill.svg";

const sanitizedContent = computed(() => {
  return post.value ? DOMPurify.sanitize(post.value.content) : "";
});

const status = ref("pending");
const pending = ref<boolean>(true);
const data = ref<unknown>(null);
const error = ref<unknown>(null);

const fetchPostData = async () => {
  status.value = "pending";
  pending.value = true;
  error.value = null;
  try {
    const result = await $fetch(
      `${strapiApiUrl}/api/blog-posts/${postId}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${strapiApiKey}`,
        },
      },
    );
    data.value = result;
    status.value = "success";
  } catch (err) {
    error.value = err;
    status.value = "error";
  } finally {
    pending.value = false;
  }

  if (data.value) {
    const postData = (data.value as ClassDictionary).data;
    if (postData && postData.attributes) {
      post.value = {
        id: postData.id,
        title: postData.attributes.Title,
        shortContent: postData.attributes.shortContent,
        content: postData.attributes.Content,
        author: postData.attributes.Author.data.attributes.FullName,
        date: postData.attributes.Date,
        imageUrl: postData.attributes.Image.data?.attributes.url,
        imageAlt: postData.attributes.Image.data?.attributes.alternativeText,
      };
    }
  }
};

fetchPostData();

watch(
  () => route.params.id,
  (newId) => {
    if (newId != undefined) {
      postId = newId;
      fetchPostData();
    }
  },
);

useSeoMeta({
  title: "Blog Post",
  ogTitle: "QED Internship Nuxt - Blog Post",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Blog Post",
});
</script>

<style lang="scss" scoped></style>
