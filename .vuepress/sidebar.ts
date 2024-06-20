import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
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
          text: "KubeJS",
          icon: "book",
          prefix: "kubejs/",
          link: "kubejs/",
          children: [
            "links/",
            "notes/",
            "snippets/",
            "tips-and-tricks/",
          ]
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
      prefix: "games/",
      children: "structure",
    },
    "/intro/",
  ],
});
