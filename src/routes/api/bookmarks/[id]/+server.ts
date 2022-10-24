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

	const bookmark = await updateBookmark(id, data);
	return json(bookmark);
};

export const DELETE: RequestHandler = async ({ params, locals }) => {
	const { id } = params;
	const user = locals.user;

	if (!user) {
		throw error(401, 'User not logged-in.');
	}

	const bookmark = await deleteBookmark(id);
	return json(bookmark);
};
