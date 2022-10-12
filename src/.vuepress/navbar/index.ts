import {HopeThemeNavbarConfig, navbar} from "vuepress-theme-hope";
import * as fs from "fs";



function cutoffMdSuffix(fileName: string): string | null {
  if (!fileName.endsWith('.md'))
    return null;
  const suffixIdx = fileName.lastIndexOf('.');
  return fileName.substring(0, suffixIdx);
}

function isFile(path: string): boolean {
  return fs.statSync(path).isFile();
}

function getBlogNamesFromDir(dirPath: string): string[] {
  const blogNames: string[] = [];
  const files = fs.readdirSync(dirPath);
  for (let fileName of files) {
    if (isFile(dirPath + '/' + fileName)) {
      const blogName = cutoffMdSuffix(fileName);
      if (blogName != null) {
        blogNames.push(blogName);
      }
    }
  }
  return blogNames;
}

/**
 * 获取 KG 下面的所有文件的 navbar
 */
const getKgNavBar = () => {
  const kgBlogs: HopeThemeNavbarConfig = [];
  const BASE_PATH = 'src/KG'
  const files = fs.readdirSync(BASE_PATH);
  for (let fileName of files) {
    if (isFile(BASE_PATH + '/' + fileName)) {
      const blogName = cutoffMdSuffix(fileName);
      if (blogName != null) {
        kgBlogs.push(blogName);
      }
    }
    else {
      kgBlogs.push({
        text: fileName,
        prefix: fileName + '/',
        icon: 'edit',
        children: getBlogNamesFromDir(BASE_PATH + '/' + fileName)
      })
    }
  }
  console.log(kgBlogs);
  return navbar(kgBlogs);
}

export const my_navbar = navbar([
  {
    text: "KG",
    prefix: "/KG/",
    icon: "discover",
    children: getKgNavBar()
  },
]);
