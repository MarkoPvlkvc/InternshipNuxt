<template>
  <section class="mb-20 md:mb-24 lg:mb-32">
    <p
      class="mb-2 bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-center text-lg font-bold text-transparent md:mb-4 md:text-xl lg:mb-6 lg:text-2xl"
    >
      High-quality
    </p>
    <h1
      class="mx-auto mb-6 max-w-3xl text-wrap text-center text-3xl font-bold sm:text-4xl md:mb-9 md:text-5xl lg:mb-12 lg:text-6xl lg:leading-[60px]"
    >
      We have the Best Solution for your Business
    </h1>
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
