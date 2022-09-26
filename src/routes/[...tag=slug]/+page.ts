import type { Bookmark } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const bookmarks: Bookmark[] = await fetch(`/api/bookmarks?tag=${params.tag}`).then((res) =>
		res.json()
	);

	if (bookmarks.length === 0) {
		throw error(404, 'There are no bookmarks associated with this tag');
	}

	return {
		bookmarks,
		slug: params.tag
	};
};
