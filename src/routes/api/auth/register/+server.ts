import { error, json, type RequestHandler } from '@sveltejs/kit';
import type { RegisterFormData } from 'src/types';
import bcrypt from 'bcrypt';
import db from '$lib/server/db';

const saltRounds = 10;

export const POST: RequestHandler = async ({ request }) => {
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

	return json({ id: newUser.id });
};
