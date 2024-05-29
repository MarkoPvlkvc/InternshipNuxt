<template>
  <section class="relative mb-20 flex flex-col items-center md:mb-24 lg:mb-32">
    <p
      class="mb-4 max-w-3xl text-center text-4xl font-bold md:text-5xl lg:mb-6 lg:text-[56px] lg:leading-[61px]"
    >
      Are you ready to grow your business with us?
    </p>
    <p
      class="mb-6 max-w-3xl text-center text-xs md:text-base lg:mb-8 lg:text-lg"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
    </p>
    <ButtonPrimary button-text="View Pricing" />

    <div
      class="absolute -bottom-[75%] left-[50%] -z-10 hidden h-[250px] w-dvw -translate-x-[50%] rounded-full opacity-40 blur-3xl sm:block"
      style="
        background: linear-gradient(
          -90deg,
          rgba(202, 207, 250, 1) 0%,
          rgba(174, 211, 255, 1) 50%,
          rgba(155, 255, 165, 1) 100%
        );
      "
    ></div>
  </section>
</template>
