// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import Layout from "./Layout.vue";
import "./style.css";
import "./tailwind.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
