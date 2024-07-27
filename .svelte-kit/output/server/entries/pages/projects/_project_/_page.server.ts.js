import { r as readPage, p as processMarkdown } from "../../../../chunks/PageGeneration.js";
const load = async ({ params }) => {
  console.log(params.project);
  let rawJSON = await readPage(params.project, "projects");
  rawJSON = await processMarkdown(rawJSON);
  return rawJSON;
};
export {
  load
};
