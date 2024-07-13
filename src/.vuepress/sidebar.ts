import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Projetos",
      icon: "laptop-code",
      prefix: "projetos/",
      link: "projetos/",
      children: "structure",
    },
    {
      text: "Posts e notas",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
