<template>
  <div
    class="flex w-fit flex-col items-center justify-between rounded-3xl border-2 border-solid border-[#6199ED42] p-9 md:p-12 lg:p-16"
  >
    <p
      class="mb-6 max-w-72 text-center font-semibold sm:text-sm md:text-base lg:text-lg"
    >
      {{ props.comment }}
    </p>
    <div class="flex flex-col items-center">
      <NuxtImg
        :src="`${strapiApiUrl}${props.imageUrl}`"
        :alt="props.imageAlt"
        class="mb-3 size-14 rounded-full object-cover"
        :placeholder="placeholderImage"
      />
      <p class="text-base font-medium md:text-lg lg:text-[20px]">
        {{ props.fullName }}
      </p>
      <p class="text-xs">{{ props.position }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Review } from "@/interfaces/interfaces";

const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;
const placeholderImage = "person-circle.svg";

const props = defineProps<Review>();
</script>
