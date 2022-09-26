<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Table from '$lib/components/Table.svelte';
	import { getName } from '$lib/utils/links';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Title>{data.slug ? getName(data.slug) : 'All bookmarks'}</Title>
<Table bookmarks={data.bookmarks} tag={data.slug} />
