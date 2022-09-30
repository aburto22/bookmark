<script lang="ts">
	import Form from './Form.svelte';
	import { createEventDispatcher } from 'svelte';
	import { parseTags } from '$lib/utils/form';
	import type { BookmarkFormData } from 'src/types';
	import { post } from '$lib/utils/fetch';
	import type { Bookmark } from '@prisma/client';

	type Dispatch = {
		addBookmark: Bookmark;
	};

	const dispatch = createEventDispatcher<Dispatch>();

	export let onSuccess = () => {};
	export let onCancel = () => {};
	export let defaultTag: string = '';

	let name = '';
	let tags = defaultTag;
	let description = '';
	let url = '';
	let error = '';

	const updateTags = (defaultTag: string) => {
		tags = defaultTag;
	};

	$: updateTags(defaultTag);

	const handleSubmit = async () => {
		const formData: BookmarkFormData = {
			name,
			tags: parseTags(tags),
			description,
			url
		};

		const res = await post<Bookmark>(`/api/bookmarks/`, formData);

		if (!res.success) {
			error = res.message;
			return;
		}

		dispatch('addBookmark', res.data);
		onSuccess();
	};

	const handleCancel = () => {
		name = '';
		tags = defaultTag;
		description = '';
		url = '';
		error = '';
		onCancel();
	};
</script>

<Form
	bind:name
	bind:description
	bind:url
	bind:tags
	{error}
	on:submit={handleSubmit}
	on:cancel={handleCancel}
/>
