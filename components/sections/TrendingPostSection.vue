<template>
  <section class="mt-12 flex flex-col items-center md:mt-16 lg:mt-24">
    <h1 class="heading-1 mx-6 text-center">Read our latest blogs</h1>
    <p
      class="mx-6 mt-6 max-w-3xl text-center text-sm md:mx-12 md:text-base lg:mx-20 lg:text-lg"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor.
    </p>

    <template v-if="status === 'pending' || status === 'error'">
      <div
        class="group mx-6 mt-12 grid max-w-7xl grid-cols-1 gap-12 rounded-3xl border-[1px] border-[#D8D8D8] p-6 hover:cursor-pointer hover:border-black md:mx-12 md:grid-cols-2 md:p-9 lg:mx-20 lg:p-16"
        @click="navigateToPost(post?.id)"
      >
        <div class="h-fit">
          <p
            class="mb-2 w-fit bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-lg font-bold text-transparent md:mb-4 md:text-xl lg:mb-6 lg:text-2xl"
          >
            Trending Post
          </p>
          <p
            class="mt-6 animate-pulse rounded-xl bg-[#d8d8d8] text-3xl font-bold text-transparent md:text-4xl lg:text-5xl"
          >
            7 Automation use cases that foster excellent CX
          </p>
          <p
            class="mt-6 line-clamp-3 animate-pulse text-ellipsis rounded-xl bg-[#d8d8d8] text-[#6D6E76] text-transparent"
          >
            Egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet
            nisl suscipit adipiscing bibendum est ultricies integer quis auctor
            elit sed vulputate mi sit mu la ta na sa palsoe.
          </p>
          <p
            class="mt-8 animate-pulse rounded-xl bg-[#d8d8d8] font-medium text-[#6D6E76] text-transparent"
          >
            Luke Matthews | November 8, 2021
          </p>
        </div>

        <div class="relative overflow-hidden rounded-3xl">
          <NuxtImg
            src=""
            alt="placeholder image"
            class="absolute h-full w-full object-cover transition-transform group-hover:scale-105"
            :placeholder="placeholderImage"
          />
        </div>
      </div>
    </template>

    <template v-else>
      <div
        class="group mx-6 mt-12 grid max-w-7xl grid-cols-1 gap-12 rounded-3xl border-[1px] border-[#D8D8D8] p-6 hover:cursor-pointer hover:border-black md:mx-12 md:grid-cols-2 md:p-9 lg:mx-20 lg:p-16"
        @click="navigateToPost(post?.id)"
      >
        <div class="h-fit">
          <p
            class="mb-2 w-fit bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-lg font-bold text-transparent md:mb-4 md:text-xl lg:mb-6 lg:text-2xl"
          >
            Trending Post
          </p>
          <p class="mt-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {{ post?.title }}
          </p>
          <p class="mt-6 line-clamp-3 text-ellipsis text-[#6D6E76]">
            {{ post?.shortContent }}
          </p>
          <p class="mt-8 font-medium text-[#6D6E76]">
            {{ post?.author }} | {{ formatDate(post?.date) }}
          </p>
        </div>

        <div class="relative overflow-hidden rounded-3xl">
          <img
            :src="`${strapiApiUrl}${post?.imageUrl}`"
            :alt="post?.imageAlt"
            class="absolute h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ClassDictionary } from "clsx";
import type { BlogPost } from "@/interfaces/interfaces";
import navigateToPost from "@/utils/navigateToPost";

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const post = ref<BlogPost | null>(null);
const placeholderImage = "/person-fill.svg";

const { data, pending, error } = await useLazyAsyncData("", () =>
  $fetch(
    `${strapiApiUrl}/api/blog-posts?filters[Featured][$eq]=true&populate=*`,
    {
      headers: {
        Authorization: `bearer ${strapiApiKey}`,
      },
    },
  ),
);

const status = computed(() => {
  if (pending.value) return "pending";
  if (error.value) return "error";
  if (data.value) return "success";
  return "pending";
});

if (data.value) {
  const postData = (data.value as ClassDictionary).data?.[0];
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

if (error.value) {
  console.error("Error fetching post:", error.value);
}
</script>

<style lang="scss" scoped></style>
