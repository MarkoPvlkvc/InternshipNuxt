<template>
  <section
    class="mt-16 flex flex-col items-center px-6 sm:px-10 md:mt-24 md:px-20 lg:mt-32"
  >
    <h2 class="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
      Our corporate values
    </h2>
    <p class="mt-4 text-center text-sm md:text-base">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
    </p>
    <FeaturesGrid
      :icons="[
        'bi-hand-thumbs-up-fill',
        'bi-ticket-fill',
        'bi-envelope-fill',
        'bi-percent',
        'bi-megaphone-fill',
        'bi-bag-check-fill',
      ]"
      :titles="[
        'Best in class',
        'Authenticity',
        'Email support',
        'Discounts available',
        'Powerful marketing',
        'Inventory management',
      ]"
      class="mt-12 bg-[#f9f0fb]"
    />
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
