<template>
  <div
    class="grid w-full max-w-[1280px] grid-cols-1 gap-8 rounded-3xl bg-gray p-9 text-black md:p-12 lg:grid-cols-3 lg:p-16"
  >
    <template v-for="(icon, index) in icons" :key="index">
      <div class="relative">
        <div class="row-span-3 grid-rows-subgrid">
          <i
            :class="`bi ${icon} mb-2 block text-3xl text-blue md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl`"
          />
          <p
            class="mb-3 font-roboto text-xl font-bold md:mb-4 md:text-2xl lg:mb-5 lg:text-[32px] lg:leading-9"
          >
            {{ titles[index] }}
          </p>
          <p class="font-roboto text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
        <!-- Divider -->
        <div
          v-if="index !== icons.length - 1 && hasDivider"
          class="top:full absolute h-[2px] w-full translate-y-4 rounded-full bg-[#CDC7D2] lg:left-full lg:top-0 lg:h-full lg:w-[2px] lg:translate-x-4"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Array,
      required: true,
    },
    titles: {
      type: Array,
      required: true,
    },
    hasDivider: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
