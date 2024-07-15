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
  "/posts/" : "structure",
  "/projetos/": [
    "",
    {
      text: "Projetos",
      icon: "laptop-code",
      prefix: "projetos/",
      link: "projetos/",
      children: "structure",
    },
    {
      text: "Posts",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
    },
  ],
});