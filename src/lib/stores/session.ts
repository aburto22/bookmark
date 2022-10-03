import type { User } from '@prisma/client';
import { writable } from 'svelte/store';

const session = writable<User | null>(null);

export default session;
