import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Blog/",

  lang: "zh-TW",
  title: "芒果的部落格",
  description: "芒果的個人部落格",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
