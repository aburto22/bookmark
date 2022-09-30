import type { Bookmark } from '@prisma/client';

export type BookmarkFormData = Pick<Bookmark, 'name' | 'tags' | 'url'> & {
	description?: string | null;
};
