<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Table from '$lib/components/Table.svelte';
	import FormContainer from '$lib/components/FormContainer.svelte';
	import { getName } from '$lib/utils/links';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<Title>{data.slug ? getName(data.slug) : 'All bookmarks'}</Title>
<FormContainer tag={data.slug} formResponse={form} />
<Table bookmarks={data.bookmarks} />
