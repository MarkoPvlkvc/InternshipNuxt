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
