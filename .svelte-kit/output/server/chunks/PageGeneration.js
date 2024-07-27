import { promises } from "fs";
import dayjs from "dayjs";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypePicture from "rehype-picture";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import { matter } from "vfile-matter";
import { VFile } from "vfile";
import rehypeWrap from "rehype-wrap";
const processMarkdown = async (rawJSON) => {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(rawJSON.body);
  const processor = unified()
      .use(remarkRehype)
      .use(rehypePicture)
      .use(rehypeStringify)
      .use(rehypeHighlight)
      // .use(rehypeWrap, { selector: "img", wrapper: "div.round.m-4.bg-stone-500" });
  return {
    ...rawJSON,
    body: processor.stringify(await processor.run(tree))
  };
};
const readPage = async (fileName, pageType) => {
  const page = await promises.readFile(`static/${pageType.toString()}/${fileName}.md`, "utf-8");
  console.log(page);
  const data = await unified().use(remarkParse).use(remarkStringify).use(remarkFrontmatter).use(() => (tree, vfile) => matter(vfile)).process(page).then((file) => file.data.matter);
  const pageVFile = new VFile(page);
  matter(pageVFile, { strip: true });
  data.body = String(pageVFile);
  console.log("test" + data.body);
  data.unixDate = dayjs(data.date).unix();
  data.unixLastMod = dayjs(data.lastMod).unix();
  data.year = dayjs(data.date).format("YYYY");
  data.shortDate = dayjs(data.date).format("MMM D");
  return data;
};
export {
  processMarkdown as p,
  readPage as r
};
