import { getBookmarks } from '$lib/server/links';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const links = await getBookmarks();

	return {
		links
	};
};
