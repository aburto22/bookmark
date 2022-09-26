import { getTags } from '$lib/server/links';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const tags = await getTags();
	return json(tags);
};
