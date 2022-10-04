import type { Bookmark } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, depends, data }) => {
	depends('load:bookmarks');
	try {
		const res = await fetch('/api/bookmarks');
		const { user } = data;

		if (!res.ok) {
			throw error(500, res.statusText);
		}

		const bookmarks: Bookmark[] = await res.json();

		return {
			bookmarks,
			user
		};
	} catch (err) {
		if (err instanceof Error) {
			throw error(500, err.message);
		}
		throw error(500, 'An error has occurred');
	}
};
