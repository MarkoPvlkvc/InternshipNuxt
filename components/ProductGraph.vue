<template>
  <div>
    <section
      id="marketingInsights"
      :class="`${parentDivClass} mt-16 grid max-w-screen-xl grid-cols-1 gap-x-20 gap-y-12 px-6 sm:px-10 md:mt-24 md:px-20 lg:mt-32`"
    >
      <div>
        <p
          class="w-fit bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-center text-lg font-bold text-transparent md:text-xl lg:mt-20 lg:text-2xl"
        >
          {{ props.subtitle }}
        </p>
        <h2 class="heading-2 mt-2 max-w-xl md:mt-4 lg:mt-6">
          {{ props.title }}
        </h2>
        <p class="mt-8 max-w-xl text-sm md:text-base">
          {{ props.description }}
        </p>
      </div>
      <div
        :class="`${imageDivClass} box-content max-h-72 px-6 sm:px-10 md:max-h-96 md:px-20 lg:max-h-[448px] lg:px-0`"
      >
        <NuxtImg
          :src="props.image"
          alt="Conversions Image"
          class="h-full w-full object-contain"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "@/interfaces/interfaces";

const props = defineProps<Product>();

const parentDivClass = computed(() => {
  return props.imageSide == "left"
    ? "lg:grid-cols-[1.5fr_1fr]"
    : "lg:grid-cols-[1fr_1.5fr]";
});

const imageDivClass = computed(() => {
  return props.imageSide == "left" ? "lg:order-first" : "";
});
</script>

<style></style>
