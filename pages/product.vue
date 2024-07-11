<template>
  <main class="flex flex-col items-center">
    <Product1Hero />

    <LogosSection class="mt-12 px-6 sm:px-10 md:mt-16 md:px-20 lg:mt-24" />

    <Product2Features1 />

    <template v-for="product in products" :key="product.id">
      <ProductGraph v-bind="product" />
    </template>

    <Product7Features2 />

    <CTASection class="px-6" />
  </main>
</template>

<script setup lang="ts">
import type { Product } from "@/interfaces/interfaces";

const products = ref<Product[]>([
  {
    subtitle: "Marketing insights",
    title: "Data-driven client feedback",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    image: "/conversions0.png",
    imageSide: "right",
  },
  {
    subtitle: "Time tracker",
    title: "Track your project performance",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    image: "/conversions2.png",
    imageSide: "left",
  },
  {
    subtitle: "Lead generation",
    title: "More leads that convert",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    image: "/conversions1.png",
    imageSide: "right",
  },
  {
    subtitle: "Remote teams",
    title: "Real-time collaboration",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    image: "/conversions1.png",
    imageSide: "left",
  },
]);

useSeoMeta({
  title: "Product",
  ogTitle: "QED Internship Nuxt - Product",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Product",
});
</script>

<style lang="scss" scoped></style>
