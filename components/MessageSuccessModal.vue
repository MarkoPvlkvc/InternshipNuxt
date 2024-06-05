<template>
  <div
    v-if="showModal"
    id="hs-task-created-alert"
    class="fixed top-0 z-10 flex h-full w-full items-center justify-center bg-black/50"
  >
    <div
      class="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white px-16 py-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 30 30"
        class="fill-green-600"
      >
        <path
          d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.707,12.707l-7.56,7.56 c-0.188,0.188-0.442,0.293-0.707,0.293s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0 l2.746,2.746l6.853-6.853c0.391-0.391,1.023-0.391,1.414,0S22.098,12.316,21.707,12.707z"
        ></path>
      </svg>
      <p>Message Successfully Sent!</p>
      <button
        class="mt-4 rounded-xl bg-black px-6 py-2 text-white"
        @click="toggleModal"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  methods: {
    toggleModal() {
      this.$emit("close");
    },
  },
};
</script>
