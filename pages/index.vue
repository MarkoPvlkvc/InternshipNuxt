<script setup lang="ts">
useSeoMeta({
  title: "Home",
  ogTitle: "QED Internship Nuxt - Home",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Home",
});
</script>

<template>
  <main>
    <div class="w-vw mx-6 box-content font-roboto text-black sm:mx-10 md:mx-20">
      <div class="flex w-full flex-col items-center">
        <HeroSection />

        <FeaturesSection />

        <ReasonsSection />
      </div>
    </div>

    <GraphSection />

    <div class="mx-10 font-roboto text-black md:mx-20">
      <div class="flex w-full flex-col items-center">
        <LogosSection />

        <ReasonsSection2 />

        <FeaturesSection2 />

        <FeedbackSection />

        <CTASection />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {};
</script>
