import { removeSession } from '$lib/server/sessions';
import { handleError } from '$lib/server/utils/api';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
	try {
		const sessionId = cookies.get('session');

		if (sessionId) {
			await removeSession(sessionId);
			cookies.set('session', sessionId, {
				path: '/',
				sameSite: 'strict',
				maxAge: 0
			});
		}

		return json({ message: 'logout' });
	} catch (err) {
		return handleError(err);
	}
};
