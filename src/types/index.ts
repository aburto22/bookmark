import type { Bookmark } from '@prisma/client';

export type BookmarkFormData = Pick<Bookmark, 'name' | 'description' | 'tags' | 'url'>;
