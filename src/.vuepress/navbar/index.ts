import { navbar } from "vuepress-theme-hope";

const krlNavBar = navbar([
  {
    text: "TransE",
    icon: "edit",
    link: "transe/"
  },
  "rescal-and-extensions"  
])


export const my_navbar = navbar([
  {
    text: "knowledge-graph",
    prefix: "/kg/",
    icon: "discover",
    children: krlNavBar,
  },
]);
