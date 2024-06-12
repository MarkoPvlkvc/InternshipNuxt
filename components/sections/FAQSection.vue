<template>
  <section
    class="mx-6 mt-16 grid max-w-7xl grid-cols-[1fr_auto] gap-8 rounded-3xl bg-[#f0f2fe] p-6 max-[900px]:grid-cols-1 sm:p-9 md:mt-24 md:p-12 lg:mt-32 lg:p-16"
  >
    <div>
      <p class="text-3xl font-bold md:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </p>
      <p class="mt-7">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <div
        v-for="(item, index) in dropdowns"
        :key="index"
        v-auto-animate
        class="flex w-[500px] flex-col items-center justify-center rounded-3xl bg-white p-5 hover:cursor-pointer max-[900px]:w-full md:p-8 lg:w-[600px] lg:p-10"
        @click="toggleDropdown(index)"
      >
        <div class="flex w-full items-center justify-between">
          <p class="text-lg font-bold md:text-xl lg:text-2xl">
            {{ item.question }}
          </p>
          <img v-if="!item.show" src="/plusIcon.svg" class="size-5" />
          <img v-if="item.show" src="/minusIcon.svg" class="size-5" />
        </div>
        <p v-if="item.show" class="mt-4 max-w-xl max-[900px]:max-w-none">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { vAutoAnimate } from "@formkit/auto-animate";

const dropdowns = ref([
  {
    question: "How do I grow my business?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    show: true,
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    show: false,
  },
  {
    question: "How do I contact the support?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    show: false,
  },
  {
    question: "Is a credit card required?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    show: false,
  },
]);

const toggleDropdown = (index) => {
  dropdowns.value.forEach((dropdown, i) => {
    dropdown.show = i === index ? true : false;
  });
};
</script>
