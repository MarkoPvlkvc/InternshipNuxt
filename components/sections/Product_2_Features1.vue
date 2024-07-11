<template>
  <section
    class="mt-16 flex w-full flex-col items-center bg-gradient-to-r from-[#def8ed] via-[#cfe9f4] to-[#e9effb] md:mt-24 lg:mt-32"
  >
    <h2
      class="heading-2 mx-auto mt-16 max-w-3xl px-6 text-center sm:px-10 md:mt-24 md:px-20 lg:mt-32"
    >
      Get the best out of your company with our service
    </h2>

    <div class="w-full max-w-screen-2xl pr-6 sm:pr-10 md:pr-20">
      <FeaturesGrid
        :icons="[
          'bi-shield-fill-check',
          'bi-check-circle-fill',
          'bi-people-fill',
          'bi-chat-left-text-fill',
          'bi-chat-right-text-fill',
          'bi-file-earmark-text-fill',
        ]"
        :titles="[
          'Security and privacy',
          'Built-in AI features',
          'Collaborate with others',
          'Real time sync',
          'Built-in AI features',
          'Easy notes organization',
        ]"
        class="mt-12 rounded-none rounded-t-[64px] bg-[#f5f7fd]"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
