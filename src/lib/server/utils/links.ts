import type { BookmarkFormData } from 'src/types';
import type { Bookmark } from '@prisma/client';
import db from '../db';

export const getBookmarks = async (tag?: string | null) => {
	return db.bookmark.findMany({
		where: {
			tags: tag ? { has: tag } : undefined
		},
		orderBy: {
			createdAt: 'desc'
		}
	});
};

export const createBookmark = async (data: BookmarkFormData) =>
	db.bookmark.create({
		data: {
			...data,
			ownerId: '632d8dea3f1cbc1dd741ea95',
			createdAt: new Date().toISOString()
		}
	});

export const updateBookmark = async (id: string, data: Bookmark) =>
	db.bookmark.update({
		where: { id },
		data
	});

export const deleteBookmark = async (id: string) => db.bookmark.delete({ where: { id } });
