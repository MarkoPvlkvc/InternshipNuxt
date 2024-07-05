<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 45.803, lng: 15.913 };

const apiKey = useRuntimeConfig().public.googleMapsApiKey;
</script>

<template>
  <GoogleMap
    :api-key="apiKey"
    class="mb-32 h-[500px] w-full max-w-screen-lg"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
