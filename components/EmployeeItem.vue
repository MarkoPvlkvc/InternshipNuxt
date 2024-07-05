<template>
  <div
    class="w-48 overflow-hidden rounded-xl bg-gray max-[450px]:w-36 md:w-56 lg:w-64"
  >
    <NuxtImg
      :src="`${strapiApiUrl}${props.imageUrl}`"
      :alt="props.imageAlt"
      class="h-40 w-full object-cover max-[450px]:h-32 md:h-48 lg:h-56"
    />
    <div class="px-6 py-4 max-[450px]:px-4 md:px-7 md:py-5 lg:px-8 lg:py-6">
      <h4
        class="text-lg font-bold !leading-5 max-[450px]:text-base md:text-xl lg:text-2xl"
      >
        {{ props.fullName }}
      </h4>
      <p class="mt-1 text-sm !leading-4 max-[450px]:text-xs md:text-base">
        {{ props.position }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Employee } from "~/interfaces/interfaces";

const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const props = defineProps<Employee>();
</script>

<style></style>
