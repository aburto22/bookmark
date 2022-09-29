<script lang="ts">
	import { onMount } from 'svelte';

	let showing = false;

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			showing = false;
		}
	};

	onMount(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<slot name="button" handleClick={() => (showing = true)} />
{#if showing}
	<div class="background " on:click={() => (showing = false)} />
	<dialog>
		<slot name="form" onCancel={() => (showing = false)} onSuccess={() => (showing = false)} />
	</dialog>
{/if}

<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 20;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background-color: var(--lightGray);
		opacity: 0.8;
	}

	dialog {
		width: 25rem;
		max-width: 100%;
		background-color: var(--black);
		padding: 2rem;
		border-radius: 0.5rem;
		z-index: 50;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
	}
</style>
