import type { BookmarkFormData } from 'src/types';
import z from 'zod';

const bookmarkSchema = z.object({
	name: z.string().max(20),
	url: z.string().url(),
	description: z.optional(z.string().max(50)),
	tags: z.array(z.string().max(15)),
	ownerId: z.string()
});

export const parseTags = (tagsString: string | undefined) => {
	if (!tagsString) {
		return [];
	}
	return (
		tagsString
			.split(',')
			.map((t) => t.trim())
			.map((t) => t.replace(/ /g, '-')) || []
	);
};

export const validateBookmark = (data: BookmarkFormData) => {
	const result = bookmarkSchema.safeParse(data);

	if (result.success) {
		return result;
	}

	return {
		...result,
		error: result.error.format()
	};
};
