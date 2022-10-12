import { navbar } from "vuepress-theme-hope";

const krlNavBar = navbar([
  {
    text: "TransE",
    icon: "edit",
    link: "transe/"
  }
])


export const zhNavbar = navbar([
  {
    text: "KG",
    prefix: "/kg/",
    icon: "discover",
    children: [
      {
        text: "知识表示学习",
        icon: "edit",
        children: [
          "transe"
        ]
      },
    ]
  },
]);
