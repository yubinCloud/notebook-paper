import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/notebook-paper/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Paper Reading",
      description: "论文精读笔记",
    },
  },

  theme,

  shouldPrefetch: false,
});
