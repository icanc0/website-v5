// @ts-nocheck
import type { PageLoad } from './$types';
import type { PageMeta } from '$lib/server/PageGeneration';

export const load = async ({ data, params }: Parameters<PageLoad>[0]) => {
    return data as PageMeta
};