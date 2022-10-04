<script lang="ts">
	import { del } from '$lib/utils/fetch';
	import type { Bookmark } from '@prisma/client';
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import Button from './Button.svelte';
	import EditForm from './EditForm.svelte';
	import Modal from './Modal.svelte';
	import Svg from './Svg.svelte';

	export let bookmark: Bookmark;

	type Dispatch = {
		deleteBookmark: string;
	};

	const user = $page.data.user;

	const dispatch = createEventDispatcher<Dispatch>();

	const handleDelete = async () => {
		const res = await del<Bookmark>(`/api/bookmarks/${bookmark.id}`);

		if (!res.success) {
			console.error(res.message);
			return;
		}

		dispatch('deleteBookmark', res.data.id);
	};
</script>

<tr>
	<td class="no-break"><a href={bookmark.url} target="_blank">{bookmark.name}</a></td>
	<td>{bookmark.tags.join(', ')}</td>
	<td>{bookmark.description}</td>
	{#if user}
		<td class="no-border">
			<Modal>
				<svelte:fragment slot="button" let:handleClick>
					<Button type="button" size="small" styleType="success" on:click={handleClick}>
						<Svg name="edit" width="1.2rem" height="1.2rem" />
					</Button>
				</svelte:fragment>
				<svelte:fragment slot="form" let:onSuccess let:onCancel>
					<EditForm {onSuccess} {onCancel} on:updateBookmark defaultValue={bookmark} />
				</svelte:fragment>
			</Modal>
			<Button type="button" size="small" styleType="danger" on:click={handleDelete}>
				<Svg name="delete" width="1.2rem" height="1.2rem" />
			</Button>
		</td>
	{/if}
</tr>

<style>
	tr,
	td {
		border-collapse: collapse;
	}
	td {
		padding: 0.7rem;
		border: 1px solid var(--lightGray);
		font-size: 0.9rem;
	}

	.no-border {
		border: none;
		display: flex;
		gap: 0.3rem;
	}

	.no-break {
		white-space: nowrap;
	}

	a {
		font-weight: 600;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
