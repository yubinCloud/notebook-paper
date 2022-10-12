// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/index.ts
import { navbar } from "vuepress-theme-hope";
import * as fs from "fs";
var getKgNavBar = () => {
  const kgNavBar = navbar([]);
  fs.readdir(".../knowledge-graph", function(err, files) {
    if (err) {
      throw err;
    }
    console.log(files);
  });
};
var krlNavBar = navbar([
  "1101.RESCAL-and-extensions",
  "1312.TransE"
]);
getKgNavBar();
var my_navbar = navbar([
  {
    text: "knowledge-graph",
    prefix: "/knowledge-graph/",
    icon: "discover",
    children: krlNavBar
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    "slides"
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/zh/": [
    "",
    {
      text: "\u5982\u4F55\u4F7F\u7528",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure"
    },
    {
      text: "\u6587\u7AE0",
      icon: "note",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    "slides"
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://mister-hope.github.io",
  author: {
    name: "Yu Bin",
    url: "https://mrhope.site"
  },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "yubinCloud/notebook-paper",
  docsDir: "docs",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    medias: {
      Baidu: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "https://example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "https://example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      MrHope: [
        "https://mrhope.site",
        '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>'
      ]
    }
  },
  locales: {
    "/": {
      navbar: my_navbar,
      sidebar: zhSidebar,
      footer: "\u9ED8\u8BA4\u9875\u811A",
      displayFooter: true,
      blog: {
        description: "\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u8005",
        intro: "/zh/intro.html"
      },
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"]
    }
  },
  plugins: {
    blog: {
      autoExcerpt: true
    },
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69"
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true
    },
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png"
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png"
              }
            ]
          }
        ]
      }
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/notebook-paper/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Paper Reading",
      description: "\u8BBA\u6587\u7CBE\u8BFB\u7B14\u8BB0"
    }
  },
  theme: theme_default,
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9pbmRleC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiWDovUHJvamVjdC9ub3RlYm9vay1wYXBlci9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxQcm9qZWN0XFxcXG5vdGVib29rLXBhcGVyXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9Qcm9qZWN0L25vdGVib29rLXBhcGVyL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiBcIi9ub3RlYm9vay1wYXBlci9cIixcblxuICBsb2NhbGVzOiB7XG4gICAgXCIvXCI6IHtcbiAgICAgIGxhbmc6IFwiemgtQ05cIixcbiAgICAgIHRpdGxlOiBcIlBhcGVyIFJlYWRpbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlx1OEJCQVx1NjU4N1x1N0NCRVx1OEJGQlx1N0IxNFx1OEJCMFwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWUsXG5cbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIlg6L1Byb2plY3Qvbm90ZWJvb2stcGFwZXIvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWDpcXFxcUHJvamVjdFxcXFxub3RlYm9vay1wYXBlclxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9Qcm9qZWN0L25vdGVib29rLXBhcGVyL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgbXlfbmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIvaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9taXN0ZXItaG9wZS5naXRodWIuaW9cIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIll1IEJpblwiLFxuICAgIHVybDogXCJodHRwczovL21yaG9wZS5zaXRlXCIsXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogXCJpY29uZm9udFwiLFxuXG4gIGxvZ286IFwiL2xvZ28ucG5nXCIsXG5cbiAgcmVwbzogXCJ5dWJpbkNsb3VkL25vdGVib29rLXBhcGVyXCIsXG5cbiAgZG9jc0RpcjogXCJkb2NzXCIsXG5cbiAgcGFnZUluZm86IFtcIkF1dGhvclwiLCBcIk9yaWdpbmFsXCIsIFwiRGF0ZVwiLCBcIkNhdGVnb3J5XCIsIFwiVGFnXCIsIFwiUmVhZGluZ1RpbWVcIl0sXG5cbiAgYmxvZzoge1xuICAgIG1lZGlhczoge1xuICAgICAgQmFpZHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgQml0YnVja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIERpbmdkaW5nOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIERpc2NvcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRHJpYmJibGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRW1haWw6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRXZlcm5vdGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRmFjZWJvb2s6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRmxpcGJvYXJkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdGVlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdEh1YjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR21haWw6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIExpbmVzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIExpbmtlZGluOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFBpbnRlcmVzdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBQb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUVE6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUXpvbmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUmVkZGl0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFJzczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBTdGVhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBUd2l0dGVyOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFdlY2hhdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBXZWlibzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBXaGF0c2FwcDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBZb3V0dWJlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFpoaWh1OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIE1ySG9wZTogW1xuICAgICAgICBcImh0dHBzOi8vbXJob3BlLnNpdGVcIixcbiAgICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4yNDc4IC43ODEzMyAtMi41NDc5NyAuNjM2MjIgOTEwLjM1IDI4MS41OClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImFcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjc1XCIgc3RvcC1jb2xvcj1cIiNlMzM5MzlcIi8+PHN0b3Agb2Zmc2V0PVwiLjk5OFwiIHN0b3AtY29sb3I9XCIjZmZmXCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4xMzgxNCAuODA3OTcgMi41NTU5OSAtLjYwMzIgMzQuMDg3IDQ5NC4zNjkpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgaWQ9XCJiXCIgeDE9XCIzNy44MjdcIiB4Mj1cIjE1OS45ODhcIiB5MT1cIjI3Mi45MTZcIiB5Mj1cIjI3NC42M1wiPjxzdG9wIG9mZnNldD1cIi44MTVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD1cIk0xMzUuNjM3IDU4OC4wNjdjLTQ4Ljg5MS0yMDEuMzM0IDc0LjYwNS00MDQuMTYyIDI3NS44MzctNDUzLjAyOCAyMDEuMjMzLTQ4Ljg2NiA0MDMuOTk4IDc0LjczNCA0NTIuODg5IDI3Ni4wNjggNDguODkyIDIwMS4zMzUtNzQuNjA2IDQwNC4xNjItMjc1LjgzOCA0NTMuMDI5LTIwMS4yMzMgNDguODY2LTQwMy45OTctNzQuNzM0LTQ1Mi44ODgtMjc2LjA2OVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk01OTYuMDc2IDE5Ny4wNDRjLTMuMzQyLTU2LjA5IDU2Ljg5Ny03Ny44MzEgODkuMDE3LTUxLjM2MW0tNDEwLjY1IDEyOC44MTljLTIyLjc1My01MS4zNzctODYuMjU2LTQzLjA3LTEwMi42NTktNC44MTZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTgzMy41NjggMjg4LjAyYy4wNSAxOC4wNDYtMTIuNTg0IDMwLjY5OS0yMS4zNDYgMzIuMjExLTguNzYyIDEuNTEyLTE3LjAzMS0xLjA5OS0xOC41ODQtMS4zNDEgMCAwLTYxLjM2My02LjEwMy0xMDUuNjI3IDYuOTIxLTQ0LjI2NSAxMy4wMjYtODcuMDQgNDcuMzg3LTk0LjYzNyA1MS44OTItNi42MjcgMy45MjgtMjkuMTEyIDcuNjk3LTQ0LjQ2Mi0xMi45MzgtMTUuMzUxLTIwLjYzNi4wMjQtNDEuNTI2LjAyNC00MS41MjZzMTIuNjg1LTE4LjI3OSA0MC43NzEtMzUuMTIzYzI4LjA4OC0xNi44NDQgMjQuNjI0LTEzLjIyNiA1Mi4zMjYtMjUuNjk2IDE1LjI0Ny02Ljg2NSA0My4zMTktMTQuMTg2IDY3LjQyOS0xNy4wNjkgMjUuMTkzLTMuMDExIDQ2LjM0OC0xLjM4NCA1Ny42NzMuNzY5IDIyLjE2NSA0LjIxMiAyOC42MzIgNS45MyAzOS4xNjkgOS4yMjkgMTIuNDUxIDMuODk4IDI3LjIxNCAxNC41MTYgMjcuMjY0IDMyLjY3MVpcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTU1OC4zNTEgMzQ1LjYzMmMtMy40NTgtMTQuMjM3IDUuMjE0LTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1NC0zLjQzNyAyOC40MyA1LjMyIDMxLjg4NyAxOS41NTcgMy40NTggMTQuMjM4LTUuMjEyIDI4LjU2Ny0xOS4zNjcgMzIuMDA0LTE0LjE1MiAzLjQzNy0yOC40My01LjMxOS0zMS44ODctMTkuNTU4WlwiIGZpbGw9XCIjNmQ1ZTU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI2LjI2OFwiLz48cGF0aCBkPVwiTTIyMC4yNDkgNDgzLjQxNmM0Ni44MS0xMS42ODkgOTEuMzIzLS40NjcgOTkuNDIgMjUuMDY0IDguMDk4IDI1LjUzMi0yMy4yODYgNTUuNzA2LTcwLjA5NyA2Ny4zOTMtNDYuODExIDExLjY4OS05MS4zMjMuNDY3LTk5LjQyLTI1LjA2NC04LjA5Ny0yNS41MzIgMjMuMjg2LTU1LjcwNiA3MC4wOTctNjcuMzkzWlwiIGZpbGw9XCJ1cmwoI2EpXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIG9wYWNpdHk9XCIuMjYxXCIvPjxwYXRoIGQ9XCJNNzM5LjkgMzU3LjIyNmMtNDYuOTU5IDExLjA4Mi04MS4zNjcgNDEuNDY5LTc2Ljg1MyA2Ny44NzEgNC41MTQgMjYuNDAyIDQ2LjI0MSAzOC44MjEgOTMuMTk4IDI3LjczOCA0Ni45NTgtMTEuMDgxIDgxLjM2Ni00MS40NjcgNzYuODUzLTY3Ljg2OS00LjUxNC0yNi40MDMtNDYuMjQxLTM4LjgyMS05My4xOTgtMjcuNzRaXCIgZmlsbD1cInVybCgjYilcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk00MDAuOTM0IDM5OC45MTdjLS41OTkgMTguMDM0LTEzLjY4MSAzMC4yMTgtMjIuNDk0IDMxLjQwOS04LjgxMiAxLjE5Mi0xNi45ODItMS43MTYtMTguNTI2LTIuMDE0IDAgMC02MS4xMDktOC4zMzQtMTA1LjgxOSAzLjA3LTQ0LjcwOSAxMS40MDQtODguNjk2IDQ0LjE4MS05Ni40NTIgNDguNDA2LTYuNzYzIDMuNjgzLTI5LjM3MiA2LjYzMi00My45NzItMTQuNTQ2LTE0LjYtMjEuMTggMS41MTktNDEuNDk0IDEuNTE5LTQxLjQ5NHMxMy4zMzUtMTcuODAzIDQyLjAxMy0zMy42MTJjMjguNjc3LTE1LjgwOSAyNS4wODUtMTIuMzE5IDUzLjIyMi0yMy43NzIgMTUuNDg0LTYuMzA0IDQzLjgwMy0xMi41OTggNjguMDA1LTE0LjYgMjUuMjg4LTIuMDkzIDQ2LjM3My4zMDUgNTcuNjE2IDIuODY3IDIyIDUuMDE2IDI4LjQwMSA2Ljk2OCAzOC44MTMgMTAuNjQ5IDEyLjMwNCA0LjM0OCAyNi42NzcgMTUuNDk2IDI2LjA3NSAzMy42MzdaXCIgZmlsbD1cIiNmZmZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjhcIi8+PHBhdGggZD1cIk0xMjkuMDUgNDQ1LjU0NmMtMy40NTgtMTQuMjM5IDUuMjEzLTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1My0zLjQzNyAyOC40MjkgNS4zMTggMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTMgMjguNTY2LTE5LjM2NyAzMi4wMDMtMTQuMTUzIDMuNDM3LTI4LjQzLTUuMzE4LTMxLjg4Ny0xOS41NTdaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNNDI0LjM4MSA2OTYuMzg2czY0LjQyNyAxMy42NDYgMTAxLjk5NiA1Ljc1N0M2NDAuNjUzIDY3OC4xNDYgNjkwLjggNTIxLjg5NCA2OTAuOCA1MjEuODk0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTFcIi8+PHBhdGggZD1cIk03OTYuMDQgNjY2Ljc3NHMtMTAuNzM0LTQ0LjE2NS00MS40MDUtMTEuMzQ4Yy05LjY4MSAxMC4zNTktMTAuNDM4IDQwLjYwNC0yOC4yMTcgODEuODktMTUuOTQyIDM3LjAyLTM5LjU2NCA2MC43MjgtNDIuOTM4IDc2LjA2My0zLjM3NCAxNS4zMzUuNDUxIDM1Ljk5MiAyNi4zNTIgNDEuNTM3IDI1LjkwMiA1LjU0NSA0MS45NjctMjMuMzgxIDQxLjk2Ny0yMy4zODFsNDQuMjQxLTE2NC43NjFaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjxwYXRoIGQ9XCJNNzkzLjMzNyA2NjQuNzM0Yy0zNy4wNzUgMTYwLjA0NS01MS43MyAxNjMuMTQ1LTQwLjM0MyAxODQuODQ1IDExLjM4NyAyMS43MDEgNTEuNDE3IDMzLjcxNiA3MS44NzYtNy4zMTMgNi43MzQtMTMuNTA1LTEuMzEtNDMuMzE3LTEuNTExLTc4LjA3Ny0uMzA3LTUzLjA2IDE2Ljg2NS04Ni4xMTEgMTAuNDAzLTk4LjEtMTUuMzMyLTI4LjQ1Mi0zOS4zNzctNS44NzUtNDAuNDI1LTEuMzU1WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48L3N2Zz4nLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXG4gIGxvY2FsZXM6IHtcblxuICAgIC8qKlxuICAgICAqIENoaW5lc2UgbG9jYWxlIGNvbmZpZ1xuICAgICAqL1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogbXlfbmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiB6aFNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJcdTlFRDhcdThCQTRcdTk4NzVcdTgxMUFcIixcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgICAgYmxvZzoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTRFMDBcdTRFMkFcdTUyNERcdTdBRUZcdTVGMDBcdTUzRDFcdTgwMDVcIixcbiAgICAgICAgaW50cm86IFwiL3poL2ludHJvLmh0bWxcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHBhZ2UgbWV0YVxuICAgICAgbWV0YUxvY2FsZXM6IHtcbiAgICAgICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBlbmNyeXB0OiB7XG4gICAgY29uZmlnOiB7XG4gICAgICBcIi9kZW1vL2VuY3J5cHQuaHRtbFwiOiBbXCIxMjM0XCJdLFxuICAgICAgXCIvemgvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB7XG4gICAgICBhdXRvRXhjZXJwdDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gSWYgeW91IGRvbid0IG5lZWQgY29tbWVudCBmZWF0dXJlLCB5b3UgY2FuIHJlbW92ZSBmb2xsb3dpbmcgb3B0aW9uXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb25maWcgaXMgZm9yIGRlbW8gT05MWSwgaWYgeW91IG5lZWQgY29tbWVudCBmZWF0dXJlLCBwbGVhc2UgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb25maWcsIHNlZSBjb21tZW50IHBsdWdpbiBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzLlxuICAgIC8vIFRvIGF2b2lkIGRpc3R1cmJpbmcgdGhlIHRoZW1lIGRldmVsb3BlciBhbmQgY29uc3VtaW5nIGhpcyByZXNvdXJjZXMsIHBsZWFzZSBETyBOT1QgdXNlIHRoZSBmb2xsb3dpbmcgY29uZmlnIGRpcmVjdGx5IGluIHlvdXIgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCEhISEhXG4gICAgY29tbWVudDoge1xuICAgICAgLyoqXG4gICAgICAgKiBVc2luZyBHaXNjdXNcbiAgICAgICAqL1xuICAgICAgcHJvdmlkZXI6IFwiR2lzY3VzXCIsXG4gICAgICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvZ2lzY3VzLWRpc2N1c3Npb25zXCIsXG4gICAgICByZXBvSWQ6IFwiUl9rZ0RPR19QdDJBXCIsXG4gICAgICBjYXRlZ29yeTogXCJBbm5vdW5jZW1lbnRzXCIsXG4gICAgICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPR19QdDJNNENPRDY5XCIsXG5cbiAgICAgIC8qKlxuICAgICAgICogVXNpbmcgVHdpa29vXG4gICAgICAgKi9cbiAgICAgIC8vIHByb3ZpZGVyOiBcIlR3aWtvb1wiLFxuICAgICAgLy8gZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28uY2NrbmJjLnZlcmNlbC5hcHBcIixcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2luZyBXYWxpbmVcbiAgICAgICAqL1xuICAgICAgLy8gcHJvdmlkZXI6IFwiV2FsaW5lXCIsXG4gICAgICAvLyBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLWNvbW1lbnQudmVyY2VsLmFwcFwiLFxuICAgIH0sXG5cbiAgICAvLyBEaXNhYmxlIGZlYXR1cmVzIHlvdSBkb24ndCB3YW50IGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjaGFydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGVjaGFydHM6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWFnZVNpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICBsYXp5TG9hZDogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBtZXJtYWlkOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDoge1xuICAgICAgICBwcmVzZXRzOiBbXCJ0c1wiLCBcInZ1ZVwiXSxcbiAgICAgIH0sXG4gICAgICBwcmVzZW50YXRpb246IHtcbiAgICAgICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcbiAgICAgIH0sXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWFuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tYW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB2cHJlOiB0cnVlLFxuICAgICAgdnVlUGxheWdyb3VuZDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgcHdhOiB7XG4gICAgICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgICAgY2FjaGVQaWM6IHRydWUsXG4gICAgICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgICAgYXBwbGU6IHtcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgICB9LFxuICAgICAgbXNUaWxlOiB7XG4gICAgICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgfSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2hvcnRjdXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbW9ub2Nocm9tZS5wbmdcIixcbiAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICAgICAgcHVycG9zZTogXCJtb25vY2hyb21lXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOi9Qcm9qZWN0L25vdGVib29rLXBhcGVyL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxQcm9qZWN0XFxcXG5vdGVib29rLXBhcGVyXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9Qcm9qZWN0L25vdGVib29rLXBhcGVyL3NyYy8udnVlcHJlc3MvbmF2YmFyL2luZGV4LnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG5cbmNvbnN0IGdldEtnTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBrZ05hdkJhciA9IG5hdmJhcihbXSk7XG4gIGZzLnJlYWRkaXIoJy4uLi9rbm93bGVkZ2UtZ3JhcGgnLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZmlsZXMpO1xuICB9KVxufVxuXG5cbmNvbnN0IGtybE5hdkJhciA9IG5hdmJhcihbXG4gICcxMTAxLlJFU0NBTC1hbmQtZXh0ZW5zaW9ucycsXG4gICcxMzEyLlRyYW5zRScsXG5dKVxuXG5nZXRLZ05hdkJhcigpO1xuXG5leHBvcnQgY29uc3QgbXlfbmF2YmFyID0gbmF2YmFyKFtcbiAge1xuICAgIHRleHQ6IFwia25vd2xlZGdlLWdyYXBoXCIsXG4gICAgcHJlZml4OiBcIi9rbm93bGVkZ2UtZ3JhcGgvXCIsXG4gICAgaWNvbjogXCJkaXNjb3ZlclwiLFxuICAgIGNoaWxkcmVuOiBrcmxOYXZCYXJcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOi9Qcm9qZWN0L25vdGVib29rLXBhcGVyL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWDpcXFxcUHJvamVjdFxcXFxub3RlYm9vay1wYXBlclxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1g6L1Byb2plY3Qvbm90ZWJvb2stcGFwZXIvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlblNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIGljb246IFwiZGlzY292ZXJcIixcbiAgICAgIHRleHQ6IFwiRGVtb1wiLFxuICAgICAgcHJlZml4OiBcImRlbW8vXCIsXG4gICAgICBsaW5rOiBcImRlbW8vXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiQXJ0aWNsZXNcIixcbiAgICAgIGljb246IFwibm90ZVwiLFxuICAgICAgcHJlZml4OiBcInBvc3RzL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICBcImludHJvXCIsXG4gICAgXCJzbGlkZXNcIixcbiAgXSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOi9Qcm9qZWN0L25vdGVib29rLXBhcGVyL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWDpcXFxcUHJvamVjdFxcXFxub3RlYm9vay1wYXBlclxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1g6L1Byb2plY3Qvbm90ZWJvb2stcGFwZXIvc3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCB6aFNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvemgvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RjdGXHU3NTI4XCIsXG4gICAgICBpY29uOiBcImNyZWF0aXZlXCIsXG4gICAgICBwcmVmaXg6IFwiZ3VpZGUvXCIsXG4gICAgICBsaW5rOiBcImd1aWRlL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLFxuICAgICAgaWNvbjogXCJub3RlXCIsXG4gICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIFwiaW50cm9cIixcbiAgICBcInNsaWRlc1wiLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1TLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0FK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RjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxJQUNqQjtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsWUFDVCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsUUFDQSxXQUFXO0FBQUEsVUFDVDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sWUFBWTtBQUFBLFlBQ1osS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRSxLQUFLO0FBQUEsZ0JBQ0wsT0FBTztBQUFBLGdCQUNQLFNBQVM7QUFBQSxnQkFDVCxNQUFNO0FBQUEsY0FDUjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxLQUFLO0FBQUEsZ0JBQ0wsT0FBTztBQUFBLGdCQUNQLFNBQVM7QUFBQSxnQkFDVCxNQUFNO0FBQUEsY0FDUjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRHBPRCxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxFQUVBLGdCQUFnQjtBQUNsQixDQUFDOyIsCiAgIm5hbWVzIjogWyJzaWRlYmFyIiwgInNpZGViYXIiXQp9Cg==
