<template>
  <section
    id="feedback"
    class="relative mb-20 flex w-full flex-col items-center md:mb-24 lg:mb-32"
  >
    <h2 class="heading-2 mx-auto mb-6 max-w-3xl text-center md:mb-9 lg:mb-12">
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
      class="w-fit max-w-screen-xl"
    >
      <template v-if="status === 'pending' || status === 'error'">
        <SwiperSlide v-for="i in 3" :key="i">
          <ReviewItemSkeleton />
        </SwiperSlide>
      </template>
      <template v-else>
        <SwiperSlide v-for="review in reviews" :key="review.id">
          <ReviewItem v-bind="review" />
        </SwiperSlide>
      </template>
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

const reviews = ref<Review[]>([]);

const { status, data, error } = await useLazyAsyncData("reviews", () =>
  $fetch(`${strapiApiUrl}/api/reviews?populate=*`, {
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  }),
);

watch(status, (newStatus) => {
  console.log("status changed to", newStatus);
});

if (data.value) {
  const reviewData = (data.value as ClassDictionary).data;

  reviews.value = reviewData.map((review: ClassDictionary) => ({
    id: review.id,
    comment: review.attributes.Comment,
    imageUrl: review.attributes.Image.data?.attributes.url,
    imageAlt: review.attributes?.ImageAlt || "fallback image",
    fullName: review.attributes.FullName,
    position: review.attributes.Position,
  }));
}

if (error.value) {
  console.error("Error fetching all reviews:", error.value);
}
</script>
