<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Table from '$lib/components/Table.svelte';
	import FormContainer from '$lib/components/FormContainer.svelte';
	import { getName } from '$lib/utils/links';
	import type { PageData } from './$types';
	import type { Bookmark } from '@prisma/client';
	import bookmarksStore from '$lib/stores/bookmarks';

	export let data: PageData;

	$: filteredBookmarks = data.slug
		? $bookmarksStore.filter((b) => b.tags.includes(data.slug))
		: $bookmarksStore;

	const addBookmark = async (event: CustomEvent<Bookmark>) => {
		bookmarksStore.update((current) => [event.detail, ...current]);
	};
</script>

<Title>{data.slug ? getName(data.slug) : 'All bookmarks'}</Title>
<FormContainer tag={data.slug} on:addBookmark={addBookmark} />
<Table bookmarks={filteredBookmarks} />
