import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章",
    icon: "book",
    prefix: "posts/",
    children: [
      {
        text: "日記",
        icon: "book",
        link: "diary/",
      },
      {
        text: "倉庫",
        icon: "database",
        link: "storage/",
      },
    ],
  },
  {
    text: "遊戲相關",
    icon: "gamepad",
    link: "/games/"
  },
  "/intro/",
]);
