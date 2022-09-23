<script lang="ts">
	import type { PageData } from './$types';
	import Title from '$lib/Title.svelte';
	import Table from '$lib/Table.svelte';

	export let data: PageData;
	const { links } = data;
</script>

<Title>All links</Title>
<Table {links} />
