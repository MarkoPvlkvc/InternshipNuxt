<template>
  <section
    class="relative mb-20 flex w-full flex-col items-center md:mb-24 lg:mb-32"
  >
    <h2
      class="mx-auto mb-6 max-w-3xl text-center text-3xl font-bold md:mb-9 md:text-4xl lg:mb-12 lg:text-5xl lg:leading-[57px]"
    >
      The stunning results our customers have experienced
    </h2>

    <Swiper
      :modules="[Pagination]"
      :slides-per-view="1"
      :slides-per-group="1"
      :space-between="30"
      :breakpoints="{
        '1280': {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      }"
      :centered-slides="false"
      :grab-cursor="true"
      :pagination="{
        clickable: true,
      }"
      class="h-[500px] max-w-full"
    >
      <SwiperSlide v-for="review in reviews" :key="review.id">
        <ReviewItem v-bind="review" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ClassDictionary } from "clsx";
import type { Review } from "@/interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;
const fallbackImageUrl = "/uploads/fallback_user_506e9bc015.png";

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
    imageUrl: review.attributes.Image.data?.attributes.url || fallbackImageUrl,
    imageAlt: review.attributes?.ImageAlt || "fallback image",
    fullName: review.attributes.FullName,
    position: review.attributes.Position,
  }));
}

if (error.value) {
  console.error("Error fetching all posts:", error.value);
}
</script>
