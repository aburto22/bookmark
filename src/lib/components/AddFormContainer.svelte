<script lang="ts">
	import Button from './Button.svelte';
	import AddForm from './AddForm.svelte';
	import Modal from './Modal.svelte';
	import Svg from './Svg.svelte';

	export let tag: string;
</script>

<div>
	<Modal>
		<svelte:fragment slot="button" let:handleClick>
			<Button on:click={handleClick}>
				<Svg name="add" height="1.1rem" width="1.1rem" /> Add link
			</Button>
		</svelte:fragment>
		<svelte:fragment slot="form" let:onCancel let:onSuccess>
			<AddForm defaultTag={tag} on:addBookmark {onSuccess} {onCancel} />
		</svelte:fragment>
	</Modal>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2.5rem;
		gap: 1rem;
	}
</style>
