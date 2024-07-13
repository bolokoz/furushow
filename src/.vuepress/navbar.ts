import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/projetos/",
  {
    text: "Posts e notas",
    icon: "pen-to-square",
    link: "/posts/",
  }
]);
