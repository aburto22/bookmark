import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const tags: string[] = await fetch('/api/bookmarks/tags').then((res) => res.json());

	return {
		tags
	};
};
