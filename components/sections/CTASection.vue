<template>
  <section class="relative mb-20 flex flex-col items-center md:mb-24 lg:mb-32">
    <h2 class="heading-1 mb-4 max-w-3xl text-center lg:mb-6">
      Are you ready to grow your business with us?
    </h2>
    <p
      class="mb-6 max-w-3xl text-center text-xs md:text-base lg:mb-8 lg:text-lg"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
    </p>
    <NuxtLink to="/pricing">
      <ButtonPrimary button-text="View Pricing" />
    </NuxtLink>

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
