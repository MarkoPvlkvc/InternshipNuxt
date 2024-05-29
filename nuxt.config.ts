// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/image"],
  image: {},
  components: [
    { path: "~/components/sections", pathPrefix: false },
    "~/components",
  ],
});
