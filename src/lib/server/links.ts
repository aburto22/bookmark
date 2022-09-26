import db from './db';

export const getBookmarks = async (tag?: string | null) => {
	const searchParams = tag ? { tags: { has: tag } } : {};

	return db.bookmark.findMany({
		where: searchParams
	});
};

export const getTags = async () => {
	const data = await db.bookmark.findMany({
		select: { tags: true }
	});

	return [...new Set(data.map((t) => t.tags).flat())];
};

export const getBookmarksByTag = async (tag: string) =>
	db.bookmark.findMany({
		where: { tags: { has: tag } }
	});

export const deleteBookmark = async (id: string) => db.bookmark.delete({ where: { id } });
