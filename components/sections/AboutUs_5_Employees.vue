<template>
  <section
    class="mb-16 mt-16 flex flex-col items-center gap-8 px-4 md:mb-24 md:mt-24 lg:mb-32 lg:mt-32 xl:flex-row xl:items-start xl:justify-center"
  >
    <div>
      <h2 class="heading-2 text-center xl:text-start">Our talented team</h2>
      <p
        class="mt-4 max-w-96 text-center text-sm md:mt-5 md:text-base lg:mt-6 xl:text-start"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </p>
    </div>

    <div class="grid w-fit grid-cols-2 gap-6 max-[450px]:gap-3 sm:grid-cols-3">
      <template v-if="status === 'pending' || status === 'error'">
        <EmployeeItemSkeleton v-for="i in 6" :key="i" />
      </template>
      <template v-else>
        <EmployeeItem
          v-for="employee in employees"
          :key="employee.id"
          v-bind="employee"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ClassDictionary } from "clsx";
import type { Employee } from "@/interfaces/interfaces";

const strapiApiKey = useRuntimeConfig().public.strapiApiKey;
const strapiApiUrl = useRuntimeConfig().public.strapiApiUrl;

const employees = ref<Employee[]>([]);

const { status, data, error } = await useLazyAsyncData("employees", () =>
  $fetch(`${strapiApiUrl}/api/employees?populate=*`, {
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  }),
);

if (data.value) {
  const employeeData = (data.value as ClassDictionary).data;

  employees.value = employeeData.map((employee: ClassDictionary) => ({
    id: employee.id,
    imageUrl: employee.attributes.Image.data?.attributes.url,
    imageAlt: employee.attributes.Image.data?.attributes.alternativeText,
    fullName: employee.attributes.FullName,
    position: employee.attributes.Position,
  }));
}

if (error.value) {
  console.error("Error fetching all posts:", error.value);
}

useSeoMeta({
  title: "About Us",
  ogTitle: "QED Internship Nuxt - About Us",
  description: "First QED Internship Nuxt Site",
  ogDescription: "First QED Internship Nuxt Site - About Us",
});
</script>

<style></style>
