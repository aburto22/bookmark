import type { Bookmark } from '@prisma/client';

export type BookmarkFormData = Pick<Bookmark, 'name' | 'tags' | 'url' | 'ownerId'> & {
	description?: string | null;
};

export type LoginFormData = {
	email: string;
	password: string;
};

export type RegisterFormData = {
	email: string;
	name: string;
	password: string;
};
