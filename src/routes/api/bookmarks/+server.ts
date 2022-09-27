import { createBookmark, getBookmarks } from '$lib/server/utils/links';
import { validateBookmark } from '$lib/utils/form';
import { error, json } from '@sveltejs/kit';
import type { BookmarkFormData } from 'src/types';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const tag = url.searchParams.get('tag');
	const bookmarks = await getBookmarks(tag);
	return json(bookmarks);
};

export const POST: RequestHandler = async ({ request }) => {
	const formData: BookmarkFormData = await request.json();

	const result = validateBookmark(formData);

	if (!result.success) {
		throw error(400, 'invalid data');
	}

	const newBookmark = await createBookmark(result.data);

	return json(newBookmark);
};
