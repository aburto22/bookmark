import { getBookmarks } from '$lib/server/links';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const tag = url.searchParams.get('tag');
	const bookmarks = await getBookmarks(tag);
	return json(bookmarks);
};
