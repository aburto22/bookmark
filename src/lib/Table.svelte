<script lang="ts">
	import type { Bookmark } from '@prisma/client';
	import Link from './Link.svelte';

	export let links: Bookmark[];
</script>

<table>
	<thead>
		<th> Name </th>
		<th>Tags</th>
		<th>Description</th>
	</thead>
	<tbody>
		{#each links as link}
			<Link {link} />
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
