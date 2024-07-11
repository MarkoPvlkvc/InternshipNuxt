<template>
  <section
    class="mx-6 mt-16 grid max-w-7xl grid-cols-[1fr_auto] gap-8 rounded-3xl bg-[#f0f2fe] p-6 max-[900px]:grid-cols-1 sm:p-9 md:mt-24 md:p-12 lg:mt-32 lg:p-16"
  >
    <div>
      <h2 class="heading-2">Frequently Asked Questions</h2>
      <p class="mt-7">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <template v-if="status === 'pending' || status === 'error'">
        <div
          v-for="i in 3"
          :key="i"
          class="flex w-[500px] flex-col items-center justify-center rounded-3xl bg-white p-5 hover:cursor-pointer max-[900px]:w-full md:p-8 lg:w-[600px] lg:p-10"
        >
          <div class="flex w-full items-center justify-between">
            <p
              class="animate-pulse rounded-xl bg-[#d8d8d8] text-lg font-bold text-transparent md:text-xl lg:text-2xl"
            >
              How do I grow my business?
            </p>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          v-for="(item, index) in faqs"
          :key="index"
          v-auto-animate
          class="flex w-[500px] flex-col items-center justify-center rounded-3xl bg-white p-5 hover:cursor-pointer max-[900px]:w-full md:p-8 lg:w-[600px] lg:p-10"
          @click="toggleDropdown(index)"
        >
          <div class="flex w-full items-center justify-between">
            <p class="text-lg font-bold md:text-xl lg:text-2xl">
              {{ item.question }}
            </p>
            <img
              :src="item.show ? '/minusIcon.svg' : '/plusIcon.svg'"
              :alt="item.show ? 'Minus Icon' : 'Plus Icon'"
              class="size-5"
            />
          </div>
          <p v-if="item.show" class="mt-4 max-w-xl max-[900px]:max-w-none">
            {{ item.answer }}
          </p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vAutoAnimate } from "@formkit/auto-animate";
import type { ClassDictionary } from "clsx";

interface Faq {
  id: number;
  question: string;
  answer: string;
  show: boolean;
}

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const faqs = ref<Faq[]>([]);

const { status, data, error } = await useLazyAsyncData("faqs", () =>
  $fetch(`${strapiApiUrl}/api/faqs`, {
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  }),
);

if (data.value) {
  const faqData = (data.value as ClassDictionary).data;

  faqs.value = faqData.map((faq: ClassDictionary) => ({
    id: faq.id,
    question: faq.attributes.Question,
    answer: faq.attributes.Answer,
    show: false,
  }));
}

if (error.value) {
  console.error("Error fetching all posts:", error.value);
}

const toggleDropdown = (index: number) => {
  faqs.value.forEach((dropdown, i) => {
    dropdown.show = i === index ? true : false;
  });
};
</script>
