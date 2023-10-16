// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
// import NotFound from "./NotFound.vue";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "not-found": () => {
        console.debug("TODO: Add redirect to /en/ or /<lang>/");
      },
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
