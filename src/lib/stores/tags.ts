import { derived } from 'svelte/store';
import bookmarksStore from '$lib/stores/bookmarks';
import { getTags } from '$lib/utils/links';

const store = derived(bookmarksStore, ($bookmarks) => getTags($bookmarks));

export default store;
