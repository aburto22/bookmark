<script lang="ts">
	import type { Bookmark } from '@prisma/client';

	export let bookmark: Bookmark;
</script>

<tr>
	<td><a href={bookmark.url} target="_blank">{bookmark.name}</a></td>
	<td>{bookmark.tags.join(', ')}</td>
	<td>{bookmark.description}</td>
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
