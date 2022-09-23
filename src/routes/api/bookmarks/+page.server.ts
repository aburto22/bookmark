import db from '$lib/db';
import { invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const regexUrl =
	/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const url = formData.get('url');
		const tags = formData.get('tags');
		const description = formData.get('description');

		const errors: Record<string, string> = {};

		if (!name) {
			errors.name = 'Missing name';
		}

		if (!url) {
			errors.url = 'Missing url';
		}

		if (url && !regexUrl.test(url.toString())) {
			errors.url = 'Incorrect url format.';
		}

		if (Object.entries(errors).length > 0) {
			throw invalid(400, errors);
		}

		const tagsArray =
			tags
				?.toString()
				.split(',')
				.map((t) => t.trim())
				.map((t) => t.replace(/ /g, '-')) || [];

		await db.bookmark.create({
			data: {
				name: name?.toString() || '',
				link: url?.toString() || '',
				tags: tagsArray,
				description: description?.toString() || '',
				ownerId: '632d8dea3f1cbc1dd741ea95'
			}
		});

		throw redirect(301, '/');
	}
};
