<template>
  <section class="mt-12 flex flex-col items-center md:mt-16 lg:mt-24">
    <p class="max-w-lg text-center text-4xl font-bold md:text-5xl lg:text-6xl">
      Pricing plans that suit you
    </p>
    <p class="mt-6 max-w-sm text-center text-base md:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor.
    </p>
    <div class="mt-6 flex rounded-[20px] bg-gray p-2">
      <ButtonPrimary
        button-text="Monthly"
        :click-handler="
          () => {
            monthlySelected = true;
          }
        "
        :class="`${monthlySelected ? '' : 'bg-transparent text-black hover:bg-black/15'}`"
      />
      <ButtonPrimary
        button-text="Yearly"
        :click-handler="
          () => {
            monthlySelected = false;
          }
        "
        :class="`${monthlySelected ? 'bg-transparent text-black hover:bg-black/15' : ''}`"
      />
    </div>
    <div class="mx-6 mt-12 flex flex-col justify-center gap-6 xl:flex-row">
      <PricingCard
        title="Regular"
        description="Starter Plan"
        price-monthly="Free"
        price-yearly="Free"
        :monthly-selected="monthlySelected"
      />
      <PricingCard
        title="Platinum"
        description="For the best results"
        price-monthly="$342"
        price-yearly="$4000"
        :monthly-selected="monthlySelected"
        :is-recommended="true"
      />
      <PricingCard
        title="Standard"
        description="Most popular"
        price-monthly="$234"
        price-yearly="$2700"
        :monthly-selected="monthlySelected"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      monthlySelected: true,
    };
  },
};
</script>
