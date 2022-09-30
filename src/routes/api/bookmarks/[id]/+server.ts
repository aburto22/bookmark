import { deleteBookmark, updateBookmark } from '$lib/server/utils/links';
import type { Bookmark } from '@prisma/client';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async ({ params, request }) => {
	const { id } = params;
	const data: Bookmark = await request.json();

	console.log(id, data);

	try {
		const bookmark = await updateBookmark(id, data);
		return json(bookmark);
	} catch (err) {
		if (err instanceof Error) {
			throw error(400, err.message);
		}
		throw error(500, 'there was an error with your request');
	}
};

export const DELETE: RequestHandler = async ({ params }) => {
	const { id } = params;

	try {
		const bookmark = await deleteBookmark(id);
		return json(bookmark);
	} catch (err) {
		if (err instanceof Error) {
			throw error(400, err.message);
		}
		throw error(500, 'there was an error with your request');
	}
};
