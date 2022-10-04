import { error } from '@sveltejs/kit';

export const handleError = (err: unknown) => {
	if (err instanceof Error) {
		throw error(400, err.message);
	}
	throw error(500, 'There was an error with your request');
};
