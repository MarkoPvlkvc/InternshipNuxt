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
        <h2
          class="mb-2 text-2xl font-bold md:mb-3 md:text-3xl lg:mb-4 lg:text-4xl"
        >
          Drop us a message
        </h2>
        <p class="mb-6 text-sm md:mb-9 md:text-base lg:mb-12 lg:text-lg">
          We will get back to you as soon as possible.
        </p>
        <form class="grid grid-cols-2 gap-4" @submit.prevent="submitForm">
          <div class="flex flex-col gap-1">
            <input
              id="full-name"
              v-model="formData.fullName"
              name="full-name"
              type="text"
              placeholder="Full Name"
              :class="`rounded-lg border-[3px] border-solid bg-white p-5 text-sm focus:outline-none sm:text-base ${v$.fullName.$error ? 'border-red-500' : v$.fullName.$invalid ? 'border-transparent' : 'border-green-500'}`"
              @change="v$.fullName.$touch"
            />
            <span v-if="v$.fullName.$error" class="text-xs text-red-500">{{
              v$.fullName.$errors[0].$message
            }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <input
              id="company-name"
              v-model="formData.companyName"
              name="company-name"
              type="text"
              placeholder="Company Name"
              :class="`rounded-lg border-[3px] border-solid bg-white p-5 text-sm focus:outline-none sm:text-base ${v$.companyName.$error ? 'border-red-500' : v$.companyName.$invalid ? 'border-transparent' : 'border-green-500'}`"
              @change="v$.companyName.$touch"
            />
            <span v-if="v$.companyName.$error" class="text-xs text-red-500">{{
              v$.companyName.$errors[0].$message
            }}</span>
          </div>
          <div class="col-span-2 flex flex-col gap-1">
            <input
              id="email"
              v-model="formData.email"
              name="email"
              type="email"
              placeholder="Work Email"
              :class="`rounded-lg border-[3px] border-solid bg-white p-5 text-sm focus:outline-none sm:text-base ${v$.email.$error ? 'border-red-500' : v$.email.$invalid ? 'border-transparent' : 'border-green-500'}`"
              @change="v$.email.$touch"
            />
            <span v-if="v$.email.$error" class="text-xs text-red-500">{{
              v$.email.$errors[0].$message
            }}</span>
          </div>
          <div class="col-span-2 flex flex-col gap-1">
            <input
              id="subject"
              v-model="formData.subject"
              name="subject"
              type="text"
              placeholder="Subject"
              :class="`rounded-lg border-[3px] border-solid bg-white p-5 text-sm focus:outline-none sm:text-base ${v$.subject.$error ? 'border-red-500' : v$.subject.$invalid ? 'border-transparent' : 'border-green-500'}`"
              @change="v$.subject.$touch"
            />
            <span v-if="v$.subject.$error" class="text-xs text-red-500">{{
              v$.subject.$errors[0].$message
            }}</span>
          </div>
          <div class="col-span-2 flex flex-col gap-1">
            <input
              id="message"
              v-model="formData.message"
              name="message"
              type="text"
              placeholder="Message"
              :class="`rounded-lg border-[3px] border-solid bg-white p-5 text-sm focus:outline-none sm:text-base ${v$.message.$error ? 'border-red-500' : v$.message.$invalid ? 'border-transparent' : 'border-green-500'}`"
              @change="v$.message.$touch"
            />
            <span v-if="v$.message.$error" class="text-xs text-red-500">{{
              v$.message.$errors[0].$message
            }}</span>
          </div>
          <ButtonPrimary
            type="submit"
            button-text="Send"
            class="col-span-2 w-full"
          />
        </form>
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

  <MessageSuccessModal :show-modal="isModalOpen" @close="handleClose" />
</template>

<script setup>
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const formData = reactive({
  fullName: "",
  companyName: "",
  email: "",
  subject: "",
  message: "",
});

const rules = computed(() => {
  return {
    fullName: {
      required: helpers.withMessage(
        "The full name field is required",
        required,
      ),
    },
    companyName: {
      required: helpers.withMessage(
        "The company name field is required",
        required,
      ),
    },
    email: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    subject: {
      required: helpers.withMessage("The subject field is required", required),
    },
    message: {
      required: helpers.withMessage("The message field is required", required),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const isModalOpen = ref(false);

const submitForm = () => {
  v$.value.$validate().then((success) => {
    if (!v$.value.$error) {
      isModalOpen.value = success;
    }
  });
};

const handleClose = () => {
  isModalOpen.value = false;
};
</script>
