<template>
  <section class="mb-16 mt-10 md:mb-24 md:mt-16 lg:mb-32 lg:mt-24">
    <h1
      class="mb-9 text-center text-3xl font-bold leading-[61.6px] md:mb-12 md:text-4xl lg:mb-16 lg:text-[56px]"
    >
      Get in touch with us
    </h1>
    <div
      class="grid w-full grid-cols-1 gap-16 rounded-3xl bg-[#f0f2fe] p-9 md:gap-24 md:p-12 lg:grid-cols-2 lg:gap-36 lg:p-16"
    >
      <div>
        <p
          class="mb-2 text-2xl font-bold md:mb-3 md:text-3xl lg:mb-4 lg:text-4xl"
        >
          Drop us a message
        </p>
        <p class="mb-6 text-sm md:mb-9 md:text-base lg:mb-12 lg:text-lg">
          We will get back to you as soon as possible.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <input
            placeholder="Full Name"
            class="rounded-lg bg-white p-5 text-sm focus:outline-none sm:text-base"
          />
          <input
            placeholder="Company Name"
            class="rounded-lg bg-white p-5 text-sm focus:outline-none sm:text-base"
          />
          <input
            placeholder="Work Email"
            class="col-span-2 rounded-lg bg-white p-5 text-sm focus:outline-none sm:text-base"
          />
          <input
            placeholder="Subject"
            class="col-span-2 rounded-lg bg-white p-5 text-sm focus:outline-none sm:text-base"
          />
          <input
            placeholder="Message"
            class="col-span-2 rounded-lg bg-white p-5 text-sm focus:outline-none sm:text-base"
          />
          <ButtonPrimary button-text="Send" class="col-span-2 w-full" />
        </div>
      </div>

      <div class="flex flex-col justify-center">
        <div class="mb-4 flex gap-8 md:mb-6 lg:mb-9">
          <NuxtImg
            src="contact1.svg"
            alt="Phone Number Image"
            class="my-auto size-9 lg:size-[48px]"
          />
          <div>
            <p class="mb-1 text-lg font-bold md:text-xl lg:mb-2 lg:text-2xl">
              + 1800 145 276
            </p>
            <p class="text-sm md:text-base lg:text-lg">Free support</p>
          </div>
        </div>
        <div class="mb-4 flex gap-8 md:mb-6 lg:mb-9">
          <NuxtImg
            src="contact2.svg"
            alt="Help Email Image"
            class="my-auto size-9 lg:size-[48px]"
          />
          <div>
            <p class="mb-1 text-lg font-bold md:text-xl lg:mb-2 lg:text-2xl">
              finsweet@gmail.com
            </p>
            <p class="text-sm md:text-base lg:text-lg">Help Email support</p>
          </div>
        </div>
        <div class="mb-4 flex gap-8 md:mb-6 lg:mb-9">
          <NuxtImg
            src="contact3.svg"
            alt="Sales Email Image"
            class="my-auto size-9 lg:size-[48px]"
          />
          <div>
            <p class="mb-1 text-lg font-bold md:text-xl lg:mb-2 lg:text-2xl">
              sales@finsweet.com
            </p>
            <p class="text-sm md:text-base lg:text-lg">Sales Enquiry</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
