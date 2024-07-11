<template>
  <div
    class="flex flex-col items-center rounded-3xl border-solid bg-white"
    :style="`${isRecommended ? 'border: solid #6b7cff 4px;' : 'border: solid #D8D8D8 1px'}`"
  >
    <div class="flex items-center gap-6 p-6 pb-0 md:p-9 lg:p-12">
      <svg
        class="size-10 md:size-14"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="27" cy="27" r="27" fill="#E6E6E6" />
        <rect x="16" y="27" width="9" height="13" rx="4.5" fill="#1D2130" />
        <rect x="16" y="16" width="20" height="9" rx="4.5" fill="#1D2130" />
        <rect x="27" y="27" width="9" height="13" rx="4.5" fill="#1D2130" />
      </svg>

      <div>
        <h3 class="heading-3">{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="my-6 h-[1px] w-full bg-[#D8D8D8] md:my-8"></div>

    <div class="flex w-full flex-col gap-6 px-6 md:px-9 lg:px-12">
      <div class="flex gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#D5F5EA" />
          <path
            d="M7 12.5L10.6667 16L18 9"
            stroke="#1D2130"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="font-bold">Limited Projects</p>
      </div>

      <div class="flex gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#D5F5EA" />
          <path
            d="M7 12.5L10.6667 16L18 9"
            stroke="#1D2130"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="font-bold">Regular Support Business</p>
      </div>

      <div class="flex gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#D5F5EA" />
          <path
            d="M7 12.5L10.6667 16L18 9"
            stroke="#1D2130"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="font-bold">1 month Free Trial</p>
      </div>

      <div class="flex gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#D5F5EA" />
          <path
            d="M7 12.5L10.6667 16L18 9"
            stroke="#1D2130"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="font-bold">3GB storage</p>
      </div>

      <div class="flex gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#D5F5EA" />
          <path
            d="M7 12.5L10.6667 16L18 9"
            stroke="#1D2130"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="font-bold">ADs Preview</p>
      </div>
    </div>

    <p class="mt-6 max-w-96 px-12 text-center text-sm md:mt-8">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
    </p>
    <p
      class="mt-9 text-center text-2xl font-bold md:mt-12 md:text-3xl lg:text-4xl"
    >
      {{ monthlySelected ? priceMonthly : priceYearly }}
    </p>
    <p class="text-xs text-black/75">For Limited Period</p>

    <ButtonPrimary button-text="Get started" class="mb-9 mt-6 md:mb-12" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priceMonthly: {
      type: String,
      required: true,
    },
    priceYearly: {
      type: String,
      required: true,
    },
    monthlySelected: {
      type: Boolean,
      default: true,
    },
    isRecommended: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
