import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, parent }) => {
	const slug = params.tag;
	const { bookmarks } = await parent();
	const filteredBookmarks = bookmarks.filter((b) => b.tags.includes(slug));

	if (slug && filteredBookmarks.length === 0) {
		throw error(404, 'Page not found');
	}

	return {
		slug
	};
};
