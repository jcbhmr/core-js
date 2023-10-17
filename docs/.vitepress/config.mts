import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "core-js",
  description: "ECMAScript polyfills",

  // Allow deploying to '/mysite/' instead of '/' (GitHub Pages)
  ...(process.env.BASE_URL && { base: process.env.BASE_URL }),

  // https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: "English",
      lang: "en",

      // https://vitepress.dev/reference/default-theme-config
      // will be shallow merged, common stuff can be put in top-level themeConfig entry
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/" },
          { text: "Blog", link: "/blog/" },
        ],

        sidebar: {
          "/guide/": [
            {
              text: "Guide",
              items: [
                { text: "What is core-js?", link: "/guide/what" },
                { text: "Getting started", link: "/guide/" },
                { text: "Babel integration", link: "/guide/babel" },
                { text: "SWC integration", link: "/guide/babel" },
              ],
            },
          ],
          "/blog/": [
            {
              text: "Blog",
              items: [
                {
                  text: "core-js@3, babel and a look into the future",
                  link: "/blog/core-js-3-babel-future",
                },
                { text: "So, what next?", link: "/blog/so-what-next" },
              ],
            },
          ],
        },
      },
    },
    zh: {
      label: "中国人",
      lang: "zh",

      // https://vitepress.dev/reference/default-theme-config
      // will be shallow merged, common stuff can be put in top-level themeConfig entry
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "博客", link: "/zh/blog/" },
        ],

        sidebar: {
          "/zh/blog/": [
            {
              text: "Blog",
              items: [
                {
                  text: "core-js@3, Babel 展望未来",
                  link: "/zh/blog/core-js-3-babel-future",
                },
                { text: "那么，接下来是什么", link: "/zh/blog/so-what-next" },
              ],
            },
          ],
        },
      },
    },
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
