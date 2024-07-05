<template>
  <section class="mt-12 flex flex-col items-center px-6 md:mt-16 lg:mt-24">
    <h1 class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      We are proud of our products
    </h1>
    <p class="mt-6 max-w-screen-md text-center text-base md:text-lg">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.
    </p>
    <div
      class="mt-16 box-content flex max-w-screen-lg flex-wrap justify-center gap-4 md:gap-5 lg:gap-6"
    >
      <div
        class="h-44 min-w-56 flex-1 overflow-hidden rounded-3xl md:h-56 lg:h-72"
      >
        <NuxtImg
          src="/about1.png"
          alt="Person using a laptop"
          class="h-full w-full object-cover"
        />
      </div>
      <div
        class="h-44 min-w-56 flex-1 overflow-hidden rounded-3xl md:h-56 lg:h-72"
      >
        <NuxtImg
          src="/about2.png"
          alt="Person using a laptop"
          class="h-full w-full object-cover"
        />
      </div>
      <div
        class="h-44 min-w-56 flex-1 overflow-hidden rounded-3xl md:h-56 lg:h-72"
      >
        <NuxtImg
          src="/about3.png"
          alt="People working at a office desk"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
