import { navigateTo } from "nuxt/app";

export default (id) => {
  navigateTo({ path: `/blog/${id}` });
};
