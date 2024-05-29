<template>
  <div
    class="grid w-full grid-cols-1 gap-8 rounded-3xl bg-gray p-16 text-black lg:grid-cols-3"
  >
    <template v-for="(icon, index) in icons" :key="index">
      <div class="relative">
        <div class="row-span-3 grid-rows-subgrid">
          <i :class="`bi ${icon} mb-6 block text-5xl text-blue`" />
          <p class="mb-5 font-roboto text-[32px] font-bold leading-9">
            {{ titles[index] }}
          </p>
          <p class="font-roboto">
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
