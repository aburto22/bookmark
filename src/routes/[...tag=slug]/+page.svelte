<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Table from '$lib/components/Table.svelte';
	import Form from '$lib/components/Form.svelte';
	import { getName } from '$lib/utils/links';
	import type { PageData, ActionData } from './$types';
	import FormContainer from '$lib/components/FormContainer.svelte';

	export let data: PageData;
	export let form: ActionData;

	$: console.log(form);
</script>

<Title>{data.slug ? getName(data.slug) : 'All bookmarks'}</Title>
<FormContainer tag={data.slug} />
<Table bookmarks={data.bookmarks} />
