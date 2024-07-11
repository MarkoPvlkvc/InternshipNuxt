<template>
  <section class="mb-20 flex flex-col items-center md:mb-24 lg:mb-32">
    <p
      class="mb-2 w-fit bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-center text-lg font-bold leading-[1.5] text-transparent md:mb-4 md:text-xl lg:mb-6 lg:text-2xl"
    >
      High-quality
    </p>
    <h2
      class="heading-2 mx-auto mb-6 max-w-3xl text-wrap text-center md:mb-9 lg:mb-12"
    >
      We have the Best Solution for your Business
    </h2>
    <FeaturesGrid
      :icons="['bi-shield-fill-check', 'bi-hand-thumbs-up-fill', 'bi-headset']"
      :titles="[
        'High security to protect from piracy',
        'Premium quality performance',
        'Full time customer support - 24/7',
      ]"
    />
  </section>
</template>
