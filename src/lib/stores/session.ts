import { writable } from 'svelte/store';

const session = writable<{ id: string } | null>(null);

export default session;
