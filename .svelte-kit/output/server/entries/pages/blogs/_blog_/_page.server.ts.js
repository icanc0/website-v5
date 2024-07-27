import { r as readPage, p as processMarkdown } from "../../../../chunks/PageGeneration.js";
const load = async ({ params }) => {
  console.log(params.blog);
  console.log("blog page visited");
  let rawJSON = await readPage(params.blog, "blogs");
  rawJSON = await processMarkdown(rawJSON);
  return rawJSON;
};
export {
  load
};
