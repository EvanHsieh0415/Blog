import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Blog/",

  theme,

  locales: {
    "/": {
      lang: "zh-TW",
      title: "芒果的部落格",
      description: "芒果的個人部落格",
    },
    "/en/": {
      lang: "en-US",
      title: "Mango's Blog",
      description: "Mango's personal blog",
    },
  }

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
