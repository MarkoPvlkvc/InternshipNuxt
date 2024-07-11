<template>
  <div
    class="flex w-fit flex-col items-center justify-between rounded-3xl border-2 border-solid border-[#6199ED42] p-9 md:p-12 lg:p-16"
  >
    <p
      class="mb-6 max-w-72 animate-pulse rounded-xl bg-[#d8d8d8] text-center font-semibold text-transparent sm:text-sm md:text-base lg:text-lg"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.
    </p>
    <div class="flex flex-col items-center">
      <NuxtImg
        src=""
        alt="placeholder image"
        class="mb-3 size-14 rounded-full object-cover"
        :placeholder="placeholderImage"
      />
      <div class="animate-pulse rounded-xl bg-[#d8d8d8]">
        <p
          class="text-base font-medium text-transparent md:text-lg lg:text-[20px]"
        >
          Ron wood
        </p>
        <p class="text-xs text-transparent">CEO CEO</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const placeholderImage = "person-circle.svg";
</script>
