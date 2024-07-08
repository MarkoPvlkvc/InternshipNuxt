<template>
  <main class="flex flex-col items-center">
    <Product1Hero />

    <LogosSection class="mt-12 px-6 sm:px-10 md:mt-16 md:px-20 lg:mt-24" />

    <Product2Features1 />

    <Product3Graph1 />

    <Product4Graph2 />

    <Product5Graph3 />

    <Product6Graph4 />

    <Product7Features2 />

    <CTASection class="px-6" />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Product",
  ogTitle: "QED Internship Nuxt - Product",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Product",
});
</script>

<style lang="scss" scoped></style>
