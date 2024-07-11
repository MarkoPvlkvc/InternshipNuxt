<template>
  <div
    class="group row-span-4 grid max-w-sm grid-rows-subgrid gap-y-0 rounded-3xl hover:cursor-pointer"
  >
    <div class="h-64 overflow-hidden rounded-3xl">
      <NuxtImg
        src=""
        alt="placeholder image"
        class="h-full w-full object-cover transition-all group-hover:scale-105"
        :placeholder="placeholderImage"
      />
    </div>
    <h5
      class="heading-5 mt-4 animate-pulse rounded-xl bg-[#d8d8d8] text-transparent group-hover:underline md:mt-8"
    >
      Managing rails application secrets with encrypted credentials
    </h5>
    <p
      class="mt-3 line-clamp-3 animate-pulse text-ellipsis rounded-xl bg-[#d8d8d8] text-transparent md:mt-4"
    >
      Egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl
      suscipit adipiscing bibendum est ultricies integer quis auctor elit sed
      vulputate mi sit lama no orochi na sa tu ne tata.
    </p>
    <p
      class="mt-4 animate-pulse rounded-xl bg-[#d8d8d8] font-medium text-[#6D6E76] text-transparent"
    >
      Luke Matthews | November 8, 2021
    </p>
  </div>
</template>

<script lang="ts" setup>
const placeholderImage = "/person-fill.svg";
</script>

<style></style>
