import type { PageLoad } from './$types';
import bookmarksStore from '$lib/stores/bookmarks';
import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const bookmarks = get(bookmarksStore);
	const slug = params.tag;
	const filteredBookmarks = slug ? bookmarks.filter((b) => b.tags.includes(slug)) : bookmarks;

	if (slug && filteredBookmarks.length === 0) {
		throw error(404, 'Page not found');
	}

	return {
		slug
	};
};
