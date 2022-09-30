<script lang="ts">
	import Form from './Form.svelte';
	import { createEventDispatcher } from 'svelte';
	import { parseTags } from '$lib/utils/form';
	import type { BookmarkFormData } from 'src/types';
	import { put } from '$lib/utils/fetch';
	import type { Bookmark } from '@prisma/client';

	type Dispatch = {
		updateBookmark: Bookmark;
	};

	const dispatch = createEventDispatcher<Dispatch>();

	export let onSuccess = () => {};
	export let onCancel = () => {};
	export let defaultValue: Bookmark;

	let name = defaultValue.name;
	let tags = defaultValue.tags.join(', ');
	let description = defaultValue.description || '';
	let url = defaultValue.url;
	let error = '';

	const updateData = (bookmark: Bookmark) => {
		name = bookmark.name;
		tags = bookmark.tags.join(', ');
		description = bookmark.description || '';
		url = bookmark.url;
	};

	$: updateData(defaultValue);

	const handleSubmit = async () => {
		const formData: BookmarkFormData = {
			name,
			tags: parseTags(tags),
			description,
			url
		};

		const res = await put<Bookmark>(`/api/bookmarks/${defaultValue.id}`, formData);

		if (!res.success) {
			error = res.message;
			return;
		}

		dispatch('updateBookmark', res.data);
		onSuccess();
	};

	const handleCancel = () => {
		name = defaultValue.name;
		tags = defaultValue.tags.join(', ');
		description = defaultValue.description || '';
		url = defaultValue.url;
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
