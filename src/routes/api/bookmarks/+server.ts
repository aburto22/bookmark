import { handleError } from '$lib/server/utils/api';
import { createBookmark, getBookmarks } from '$lib/server/utils/links';
import { validateBookmark } from '$lib/utils/form';
import { error, json } from '@sveltejs/kit';
import type { BookmarkFormData } from 'src/types';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const tag = url.searchParams.get('tag');
		const bookmarks = await getBookmarks(tag);
		return json(bookmarks);
	} catch (err) {
		return handleError(err);
	}
};

export const POST: RequestHandler = async ({ request, locals }) => {
	try {
		const formData: BookmarkFormData = await request.json();
		const user = locals.user;

		if (!user) {
			throw error(401, 'User not logged-in.');
		}

		const result = validateBookmark(formData);

		if (!result.success) {
			throw error(400, 'invalid data');
		}

		const newBookmark = await createBookmark(result.data);

		return json(newBookmark);
	} catch (err) {
		return handleError(err);
	}
};
