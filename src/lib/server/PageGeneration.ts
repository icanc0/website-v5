import { promises as fs } from 'fs';
import dayjs from 'dayjs';

import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight';
import rehypePicture from 'rehype-picture';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import { matter } from 'vfile-matter';
import { VFile } from 'vfile';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import rehypeWrap from 'rehype-wrap';

export type PageOption = "blogs" | "projects";
export interface PageMeta {
    title: string;
    date: string;
    lastMod: string;
    unixDate: number;
    unixLastMod: number;
    description: string;
    body: string;
    path: string;
    thumbnail?: string;
    tags?: string[];
    license?: string;
	year: string;
	shortDate: string;
}

export const processMarkdown = async (rawJSON: PageMeta): Promise<PageMeta> => {
    const tree = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .parse(rawJSON.body);

    const processor =  unified()
        .use(remarkRehype)
        .use(rehypePicture)
        .use(rehypeStringify)
        .use(rehypeHighlight)
        // .use(rehypeWrap, {selector: 'img', wrapper: 'div.round.m-4.bg-stone-500'})


    return {
        ...rawJSON,
        body: processor.stringify( await processor.run(tree))
    };
}


export const readPage = async (fileName: string, pageType: PageOption): Promise<PageMeta> => {
    const page = await fs.readFile(`static/${pageType.toString()}/${fileName}.md`, 'utf-8');
	console.log(page)
    const data = await unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkFrontmatter)
        .use(() => (tree, vfile) => matter(vfile))
        .process(page)
        .then((file) => file.data.matter) as PageMeta;

    const pageVFile = new VFile(page)
    matter(pageVFile, {strip: true})
    data.body = String(pageVFile)
    console.log("test" + data.body)

    data.unixDate = dayjs(data.date).unix();
    data.unixLastMod = dayjs(data.lastMod).unix();
	data.year = dayjs(data.date).format('YYYY');
	data.shortDate = dayjs(data.date).format('MMM D');
    return data;
};