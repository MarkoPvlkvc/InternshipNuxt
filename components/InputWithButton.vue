<template>
  <div
    :class="`flex flex-col rounded-[20px] bg-white sm:flex-row ${hasPadding ? 'p-2' : 'pb-3 sm:p-0'} w-fit max-w-[576px] items-center sm:w-full sm:pl-6`"
  >
    <input
      :placeholder="placeholderText"
      class="my-4 flex-grow bg-transparent text-center focus:outline-none sm:my-0 sm:text-start"
    />
    <ButtonPrimary
      :style="`${inverted ? 'background-color: white; color: #1d2130;' : ''}`"
      :button-text="buttonText"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholderText: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    hasPadding: {
      type: Boolean,
      required: true,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
