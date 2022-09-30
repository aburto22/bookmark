import { derived } from 'svelte/store';
import bookmarks from '$lib/stores/bookmarks';
import { getTags } from '$lib/utils/links';

const tags = derived(bookmarks, ($bookmarks) => getTags($bookmarks));

export default tags;
