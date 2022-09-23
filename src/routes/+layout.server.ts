import db from '$db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = await db.bookmark.findMany({
		select: { tags: true }
	});

	const tags = [...new Set(data.map((d) => d.tags).flat())];

	return {
		tags
	};
};
