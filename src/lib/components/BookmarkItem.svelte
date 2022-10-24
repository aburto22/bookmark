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

	$: user = $page.data.user;

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

<div>
	<p><a href={bookmark.url} target="_blank">{bookmark.name}</a></p>
	<p class="tags">{bookmark.tags.join(', ')}</p>
	<p class="description">{bookmark.description}</p>
	{#if user}
		<span>
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
		</span>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		width: 18rem;
		max-width: 100%;
		gap: 0.2rem;
		padding: 0.5rem;
		border: 1px solid var(--lightGray);

		@media (min-width: 50rem) {
			gap: 0;
			display: grid;
			grid-template-columns: 0.6fr 0.6fr 1fr auto;
			border: unset;
			padding: unset;
			width: unset;
		}
	}

	p {
		display: flex;
		align-items: center;
		font-size: 0.9rem;
		line-height: 1.2rem;
		word-break: break-word;

		@media (min-width: 50rem) {
			padding: 0.7rem;
			border: 1px solid var(--lightGray);
		}
	}

	.tags {
		font-size: 0.8rem;
		color: var(--lightGray);

		@media (min-width: 50rem) {
			font-size: inherit;
			color: inherit;
		}
	}

	.description {
		font-size: 0.8rem;

		@media (min-width: 50rem) {
			font-size: inherit;
		}
	}

	span {
		padding-left: 0.5rem;
		align-self: center;
		display: flex;
		gap: 0.3rem;
		margin-top: auto;

		@media (min-width: 50rem) {
			margin-top: unset;
		}
	}

	a {
		font-weight: 600;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
