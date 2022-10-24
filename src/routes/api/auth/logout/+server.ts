import { removeSession } from '$lib/server/sessions';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
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
};
