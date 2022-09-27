import type { Bookmark } from '@prisma/client';

export const getLink = (tag: string): string => `/${tag}`;

export const getName = (tag: string): string =>
	tag.replace(/(-|\b)([a-z])/g, (match, p1, p2) => {
		return `${p1}${p2.toUpperCase()}`;
	});

export const getTags = (bookmarks: Bookmark[]): string[] => [
	...new Set(bookmarks.map((t) => t.tags).flat())
];
