<template>
  <main>
    <div class="w-vw mx-6 box-content font-roboto text-black sm:mx-10 md:mx-20">
      <div class="flex w-full flex-col items-center">
        <section
          class="relative mb-32 mt-24 flex w-[75%] flex-col items-center"
        >
          <h1
            class="max-w-3lg mb-8 text-wrap text-center text-6xl font-bold leading-[60px]"
          >
            The Best Software to Grow your Sales and Services
          </h1>
          <p class="mb-12 text-wrap text-center text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <InputWithButton
            placeholder-text="Enter Your Email"
            button-text="Get Free trial"
            :has-padding="true"
            class="mb-16"
          />
          <div
            class="absolute left-[10%] top-[20%] -z-10 hidden size-[450px] rounded-full opacity-40 blur-3xl sm:top-[25%] sm:block md:top-[15%] lg:left-[15%] lg:top-[10%]"
            style="
              background: linear-gradient(
                -90deg,
                rgba(202, 207, 250, 1) 0%,
                rgba(174, 211, 255, 1) 50%,
                rgba(155, 255, 165, 1) 100%
              );
            "
          ></div>
          <NuxtImg src="/dashboard.png" alt="Dashboard Image" class="w-full" />
        </section>

        <section class="mb-32">
          <p
            class="mb-6 bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-center text-2xl font-bold text-transparent"
          >
            High-quality
          </p>
          <h1
            class="mb-12 text-wrap text-center text-5xl font-bold leading-[60px]"
          >
            We have the Best Solution <br />
            for your Business
          </h1>
          <FeaturesGrid
            :icons="[
              'bi-shield-fill-check',
              'bi-hand-thumbs-up-fill',
              'bi-headset',
            ]"
            :titles="[
              'High security to protect from piracy',
              'Premium quality performance',
              'Full time customer support - 24/7',
            ]"
          />
        </section>

        <section class="mb-32 grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <p
              class="mb-6 bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-2xl font-bold text-transparent"
            >
              Why should you work with us?
            </p>
            <p class="mb-8 text-5xl font-bold leading-[57px]">
              To upscale your business to the next level
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div class="flex flex-col">
            <p class="mb-8 flex gap-6 text-xl font-medium">
              <NuxtImg
                src="arrowRight.svg"
                alt="Right Arrow Icon"
                class="size-12"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <p class="mb-8 flex gap-6 text-xl font-medium">
              <NuxtImg
                src="arrowRight.svg"
                alt="Right Arrow Icon"
                class="size-12"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <p class="mb-8 flex gap-6 text-xl font-medium">
              <NuxtImg
                src="arrowRight.svg"
                alt="Right Arrow Icon"
                class="size-12"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </section>
      </div>
    </div>

    <section
      style="
        background: linear-gradient(
          -90deg,
          rgba(202, 207, 250, 0.25) 0%,
          rgba(174, 211, 255, 0.25) 50%,
          rgba(155, 255, 165, 0.25) 100%
        );
      "
      class="mb-16 grid w-full grid-cols-1 gap-20 px-20 py-16 font-roboto text-black lg:grid-cols-2"
    >
      <div class="flex flex-col items-center justify-center lg:items-start">
        <p class="mb-6 text-5xl font-bold">
          More impressions, more conversions
        </p>
        <p class="mb-8">
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
    </section>

    <div class="mx-10 font-roboto text-black md:mx-20">
      <div class="flex w-full flex-col items-center">
        <section
          class="mb-32 flex w-full flex-wrap justify-center gap-x-[100px] gap-y-9"
        >
          <NuxtImg src="/logoipsum1.svg" alt="Logoipsum 1" class="h-10" />
          <NuxtImg src="/logoipsum2.svg" alt="Logoipsum 2" class="h-10" />
          <NuxtImg src="/logoipsum3.svg" alt="Logoipsum 3" class="h-10" />
          <NuxtImg src="/logoipsum4.svg" alt="Logoipsum 4" class="h-10" />
          <NuxtImg src="/logoipsum5.svg" alt="Logoipsum 5" class="h-10" />
        </section>

        <section class="mb-32 grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <p
              class="mb-6 bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-2xl font-bold text-transparent"
            >
              Discover More
            </p>
            <p class="mb-8 text-5xl font-bold leading-[57px]">
              Analyze your sales and marketing leads
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div class="flex flex-col">
            <div class="mb-10 flex gap-8">
              <NuxtImg
                src="discoverIcon1.svg"
                alt="Sales Tracking Image"
                class="size-[72px]"
              />
              <div>
                <p class="mb-2 text-2xl font-bold">Sales Tracking</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
            <div class="mb-10 flex gap-8">
              <NuxtImg
                src="discoverIcon2.svg"
                alt="Sales Tracking Image"
                class="size-[72px]"
              />
              <div>
                <p class="mb-2 text-2xl font-bold">Project Management</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
            <div class="mb-10 flex gap-8">
              <NuxtImg
                src="discoverIcon3.svg"
                alt="Sales Tracking Image"
                class="size-[72px]"
              />
              <div>
                <p class="mb-2 text-2xl font-bold">Activity Report</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-32">
          <p class="mb-12 text-center text-5xl font-bold">Features</p>
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

        <section class="mb-32">
          <p class="mb-12 text-center text-5xl font-bold leading-[57px]">
            The stunning results our <br />
            customers have experienced
          </p>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div
              class="flex flex-col items-center rounded-3xl border-2 border-solid border-[#6199ED42] p-16"
            >
              <p class="mb-6 text-center text-lg font-semibold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <NuxtImg
                src="/employee1.png"
                alt="Employee 1"
                class="mb-3 size-14 rounded-full object-cover"
              />
              <p class="text-[20px] font-medium">Ron Wood</p>
              <p class="text-xs">CEO</p>
            </div>
            <div
              class="flex flex-col items-center rounded-3xl border-2 border-solid border-[#6199ED42] p-16"
            >
              <p class="mb-6 text-center text-lg font-semibold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <NuxtImg
                src="/employee2.png"
                alt="Employee 2"
                class="mb-3 size-14 rounded-full object-cover"
              />
              <p class="text-[20px] font-medium">Mark Mason</p>
              <p class="text-xs">Marketing Manager</p>
            </div>
            <div
              class="flex flex-col items-center rounded-3xl border-2 border-solid border-[#6199ED42] p-16"
            >
              <p class="mb-6 text-center text-lg font-semibold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <NuxtImg
                src="/employee3.png"
                alt="Employee 3"
                class="mb-3 size-14 rounded-full object-cover"
              />
              <p class="text-[20px] font-medium">Sam Preston</p>
              <p class="text-xs">CTO</p>
            </div>
          </div>
        </section>

        <section class="relative mb-32 flex flex-col items-center">
          <p class="mb-6 text-center text-[56px] font-bold leading-[61px]">
            Are you ready to grow your <br />
            business with us?
          </p>
          <p class="mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
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
      </div>
    </div>
  </main>
</template>
