import type { Bookmark } from '@prisma/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const bookmarks: Bookmark[] = await fetch('/api/bookmarks').then((res) => res.json());
	return {
		bookmarks
	};
};
