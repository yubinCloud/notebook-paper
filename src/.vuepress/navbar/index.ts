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

export function getSubDirNavBar(dirPath: string): HopeThemeNavbarConfig {
  const blogNames = getBlogNamesFromDir(dirPath);
  const nav: HopeThemeNavbarConfig = [];
  for (let blogName of blogNames) {
    nav.push({
      'text': blogName,
      'link': blogName,
      'icon': 'note'
    })
  }
  return nav;
}

export function getTopDirNavBar(dirPath: string, subDirIcon: string) {
  const blogs: HopeThemeNavbarConfig = [];
  const files = fs.readdirSync(dirPath);
  for (let fileName of files) {
    if (isFile(dirPath + '/' + fileName)) {
      const blogName = cutoffMdSuffix(fileName);
      if (blogName != null) {
        blogs.push({
          'text': blogName,
          'link': blogName,
          'icon': 'note'
        });
      }
    }
    else {
      blogs.push({
        text: fileName,
        prefix: fileName + '/',
        icon: subDirIcon,
        children: getSubDirNavBar(dirPath + '/' + fileName)
      })
    }
  }
  return navbar(blogs);
}

/**
 * 获取 KG 下面的所有文件的 navbar
 */
export const getKgNavBar = () => {
  return getTopDirNavBar('src/KG', 'creative');
}

export const my_navbar = navbar([
  {
    text: "KG",
    prefix: "/KG/",
    icon: "discover",
    children: getKgNavBar()
  },
]);
