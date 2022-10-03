<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import Filters from '$lib/components/Filters.svelte';
	import AddFormContainer from '$lib/components/AddFormContainer.svelte';
	import type { PageData } from './$types';
	import type { Bookmark } from '@prisma/client';
	import bookmarks from '$lib/stores/bookmarks';
	import session from '$lib/stores/session';

	export let data: PageData;

	$: filteredBookmarks = data.slug
		? $bookmarks.filter((b) => b.tags.includes(data.slug))
		: $bookmarks;

	const addBookmark = async (event: CustomEvent<Bookmark>) => {
		bookmarks.update((current) => [event.detail, ...current]);
	};

	const deleteBookmark = async (event: CustomEvent<string>) => {
		bookmarks.update((current) => current.filter((b) => b.id != event.detail));
	};

	const updateBookmark = async (event: CustomEvent<Bookmark>) => {
		bookmarks.update((current) =>
			current.map((b) => {
				if (b.id === event.detail.id) {
					return event.detail;
				}
				return b;
			})
		);
	};
</script>

<Filters currentTag={data.slug} />

{#if $session?.id}
	<AddFormContainer tag={data.slug} on:addBookmark={addBookmark} />
{/if}

{#if filteredBookmarks.length > 0}
	<Table
		bookmarks={filteredBookmarks}
		on:deleteBookmark={deleteBookmark}
		on:updateBookmark={updateBookmark}
	/>
{:else}
	<p>There are no bookmarks</p>
{/if}

<style>
	p {
		text-align: center;
		font-size: 1.2rem;
	}
</style>
