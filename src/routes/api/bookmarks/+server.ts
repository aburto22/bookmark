import db from '$lib/server/db';
import { getBookmarks } from '$lib/server/links';
import { parseTags, validateBookmark } from '$lib/utils/form';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const tag = url.searchParams.get('tag');
	const bookmarks = await getBookmarks(tag);
	return json(bookmarks);
};

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();

	const bookmarkData = {
		name: formData.get('name')?.toString(),
		description: formData.get('description')?.toString(),
		url: formData.get('url')?.toString(),
		tags: parseTags(formData.get('tags')?.toString())
	};

	const result = validateBookmark(bookmarkData);

	if (!result.success) {
		return error(400, 'invalid data');
	}

	const newBookmark = await db.bookmark.create({
		data: {
			...result.data,
			ownerId: '632d8dea3f1cbc1dd741ea95'
		}
	});

	return json(newBookmark);
};
