<template>
  <main>
    <div class="w-vw mx-6 box-content font-roboto text-black sm:mx-10 md:mx-20">
      <div class="flex w-full flex-col items-center">
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
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

        <section
          class="mb-20 grid max-w-[1280px] grid-cols-1 gap-10 md:mb-24 md:gap-12 lg:mb-32 lg:grid-cols-2 lg:gap-20"
        >
          <div>
            <p
              class="mb-2 bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-lg font-bold text-transparent md:mb-4 md:text-xl lg:mb-6 lg:text-2xl"
            >
              Why should you work with us?
            </p>
            <p
              class="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl lg:mb-8 lg:text-6xl lg:leading-[57px]"
            >
              To upscale your business to the next level
            </p>
            <p class="text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div class="flex flex-col">
            <p
              class="mb-8 flex gap-6 text-base font-medium md:text-lg lg:text-xl"
            >
              <NuxtImg
                src="arrowRight.svg"
                alt="Right Arrow Icon"
                class="my-auto size-10 lg:size-12"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <p
              class="mb-8 flex gap-6 text-base font-medium md:text-lg lg:text-xl"
            >
              <NuxtImg
                src="arrowRight.svg"
                alt="Right Arrow Icon"
                class="my-auto size-10 lg:size-12"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <p
              class="mb-8 flex gap-6 text-base font-medium md:text-lg lg:text-xl"
            >
              <NuxtImg
                src="arrowRight.svg"
                alt="Right Arrow Icon"
                class="my-auto size-10 lg:size-12"
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
    >
      <div
        class="mx-auto mb-16 grid w-full max-w-[1440px] grid-cols-1 gap-12 px-9 py-10 font-roboto text-black md:px-12 md:py-12 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:py-16"
      >
        <div class="flex flex-col items-center justify-center lg:items-start">
          <p
            class="mb-2 text-3xl font-bold md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl"
          >
            More impressions, more conversions
          </p>
          <p class="mb-4 text-sm md:mb-6 md:text-base lg:mb-8 lg:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
          <ButtonPrimary button-text="Get Free trial" />
        </div>
        <NuxtImg
          src="/conversions.png"
          alt="Conversions Image"
          class="mx-auto w-full max-w-[550px] lg:mx-0"
        />
      </div>
    </section>

    <div class="mx-10 font-roboto text-black md:mx-20">
      <div class="flex w-full flex-col items-center">
        <section
          class="mb-20 flex w-full flex-wrap justify-center gap-x-[100px] gap-y-9 md:mb-24 lg:mb-32"
        >
          <NuxtImg
            src="/logoipsum1.svg"
            alt="Logoipsum 1"
            class="h-6 md:h-8 lg:h-10"
          />
          <NuxtImg
            src="/logoipsum2.svg"
            alt="Logoipsum 2"
            class="h-6 md:h-8 lg:h-10"
          />
          <NuxtImg
            src="/logoipsum3.svg"
            alt="Logoipsum 3"
            class="h-6 md:h-8 lg:h-10"
          />
          <NuxtImg
            src="/logoipsum4.svg"
            alt="Logoipsum 4"
            class="h-6 md:h-8 lg:h-10"
          />
          <NuxtImg
            src="/logoipsum5.svg"
            alt="Logoipsum 5"
            class="h-6 md:h-8 lg:h-10"
          />
        </section>

        <section
          class="mb-20 grid max-w-[1280px] grid-cols-1 gap-10 md:mb-24 md:gap-12 lg:mb-32 lg:grid-cols-2 lg:gap-20"
        >
          <div>
            <p
              class="mb-2 bg-gradient-to-r from-gradient_blue_1 to-gradient_blue_2 bg-clip-text text-lg font-bold text-transparent md:mb-4 md:text-xl lg:mb-6 lg:text-2xl"
            >
              Discover More
            </p>
            <p
              class="mb-4 text-3xl font-bold md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl lg:leading-[57px]"
            >
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
                class="my-auto size-14 lg:size-[72px]"
              />
              <div>
                <p class="mb-2 text-lg font-bold md:text-xl lg:text-2xl">
                  Sales Tracking
                </p>
                <p class="text-sm md:text-base lg:text-lg">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
            <div class="mb-10 flex gap-8">
              <NuxtImg
                src="discoverIcon2.svg"
                alt="Sales Tracking Image"
                class="my-auto size-14 lg:size-[72px]"
              />
              <div>
                <p class="mb-2 text-lg font-bold md:text-xl lg:text-2xl">
                  Project Management
                </p>
                <p class="text-sm md:text-base lg:text-lg">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
            <div class="mb-10 flex gap-8">
              <NuxtImg
                src="discoverIcon3.svg"
                alt="Sales Tracking Image"
                class="my-auto size-14 lg:size-[72px]"
              />
              <div>
                <p class="mb-2 text-lg font-bold md:text-xl lg:text-2xl">
                  Activity Report
                </p>
                <p class="text-sm md:text-base lg:text-lg">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-20 md:mb-24 lg:mb-32">
          <p
            class="mb-6 text-center text-3xl font-bold md:mb-9 md:text-4xl lg:mb-12 lg:text-5xl"
          >
            Features
          </p>
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

        <section class="mb-20 md:mb-24 lg:mb-32">
          <p
            class="mx-auto mb-6 max-w-3xl text-center text-3xl font-bold md:mb-9 md:text-4xl lg:mb-12 lg:text-5xl lg:leading-[57px]"
          >
            The stunning results our customers have experienced
          </p>
          <div
            class="grid max-w-[1280px] grid-cols-1 gap-2 md:gap-4 lg:grid-cols-3 lg:gap-6"
          >
            <div
              class="flex flex-col items-center rounded-3xl border-2 border-solid border-[#6199ED42] p-9 md:p-12 lg:p-16"
            >
              <p
                class="mb-6 text-center font-semibold sm:text-sm md:text-base lg:text-lg"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <NuxtImg
                src="/employee1.png"
                alt="Employee 1"
                class="mb-3 size-14 rounded-full object-cover"
              />
              <p class="text-base font-medium md:text-lg lg:text-[20px]">
                Ron Wood
              </p>
              <p class="text-xs">CEO</p>
            </div>
            <div
              class="flex flex-col items-center rounded-3xl border-2 border-solid border-[#6199ED42] p-9 md:p-12 lg:p-16"
            >
              <p
                class="mb-6 text-center font-semibold sm:text-sm md:text-base lg:text-lg"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <NuxtImg
                src="/employee2.png"
                alt="Employee 2"
                class="mb-3 size-14 rounded-full object-cover"
              />
              <p class="text-base font-medium md:text-lg lg:text-[20px]">
                Mark Mason
              </p>
              <p class="text-xs">Marketing Manager</p>
            </div>
            <div
              class="flex flex-col items-center rounded-3xl border-2 border-solid border-[#6199ED42] p-9 md:p-12 lg:p-16"
            >
              <p
                class="mb-6 text-center font-semibold sm:text-sm md:text-base lg:text-lg"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <NuxtImg
                src="/employee3.png"
                alt="Employee 3"
                class="mb-3 size-14 rounded-full object-cover"
              />
              <p class="text-base font-medium md:text-lg lg:text-[20px]">
                Sam Preston
              </p>
              <p class="text-xs">CTO</p>
            </div>
          </div>
        </section>

        <section
          class="relative mb-20 flex flex-col items-center md:mb-24 lg:mb-32"
        >
          <p
            class="mb-4 max-w-3xl text-center text-4xl font-bold md:text-5xl lg:mb-6 lg:text-[56px] lg:leading-[61px]"
          >
            Are you ready to grow your business with us?
          </p>
          <p
            class="mb-6 max-w-3xl text-center text-xs md:text-base lg:mb-8 lg:text-lg"
          >
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
