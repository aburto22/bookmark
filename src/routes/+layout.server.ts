import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals, depends }) => {
	depends('session:user');
	return {
		user: locals.user
	};
};
