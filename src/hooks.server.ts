import type { Handle } from '@sveltejs/kit';
import { getUserInfoFromSession } from '$lib/server/sessions';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session');

	event.locals.user = await getUserInfoFromSession(sessionId);

	const response = await resolve(event);
	return response;
};
