/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        black: "#1d2130",
        blue: "#6b7cff",
        gray: "#e0e4fc",
        white: "#ffffff",
        gradient_blue_1: "hsla(238, 100%, 61%, 1)",
        gradient_blue_2: "hsla(194, 93%, 60%, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
