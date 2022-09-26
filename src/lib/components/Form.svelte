<script lang="ts">
	import Svg from './Svg.svelte';
	import Button from './Button.svelte';

	let showing = false;
	let name: string;
	let tags: string;
	let description: string;
	let url: string;

	const resetForm = () => {
		name = '';
		tags = '';
		description = '';
		url = '';
	};

	const handleCancel = () => {
		resetForm();
		showing = false;
	};
</script>

<div>
	<Button on:click={() => (showing = !showing)}>
		<Svg name="add" height="1.1rem" width="1.1rem" /> Add link
	</Button>
	{#if showing}
		<form method="POST">
			<label for="name">
				Name:
				<input id="name" name="name" bind:value={name} maxlength="20" required />
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
			<fieldset>
				<Button type="success">Save</Button>
				<Button on:click={handleCancel} type="danger">Cancel</Button>
			</fieldset>
		</form>
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

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 20rem;
		margin: 0 auto;
		gap: 0.5rem;
		padding: 0 1rem;
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
</style>
