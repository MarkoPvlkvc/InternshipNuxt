<template>
  <nav
    class="flex flex-col justify-center px-10 py-2 text-black lg:flex-row lg:items-center lg:justify-between"
  >
    <p
      class="mb-6 mt-2.5 flex justify-between font-roboto text-3xl font-bold lg:my-0"
    >
      {Finsweet
      <button @click="toggleMenu">
        <i class="bi bi-list block lg:hidden"></i>
      </button>
    </p>
    <div
      :class="`flex flex-wrap items-center gap-8 overflow-hidden transition-all duration-500 ${isMenuOpen ? 'transition-max-height max-h-[1000px]' : 'max-h-0 transition-none'} lg:max-h-[1000px]`"
    >
      <NuxtLink to="/" class="w-full lg:w-fit">Home</NuxtLink>
      <NuxtLink to="/product" class="w-full lg:w-fit">Product</NuxtLink>
      <NuxtLink to="/pricing" class="w-full lg:w-fit">Pricing</NuxtLink>
      <NuxtLink to="/about_us" class="w-full lg:w-fit">About Us</NuxtLink>
      <NuxtLink to="/blog" class="w-full lg:w-fit">Blog</NuxtLink>
      <NuxtLink to="/contact" class="w-full lg:w-fit">Contact</NuxtLink>
      <Button buttonText="Free trial"></Button>
    </div>
  </nav>
  <NuxtPage />
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
