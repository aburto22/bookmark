import { parseTags, validateBookmark } from '$lib/utils/form';
import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name')?.toString();
		const url = formData.get('url')?.toString();
		const description = formData.get('description')?.toString();
		const tagsString = formData.get('tags')?.toString();

		const initialData = {
			name,
			url,
			description,
			tags: tagsString
		};

		const tags = parseTags(tagsString);

		const data = {
			name,
			url,
			description,
			tags
		};

		const validationResult = validateBookmark(data);

		if (!validationResult.success) {
			return invalid(400, { errors: validationResult.error, data: initialData, success: false });
		}

		return {
			success: true
		};
	}
};
