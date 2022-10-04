import { handleError } from '$lib/server/utils/api';
import { deleteBookmark, updateBookmark } from '$lib/server/utils/links';
import type { Bookmark } from '@prisma/client';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async ({ params, request, locals }) => {
	const { id } = params;
	const user = locals.user;

	if (!user) {
		throw error(401, 'User not logged-in.');
	}

	const data: Bookmark = await request.json();

	try {
		const bookmark = await updateBookmark(id, data);
		return json(bookmark);
	} catch (err) {
		return handleError(err);
	}
};

export const DELETE: RequestHandler = async ({ params, locals }) => {
	const { id } = params;
	const user = locals.user;

	if (!user) {
		throw error(401, 'User not logged-in.');
	}

	try {
		const bookmark = await deleteBookmark(id);
		return json(bookmark);
	} catch (err) {
		return handleError(err);
	}
};
