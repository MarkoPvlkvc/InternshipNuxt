<template>
  <section class="mb-20 md:mb-24 lg:mb-32">
    <p
      class="mx-auto mb-6 max-w-3xl text-center text-3xl font-bold md:mb-9 md:text-4xl lg:mb-12 lg:text-5xl lg:leading-[57px]"
    >
      The stunning results our customers have experienced
    </p>
    <div
      class="grid max-w-[1280px] grid-cols-1 gap-2 md:gap-4 lg:grid-cols-3 lg:gap-6"
    >
      <template v-for="review in reviews" :key="review.id">
        <ReviewItem v-bind="review" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ClassDictionary } from "clsx";
import type { Review } from "@/interfaces/interfaces";

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const reviews = ref<Review[]>([]);

const { data, error } = await useFetch(
  `${strapiApiUrl}/api/reviews?populate=*`,
  {
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  },
);

if (data.value) {
  const reviewData = (data.value as ClassDictionary).data;

  reviews.value = reviewData.map((review: ClassDictionary) => ({
    id: review.id,
    comment: review.attributes.Comment,
    imageUrl: review.attributes.Image.data.attributes.url,
    imageAlt: review.attributes.ImageAlt,
    fullName: review.attributes.FullName,
    position: review.attributes.Position,
  }));
}

if (error.value) {
  console.error("Error fetching all posts:", error.value);
}
</script>
