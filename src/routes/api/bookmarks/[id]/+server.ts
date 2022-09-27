import db from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ params }) => {
	const { id } = params;

	try {
		const bookmark = await db.bookmark.delete({
			where: { id }
		});
		return json(bookmark);
	} catch (err) {
		if (err instanceof Error) {
			throw error(400, err.message);
		}
		throw error(500, 'there was an error with your request');
	}
};
