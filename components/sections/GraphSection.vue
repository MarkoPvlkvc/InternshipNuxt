<template>
  <section
    style="
      background: linear-gradient(
        -90deg,
        rgba(202, 207, 250, 0.25) 0%,
        rgba(174, 211, 255, 0.25) 50%,
        rgba(155, 255, 165, 0.25) 100%
      );
    "
  >
    <div
      class="mx-auto mb-16 grid w-full max-w-[1440px] grid-cols-1 gap-12 px-9 py-10 font-roboto text-black md:px-12 md:py-12 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:py-16"
    >
      <div class="flex flex-col items-center justify-center lg:items-start">
        <h2
          class="mb-2 text-3xl font-bold md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl"
        >
          More impressions, more conversions
        </h2>
        <p class="mb-4 text-sm md:mb-6 md:text-base lg:mb-8 lg:text-lg">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua invidunt ut labore.
        </p>
        <ButtonPrimary button-text="Get Free trial" />
      </div>
      <NuxtImg
        src="/conversions.png"
        alt="Conversions Image"
        class="mx-auto w-full max-w-[550px] lg:mx-0"
      />
    </div>
  </section>
</template>
