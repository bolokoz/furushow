import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

// import { catalogPlugin } from '@vuepress/plugin-catalog'

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  // extendsPage: (page) => {
  //   page.routeMeta = {
  //     title: page.title,
  //     front: page?.frontmatter
  //   }
  // },
  


  lang: "pt-BR",
  title: "Furushow",
  description: "Furushow web",


  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
    "@FoodReview": path.resolve(__dirname, "./components/FoodReview.vue"),
    "@RatingTable": path.resolve(__dirname, "./components/RatingTable.vue"),
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

});
