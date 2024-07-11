<template>
  <div
    class="w-48 overflow-hidden rounded-xl bg-gray max-[450px]:w-36 md:w-56 lg:w-64"
  >
    <NuxtImg
      src=""
      alt="placeholder image"
      class="h-40 w-full object-cover max-[450px]:h-32 md:h-48 lg:h-56"
      :placeholder="placeholderImage"
    />
    <div class="px-6 py-4 max-[450px]:px-4 md:px-7 md:py-5 lg:px-8 lg:py-6">
      <h5
        class="heading-5 animate-pulse rounded-xl bg-[#d8d8d8] text-transparent max-[450px]:text-base"
      >
        Blake Matthews
      </h5>
      <p
        class="mt-1 animate-pulse rounded-xl bg-[#d8d8d8] text-sm !leading-4 text-transparent max-[450px]:text-xs md:text-base"
      >
        CEO & Founder
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const placeholderImage = "/person-fill.svg";
</script>

<style></style>
