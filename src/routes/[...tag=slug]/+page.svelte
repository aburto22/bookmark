<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import Filters from '$lib/components/Filters.svelte';
	import AddFormContainer from '$lib/components/AddFormContainer.svelte';
	import { goto, invalidate } from '$app/navigation';
	import type { PageData } from './$types';
	import type { Bookmark } from '@prisma/client';
	import bookmarks from '$lib/stores/bookmarks';
	import { getName } from '$lib/utils/links';

	export let data: PageData;

	$: filteredBookmarks = data.slug
		? $bookmarks.filter((b) => b.tags.includes(data.slug))
		: $bookmarks;

	$: title = data.slug ? `- ${getName(data.slug)}` : '';

	const addBookmark = async (event: CustomEvent<Bookmark>) => {
		bookmarks.update((current) => [event.detail, ...current]);
		invalidate('load:bookmarks');
	};

	const deleteBookmark = async (event: CustomEvent<string>) => {
		bookmarks.update((current) => current.filter((b) => b.id != event.detail));

		if ($bookmarks.filter((b) => b.tags.includes(data.slug)).length === 0) {
			await goto('/');
		}

		invalidate('load:bookmarks');
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

		if (data.slug && !event.detail.tags.includes(data.slug)) {
			const redirectLink = event.detail.tags.length > 0 ? event.detail.tags[0] : '/';
			await goto(redirectLink);
		}

		invalidate('load:bookmarks');
	};
</script>

<svelte:head>
	<title>Link Bookmarks {title}</title>
</svelte:head>

<Filters currentTag={data.slug} />

{#if data.user}
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
