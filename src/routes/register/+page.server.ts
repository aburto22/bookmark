import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	throw error(404, 'Not found');

	const user = locals.user;

	if (user) {
		throw redirect(302, '/');
	}

	return {};
};
