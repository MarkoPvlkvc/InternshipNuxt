<template>
  <section
    class="relative mb-20 mt-9 flex w-full flex-col items-center md:mb-24 md:mt-12 md:w-[85%] lg:mb-32 lg:mt-24 lg:w-[75%]"
  >
    <h1
      class="mb-4 max-w-3xl text-wrap text-center text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl lg:mb-8 lg:text-6xl lg:leading-[60px]"
    >
      The Best Software to Grow your Sales and Services
    </h1>
    <p
      class="mb-6 max-w-3xl text-wrap text-center text-sm md:mb-9 md:text-base lg:mb-12 lg:text-lg"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
    </p>
    <InputWithButton
      placeholder-text="Enter Your Email"
      button-text="Get Free trial"
      :has-padding="true"
      class="mb-9 md:mb-12 lg:mb-16"
    />
    <div
      class="absolute top-[15%] -z-10 mx-auto size-[250px] rounded-full opacity-40 blur-3xl md:top-[5%] md:size-[350px] md:-translate-x-[100px] lg:size-[450px]"
      style="
        background: linear-gradient(
          -90deg,
          rgba(202, 207, 250, 1) 0%,
          rgba(174, 211, 255, 1) 50%,
          rgba(155, 255, 165, 1) 100%
        );
      "
    ></div>
    <NuxtImg
      src="/dashboard.png"
      alt="Dashboard Image"
      class="w-full max-w-[1024px]"
    />
  </section>
</template>
