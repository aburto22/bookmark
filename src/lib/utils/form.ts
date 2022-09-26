import z from 'zod';

const bookmarkSchema = z.object({
	name: z.string().max(20),
	link: z.string().url(),
	description: z.optional(z.string().max(50)),
	tags: z.array(z.string().max(15))
});

type BookmarkSchema = z.infer<typeof bookmarkSchema>;

const formDataSchema = z.object({
	name: z.string().max(20),
	link: z.string().url(),
	description: z.optional(z.string().max(50)),
	tags: z.string()
});

type FormDataSchema = z.infer<typeof formDataSchema>;

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

export const validateBookmark = (data: Partial<BookmarkSchema>) => {
	const result = bookmarkSchema.safeParse(data);

	if (result.success) {
		return result;
	}

	return {
		...result,
		error: result.error.format()
	};
};
