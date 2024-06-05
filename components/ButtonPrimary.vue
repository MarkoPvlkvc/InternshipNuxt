<template>
  <button :class="mergedClasses" :type="type" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
import { cn } from "@/lib/utils";

export default {
  props: {
    class: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "button",
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    mergedClasses() {
      return cn(
        "w-fit rounded-xl bg-black px-7 py-3 md:px-10 md:py-4 font-roboto font-bold text-white transition-all hover:bg-[#313852]",
        this.class,
      );
    },
  },
  methods: {
    handleClick() {
      this.clickHandler();
    },
  },
};
</script>

<style lang="scss" scoped></style>
