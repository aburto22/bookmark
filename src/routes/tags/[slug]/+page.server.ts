import { getBookmarksByTag } from '$lib/server/links';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const links = await getBookmarksByTag(params.slug);

	if (links.length === 0) {
		throw error(404, 'Page not found');
	}

	return {
		links,
		slug: params.slug
	};
};
