<script lang="ts">
	import type { Bookmark } from '@prisma/client';
	import BookmarkRow from './BookmarkRow.svelte';
	import Form from './Form.svelte';

	export let bookmarks: Bookmark[];
</script>

<Form />

<table>
	<thead>
		<th>Name</th>
		<th>Tags</th>
		<th>Description</th>
	</thead>
	<tbody>
		{#each bookmarks as bookmark}
			<BookmarkRow {bookmark} />
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		text-align: center;
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
</style>
