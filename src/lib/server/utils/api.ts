import { error } from '@sveltejs/kit';
import { getSession } from '$lib/server/sessions';

export const validateSession = async (sessionId: string | undefined) => {
	if (!sessionId) {
		throw error(401, 'user is not signed-in');
	}

	const session = await getSession(sessionId);

	if (!session) {
		throw error(401, 'session not found');
	}
};

export const handleError = (err: unknown) => {
	if (err instanceof Error) {
		throw error(400, err.message);
	}
	throw error(500, 'There was an error with your request');
};
