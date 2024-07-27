import { promises } from "fs";
import { r as readPage } from "../../../chunks/PageGeneration.js";
const load = async () => {
  const files = await promises.readdir("static/projects");
  const blogData = [];
  for (const file of files) {
    const fileNoExtension = file.substring(0, file.lastIndexOf("."));
    blogData.push(await readPage(fileNoExtension, "projects"));
  }
  blogData.sort((a, b) => b.unixDate - a.unixDate);
  return { blogData };
};
export {
  load
};
