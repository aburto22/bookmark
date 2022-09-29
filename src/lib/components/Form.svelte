<script lang="ts">
	import Button from './Button.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { parseTags } from '$lib/utils/form';
	import type { BookmarkFormData } from 'src/types';
	import { post } from '$lib/utils/fetch';
	import type { Bookmark } from '@prisma/client';

	type Dispatch = {
		addBookmark: Bookmark;
		closeForm: never;
	};

	const dispatch = createEventDispatcher<Dispatch>();

	export let defaultTag: string = '';
	export let onCancel = () => {};
	export let onSuccess = () => {};

	let name = '';
	let tags = defaultTag;
	let description = '';
	let url = '';
	let error = '';
	let input: HTMLInputElement;

	onMount(() => {
		input.focus();
	});

	const updateTags = (slug: string) => {
		tags = slug;
	};

	$: updateTags(defaultTag);

	const resetForm = () => {
		name = '';
		tags = defaultTag;
		description = '';
		url = '';
		error = '';
	};

	const handleCancel = () => {
		resetForm();
		onCancel();
	};

	const handleSubmit = async () => {
		const formData: BookmarkFormData = {
			name,
			tags: parseTags(tags),
			description,
			url
		};

		const res = await post<Bookmark>('/api/bookmarks', formData);

		if (!res.success) {
			error = res.message;
			return;
		}

		dispatch('addBookmark', res.data);
		resetForm();
		onSuccess();
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h2>Add bookmark</h2>
	<label for="name">
		Name:
		<input id="name" name="name" bind:value={name} maxlength="20" required bind:this={input} />
	</label>
	<label for="url">
		Url:
		<input id="url" name="url" bind:value={url} required />
	</label>
	<label for="tags">
		Tags:
		<input id="tags" name="tags" bind:value={tags} maxlength="30" />
	</label>
	<label for="description">
		Short description
		<input id="description" name="description" bind:value={description} maxlength="50" />
	</label>
	{#if error}
		<p>{error}</p>
	{/if}
	<fieldset>
		<Button type="submit" styleType="success">Save</Button>
		<Button on:click={handleCancel} type="button" styleType="danger">Cancel</Button>
	</fieldset>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 20rem;
		margin: 0 auto;
		gap: 0.5rem;
		padding: 0 1rem;
	}

	h2 {
		color: var(--white);
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	label {
		display: flex;
		flex-direction: column;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--lightGray);
	}

	input {
		margin-top: 0.3rem;
		padding: 0.3rem;
		font-size: 0.8rem;
		color: var(--black);
		background-color: var(--white);
		border-radius: 0.2rem;
	}

	fieldset {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 0.5rem;
	}

	p {
		font-size: 0.8rem;
		text-align: center;
		color: var(--red);
	}
</style>
