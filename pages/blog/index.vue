<template>
  <main class="flex flex-col items-center">
    <TrendingPostSection />

    <AllPostsSection />

    <CTASection class="mx-8 mt-16 md:mt-24 lg:mt-32" />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: [
    function (to) {
      if (to.path === "/blog" && !to.query.page) {
        console.log("Redirecting to page 1");
        return navigateTo({ path: to.path, query: { ...to.query, page: "1" } });
      }
    },
  ],
});

useSeoMeta({
  title: "Blog",
  ogTitle: "QED Internship Nuxt - Blog",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Blog",
});
</script>

<style lang="scss" scoped></style>
