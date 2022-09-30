<script lang="ts">
	import type { Bookmark } from '@prisma/client';
	import BookmarkRow from './BookmarkRow.svelte';

	export let bookmarks: Bookmark[];
</script>

<div>
	<table>
		<thead>
			<th>Name</th>
			<th>Tags</th>
			<th>Description</th>
			<th class="no-border" />
		</thead>
		<tbody>
			{#each bookmarks as bookmark}
				<BookmarkRow {bookmark} on:deleteBookmark on:updateBookmark />
			{/each}
		</tbody>
	</table>
</div>

<style>
	div {
		max-width: 100%;
		overflow-x: auto;
	}
	table {
		text-align: center;
		margin: 0 auto;
	}

	table,
	thead,
	th,
	tbody {
		border-collapse: collapse;
	}

	th {
		padding: 0.8rem;
		border: 1px solid var(--lightGray);
		color: var(--lightGray);
		font-size: 0.8rem;
		font-weight: 700;
	}

	.no-border {
		border: none;
		width: 0;
	}
</style>
