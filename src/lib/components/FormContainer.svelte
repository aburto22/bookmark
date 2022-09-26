<script lang="ts">
	import Button from './Button.svelte';
	import Form from './Form.svelte';
	import Svg from './Svg.svelte';

	let showing = false;
	export let tag: string;

	const closeForm = () => (showing = false);
</script>

<div>
	<Button on:click={() => (showing = !showing)}>
		<Svg name="add" height="1.1rem" width="1.1rem" /> Add link
	</Button>
	{#if showing}
		<Form defaultTag={tag} {closeForm} />
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
		gap: 1rem;
	}
</style>
