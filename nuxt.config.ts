// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  generate: {
    routes: [
      "/", // Add your routes here
      "/about_us",
      "/blog",
      "/contact",
      "/pricing",
      "/product",
    ],
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      strapiApiUrl: process.env.STRAPI_API_URL,
      strapiApiKey: process.env.STRAPI_API_KEY,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/robots", "@nuxtjs/sitemap"],
  robots: {
    configPath: "~/robots.config.js", // Path to your custom robots config
  },
  site: {
    url: "https://qed-internship-nuxt.vercel.app",
    name: "QED Internship Nuxt",
  },
  image: {},
  components: [
    { path: "~/components/sections", pathPrefix: false },
    "~/components",
  ],
});
