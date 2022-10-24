<script lang="ts">
	import { page } from '$app/stores';
	import type { Bookmark } from '@prisma/client';
	import BookmarkItem from './BookmarkItem.svelte';

	export let bookmarks: Bookmark[];

	$: user = $page.data.user;
</script>

<div class="container">
	<div class="header">
		<p>Link</p>
		<p>Tags</p>
		<p>Description</p>
		{#if user}
			<span />
		{/if}
	</div>
	{#each bookmarks as bookmark}
		<BookmarkItem {bookmark} on:deleteBookmark on:updateBookmark />
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		width: 100%;

		@media (min-width: 50rem) {
			display: block;
		}
	}

	.header {
		display: none;

		@media (min-width: 50rem) {
			display: grid;
			grid-template-columns: 0.6fr 0.6fr 1fr auto;
		}
	}

	p {
		text-align: center;
		padding: 0.5rem;
		color: var(--lightGray);
	}

	span {
		width: 70.4px;
	}
</style>
