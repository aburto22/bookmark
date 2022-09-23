<script lang="ts">
	import type { PageData } from './$types';
	import Title from '$lib/components/Title.svelte';
	import Table from '$lib/components/Table.svelte';

	export let data: PageData;
</script>

<Title>All links</Title>
<Table links={data.links} />
