<template>
  <section
    class="mt-12 box-content grid max-w-screen-xl grid-cols-1 gap-20 px-6 sm:px-10 md:mt-16 md:px-20 lg:mt-24 xl:grid-cols-2"
  >
    <div>
      <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl xl:mt-14">
        Grow your Sales and Services
      </h1>
      <p class="mt-6 max-w-[600px] text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="mt-8 flex gap-4">
        <ButtonPrimary button-text="Get Started" />
        <ButtonPrimary
          button-text="Contact us"
          class="border-2 border-gray bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
        />
      </div>
    </div>
    <div
      class="max-h-[400px] max-w-xl justify-self-center overflow-hidden rounded-xl border-4 border-gray xl:justify-self-start"
    >
      <NuxtImg
        src="/dashboard.png"
        alt="Dashboard"
        class="h-full w-full object-cover"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
