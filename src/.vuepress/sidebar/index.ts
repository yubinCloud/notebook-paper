import { sidebar } from "vuepress-theme-hope";
import { getKgNavBar } from "../navbar";


export const mySidebar = sidebar({
    "/KG/": getKgNavBar(),
});