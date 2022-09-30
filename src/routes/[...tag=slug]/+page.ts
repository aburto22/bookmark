import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { Bookmark } from '@prisma/client';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const slug = params.tag;
		const res = await fetch(`/api/bookmarks?tag=${slug}`);

		if (!res.ok) {
			throw error(500, res.statusText);
		}

		const bookmarks: Bookmark[] = await res.json();

		if (slug && bookmarks.length === 0) {
			throw error(404, 'Page not found');
		}

		return {
			slug
		};
	} catch (err) {
		if (err instanceof Error) {
			throw error(500, err.message);
		}
		throw error(500, 'An error has occurred');
	}
};
