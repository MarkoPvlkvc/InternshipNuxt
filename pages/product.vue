<template>
  <main class="flex flex-col items-center">
    <section
      class="mt-12 box-content grid max-w-screen-xl grid-cols-1 gap-20 px-6 sm:px-10 md:mt-16 md:px-20 lg:mt-24 xl:grid-cols-2"
    >
      <div>
        <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl xl:mt-14">
          Grow your Sales and Services
        </h1>
        <p class="mt-6 max-w-[600px] text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="mt-8 flex gap-4">
          <ButtonPrimary button-text="Get Started" />
          <ButtonPrimary
            button-text="Contact us"
            class="border-2 border-gray bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
          />
        </div>
      </div>
      <div
        class="max-h-[400px] max-w-xl justify-self-center overflow-hidden rounded-xl border-4 border-gray xl:justify-self-start"
      >
        <NuxtImg
          src="/dashboard.png"
          alt="Dashboard"
          class="h-full w-full object-cover"
        />
      </div>
    </section>

    <LogosSection class="mt-12 px-6 sm:px-10 md:mt-16 md:px-20 lg:mt-24" />

    <section
      class="mt-16 flex w-full flex-col items-center bg-gradient-to-r from-[#def8ed] via-[#cfe9f4] to-[#e9effb] md:mt-24 lg:mt-32"
    >
      <h2
        class="mx-auto mt-16 max-w-3xl px-6 text-center text-3xl font-bold sm:px-10 md:mt-24 md:px-20 md:text-4xl lg:mt-32 lg:text-5xl"
      >
        Get the best out of your company with our service
      </h2>

      <div class="w-full max-w-screen-2xl pr-6 sm:pr-10 md:pr-20">
        <FeaturesGrid
          :icons="[
            'bi-shield-fill-check',
            'bi-check-circle-fill',
            'bi-people-fill',
            'bi-chat-left-text-fill',
            'bi-chat-right-text-fill',
            'bi-file-earmark-text-fill',
          ]"
          :titles="[
            'Security and privacy',
            'Built-in AI features',
            'Collaborate with others',
            'Real time sync',
            'Built-in AI features',
            'Easy notes organization',
          ]"
          class="mt-12 rounded-none rounded-t-[64px] bg-[#f5f7fd]"
        />
      </div>
    </section>

    <section
      class="mt-16 grid max-w-screen-xl grid-cols-1 gap-x-20 gap-y-12 px-6 sm:px-10 md:mt-24 md:px-20 lg:mt-32 lg:grid-cols-[1fr_1.5fr]"
    >
      <div>
        <p
          class="w-fit bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-center text-lg font-bold text-transparent md:text-xl lg:mt-20 lg:text-2xl"
        >
          Marketing insights
        </p>
        <h2
          class="mt-2 max-w-xl text-3xl font-bold md:mt-4 md:text-4xl lg:mt-6 lg:text-5xl"
        >
          Data-driven client feedback
        </h2>
        <p class="mt-8 max-w-xl text-sm md:text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren.
        </p>
      </div>
      <div
        class="box-content max-h-72 px-6 sm:px-10 md:max-h-96 md:px-20 lg:max-h-[448px] lg:px-0"
      >
        <NuxtImg
          src="/conversions0.png"
          alt="Conversions Image"
          class="h-full w-full object-contain"
        />
      </div>
    </section>

    <section
      class="mt-16 grid max-w-screen-xl grid-cols-1 gap-x-20 gap-y-12 px-6 sm:px-10 md:mt-24 md:px-20 lg:mt-32 lg:grid-cols-[1.5fr_1fr]"
    >
      <div
        class="row-start-2 max-h-72 px-6 sm:px-10 md:max-h-96 md:px-20 lg:row-start-1 lg:max-h-[448px] lg:px-0"
      >
        <NuxtImg
          src="/conversions1.png"
          alt="Conversions Image"
          class="h-full w-full object-contain"
        />
      </div>
      <div>
        <p
          class="w-fit bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-center text-lg font-bold text-transparent md:text-xl lg:mt-20 lg:text-2xl"
        >
          Time tracker
        </p>
        <h2
          class="mt-2 max-w-xl text-3xl font-bold md:mt-4 md:text-4xl lg:mt-6 lg:text-5xl"
        >
          Track your project performance
        </h2>
        <p class="mt-8 max-w-xl text-sm md:text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren.
        </p>
      </div>
    </section>

    <section
      class="mb-20 mt-16 px-6 sm:px-10 md:mb-24 md:mt-24 md:px-20 lg:mb-32 lg:mt-32"
    >
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

    <CTASection class="px-6" />
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
