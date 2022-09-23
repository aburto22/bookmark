<script lang="ts">
	import type { Bookmark } from '@prisma/client';

	export let link: Bookmark;
</script>

<tr>
	<td><a href={link.link} target="_blank">{link.name}</a></td>
	<td>{link.tags.join(', ')}</td>
	<td>{link.description}</td>
</tr>
