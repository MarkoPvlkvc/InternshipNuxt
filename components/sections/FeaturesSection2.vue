<template>
  <section class="mb-20 md:mb-24 lg:mb-32">
    <h2
      class="mb-6 text-center text-3xl font-bold md:mb-9 md:text-4xl lg:mb-12 lg:text-5xl"
    >
      Features
    </h2>
    <FeaturesGrid
      style="background-color: #f9f0fb"
      :icons="['bi-lock-fill', 'bi-chat-right-text-fill', 'bi-robot']"
      :titles="[
        'Advanced 256-bit encryption',
        'Simple collaboration tools',
        'Customizable AI features',
      ]"
      :has-divider="true"
    />
  </section>
</template>
