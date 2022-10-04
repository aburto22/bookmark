import { error, json, type RequestHandler } from '@sveltejs/kit';
import type { LoginFormData } from 'src/types';
import bcrypt from 'bcrypt';
import db from '$lib/server/db';
import { createSession } from '$lib/server/sessions';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { email, password }: LoginFormData = await request.json();

	const user = await db.user.findUnique({
		where: { email }
	});

	if (!user) {
		throw error(403, 'Invalid email');
	}

	const isValidPassword = await bcrypt.compare(password, user.hash);

	if (!isValidPassword) {
		throw error(403, 'Invalid password');
	}

	const { sessionId } = await createSession(user.id);

	cookies.set('session', sessionId, {
		path: '/',
		sameSite: 'strict'
	});

	return json({ id: user.id });
};
