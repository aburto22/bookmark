import type { Bookmark } from '@prisma/client';
import { writable } from 'svelte/store';

const store = writable<Bookmark[]>([]);

export default store;
