<template>
  <button
    class="w-fit rounded-xl bg-black px-10 py-4 font-roboto font-bold text-white"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
