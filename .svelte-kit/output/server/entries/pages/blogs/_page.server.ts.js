import { promises } from "fs";
import { r as readPage } from "../../../chunks/PageGeneration.js";
const load = async () => {
  const files = await promises.readdir("static/blogs");
  const blogData = [];
  for (const file of files) {
    const fileNoExtension = file.substring(0, file.lastIndexOf("."));
    blogData.push(await readPage(fileNoExtension, "blogs"));
  }
  blogData.sort((a, b) => b.unixDate - a.unixDate);
  const result = groupBy(blogData, "year");
  console.log(result);
  return result;
};
function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
export {
  load
};
