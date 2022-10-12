import { navbar } from "vuepress-theme-hope";
import * as fs from "fs";



function cutoffMdSuffix(fileName: string): string | null {
  if (!fileName.endsWith('.md'))
    return null;
  const suffixIdx = fileName.lastIndexOf('.');
  return fileName.substring(0, suffixIdx);
}

/**
 * 获取 knowledge-graph 下面的所有文件的 navbar
 */
const getKgNavBar = () => {
  const kgNavBar = navbar([]);
  const kgBlogs: string[] = [];
  fs.readdir('src/knowledge-graph', function (err, files) {
    if (err) {
      throw err;
    }
    for (let fileName of files) {
      const blogName = cutoffMdSuffix(fileName);
      if (blogName != null) {
        kgBlogs.push(blogName);
      }
    }
    console.log(kgBlogs);
  })
  return navbar(kgBlogs);
}

export const my_navbar = navbar([
  {
    text: "knowledge-graph",
    prefix: "/knowledge-graph/",
    icon: "discover",
    children: getKgNavBar()
  },
]);
