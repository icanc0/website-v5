// @ts-nocheck
import { readPage } from '$lib/server/PageGeneration';
import { processMarkdown } from '$lib/server/PageGeneration';
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {

    console.log(params.blog);
	console.log("blog page visited")
    let rawJSON = await readPage(params.blog, 'blogs');
    rawJSON = await processMarkdown(rawJSON);

    return rawJSON
};