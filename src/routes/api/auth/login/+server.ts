import { error, json, type RequestHandler } from '@sveltejs/kit';
import type { LoginFormData } from 'src/types';
import bcrypt from 'bcrypt';
import db from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
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

	return json(user);
};
