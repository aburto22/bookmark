<script lang="ts">
	import Button from './Button.svelte';

	export let defaultTag: string = '';
	export let closeForm: () => void;

	let name: string;
	$: tags = defaultTag;
	let description: string;
	let url: string;

	const resetForm = () => {
		name = '';
		tags = defaultTag;
		description = '';
		url = '';
	};

	const handleCancel = () => {
		resetForm();
		closeForm();
	};
</script>

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
