import type { Bookmark } from '@prisma/client';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const bookmarks: Bookmark[] = await fetch('/api/bookmarks').then((res) => res.json());

	return {
		bookmarks
	};
};
