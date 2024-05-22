<template>
  <div class="w-vw mx-6 box-content font-roboto text-black sm:mx-10 md:mx-20">
    <div class="flex w-full flex-col items-center">
      <section class="relative mb-32 mt-24 flex w-[75%] flex-col items-center">
        <h1
          class="mb-8 text-wrap text-center text-6xl font-bold leading-[60px]"
        >
          The Best Software to Grow <br />
          your Sales and Services
        </h1>
        <p class="mb-12 text-wrap text-center text-lg">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <InputWithButton
          placeholderText="Enter Your Email"
          buttonText="Get Free trial"
          :hasPadding="true"
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
        <Features
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
      <p class="mb-6 text-5xl font-bold">More impressions, more conversions</p>
      <p class="mb-8">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua invidunt ut labore.
      </p>
      <Button buttonText="Get Free trial" />
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
        <Features
          style="background-color: #f9f0fb"
          :icons="['bi-lock-fill', 'bi-chat-right-text-fill', 'bi-robot']"
          :titles="[
            'Advanced 256-bit encryption',
            'Simple collaboration tools',
            'Customizable AI features',
          ]"
          :hasDivider="true"
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
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
        <Button buttonText="View Pricing" />

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

  <footer class="mt-auto w-full bg-black font-roboto">
    <div
      class="mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pt-20"
    >
      <!-- Grid -->
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        <div class="col-span-1">
          <h4 class="font-semibold text-white">Company</h4>

          <div class="mt-3 grid space-y-3 text-white/60">
            <p>
              <a class="inline-flex gap-x-2" href="#">About Us</a>
            </p>
            <p>
              <a class="inline-flex gap-x-2" href="#">Why Choose us</a>
            </p>
            <p>
              <a class="inline-flex gap-x-2" href="#">Pricing</a>
            </p>
            <p>
              <a class="inline-flex gap-x-2" href="#">Testimonial</a>
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <h4 class="font-semibold text-white">Resources</h4>

          <div class="mt-3 grid space-y-3 text-white/60">
            <p>
              <a class="hover:text-gray-200 inline-flex gap-x-2" href="#"
                >Privacy Policy</a
              >
            </p>
            <p>
              <a class="hover:text-gray-200 inline-flex gap-x-2" href="#"
                >Terms and Conditions</a
              >
            </p>
            <p>
              <a class="hover:text-gray-200 inline-flex gap-x-2" href="#"
                >Blog</a
              >
            </p>
            <p>
              <a class="hover:text-gray-200 inline-flex gap-x-2" href="#"
                >Contact Us</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <h4 class="font-semibold text-white">Product</h4>

          <div class="mt-3 grid space-y-3 text-white/60">
            <p>
              <a class="hover:text-gray-200 inline-flex gap-x-2" href="#"
                >Project management</a
              >
            </p>
            <p>
              <a class="hover:text-gray-200 inline-flex gap-x-2" href="#"
                >Time tracker</a
              >
            </p>
            <p>
              <a class="hover:text-gray-200 inline-flex gap-x-2" href="#"
                >Time schedule</a
              >
            </p>
            <p>
              <a
                class="text-gray-400 hover:text-gray-200 inline-flex gap-x-2"
                href="#"
                >Lead generate</a
              >
            </p>
            <p>
              <a
                class="text-gray-400 hover:text-gray-200 inline-flex gap-x-2"
                href="#"
                >Remote collaboration</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-2 text-white">
          <p class="mb-9 text-3xl font-bold">{Finsweet</p>

          <h4 class="mb-4 text-lg font-semibold">
            Subscribe to our Newsletter
          </h4>

          <InputWithButton
            placeholderText="Enter your Email"
            buttonText="Subscribe"
            :hasPadding="false"
            :inverted="true"
            style="max-width: 420px; background-color: #2b2e3c"
          />
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <div
        class="mt-5 grid grid-cols-[1fr_auto_auto_1fr] gap-x-8 gap-y-2 text-white/50 sm:mt-12 sm:items-center sm:justify-center sm:gap-y-0"
      >
        <div class="h-px w-full bg-white/50"></div>

        <div class="flex items-center justify-between">
          <p class="text-sm">© Copyright Finsweet 2022</p>
        </div>
        <!-- End Col -->

        <!-- Social Brands -->
        <div class="text-white/50">
          <a
            class="focus:ring-gray-600 inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            <svg
              class="size-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a
            class="focus:ring-gray-600 inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            <svg
              class="size-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
              />
            </svg>
          </a>
          <a
            class="focus:ring-gray-600 inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            <svg
              class="size-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
          <a
            class="focus:ring-gray-600 inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            <svg
              class="size-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <a
            class="focus:ring-gray-600 inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            <svg
              class="size-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"
              />
            </svg>
          </a>
        </div>
        <!-- End Social Brands -->

        <div class="h-px w-full rounded-full bg-white/50"></div>
      </div>
    </div>
  </footer>
</template>
