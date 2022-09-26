import z from 'zod';

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

const linkSchema = z.object({
	name: z.string().max(20),
	link: z.string().url(),
	description: z.optional(z.string().max(50)),
	tags: z.array(z.string().max(15))
});

export const linkValidation = (data: unknown) => {
	const result = linkSchema.safeParse(data);

	if (result.success) {
		return result;
	}

	return {
		...result,
		error: result.error.format()
	};
};
