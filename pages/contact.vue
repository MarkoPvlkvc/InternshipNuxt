<script setup lang="ts">
useSeoMeta({
  title: "Contact",
  ogTitle: "QED Internship Nuxt - Contact",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - Contact",
});
</script>

<template>
  <main>
    <div class="w-vw mx-6 box-content font-roboto text-black sm:mx-10 md:mx-20">
      <div class="flex w-full flex-col items-center">
        <ContactSection />

        <CTASection />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped></style>
