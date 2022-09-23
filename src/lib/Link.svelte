<script lang="ts">
	import type { Bookmark } from '@prisma/client';

	export let link: Bookmark;
</script>

<tr>
	<td><a href={link.link} target="_blank">{link.name}</a></td>
	<td>{link.tags.join(', ')}</td>
	<td>{link.description}</td>
</tr>

<style>
	tr,
	td {
		border-collapse: collapse;
	}
	td {
		padding: 0.7rem;
		border: 1px solid var(--lightGray);
		font-size: 0.9rem;
		word-break: break-all;
	}
</style>
