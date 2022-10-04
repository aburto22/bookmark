import { error, json, type RequestHandler } from '@sveltejs/kit';
import type { RegisterFormData } from 'src/types';
import bcrypt from 'bcrypt';
import db from '$lib/server/db';
import { createSession } from '$lib/server/sessions';

const saltRounds = 10;

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { email, name, password }: RegisterFormData = await request.json();

	const user = await db.user.findUnique({
		where: { email }
	});

	if (user) {
		throw error(400, 'Email is already in use.');
	}

	const hash = await bcrypt.hash(password, saltRounds);

	const newUser = await db.user.create({
		data: {
			email,
			name,
			hash
		}
	});

	const { sessionId } = await createSession(newUser.id);

	cookies.set('session', sessionId, {
		path: '/',
		sameSite: 'strict'
	});

	return json({ id: newUser.id });
};
