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
