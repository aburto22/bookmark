<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Table from '$lib/components/Table.svelte';
	import FormContainer from '$lib/components/FormContainer.svelte';
	import { getName } from '$lib/utils/links';
	import type { PageData } from './$types';
	import type { Bookmark } from '@prisma/client';

	export let data: PageData;

	const addBookmark = async (event: CustomEvent<Bookmark>) => {
		data = {
			...data,
			bookmarks: [event.detail, ...data.bookmarks]
		};
	};
</script>

<Title>{data.slug ? getName(data.slug) : 'All bookmarks'}</Title>
<FormContainer tag={data.slug} on:addBookmark={addBookmark} />
<Table bookmarks={data.bookmarks} />
