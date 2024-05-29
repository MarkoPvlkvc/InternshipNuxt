<template>
  <div
    :class="`flex flex-col rounded-[20px] bg-white sm:flex-row ${hasPadding ? 'p-2' : 'px-2 pb-2 sm:p-0'} w-fit max-w-[576px] items-center sm:w-full sm:pl-6`"
  >
    <input
      :placeholder="placeholderText"
      class="my-4 bg-transparent text-center text-xs focus:outline-none sm:my-0 sm:text-start md:flex-grow md:text-base lg:text-lg"
    />
    <ButtonPrimary
      :class="`${inverted ? 'border-[2px] border-white bg-white text-[#1d2130] hover:bg-[#1d2130] hover:text-white' : ''}`"
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
