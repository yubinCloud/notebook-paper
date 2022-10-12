import { sidebar } from "vuepress-theme-hope";
import { getKgNavBar } from "../navbar";

console.log(getKgNavBar());
export const mySidebar = sidebar({
    "/KG/": getKgNavBar(),
});