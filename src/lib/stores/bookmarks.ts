import type { Bookmark } from '@prisma/client';
import { writable } from 'svelte/store';

const bookmarks = writable<Bookmark[]>([]);

export default bookmarks;
