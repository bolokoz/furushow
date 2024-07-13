import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "pt-BR",
  title: "Furushow",
  description: "Furushow web",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
