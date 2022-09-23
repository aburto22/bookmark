import db from './db';

export const getBookmarks = async () => db.bookmark.findMany({});

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
