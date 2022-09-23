<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Table from '$lib/Table.svelte';
	import { getName } from '$utils/links';
	import type { PageData } from './$types';

	export let data: PageData;
	const { links, slug } = data;
</script>

<Title>{getName(slug)}</Title>
<Table {links} />
