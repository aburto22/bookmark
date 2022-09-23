import db from '$db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const links = await db.bookmark.findMany({});

	return {
		links
	};
};
