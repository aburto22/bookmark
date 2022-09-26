<script lang="ts">
	export let styleType: 'success' | 'danger' | 'normal' = 'normal';
	export let type: 'button' | 'submit' = 'button';
</script>

<button
	on:click
	class:normal={styleType === 'normal'}
	class:success={styleType === 'success'}
	class:danger={styleType === 'danger'}
	{type}
>
	<slot />
</button>

<style>
	button {
		padding: 0.7rem;
		display: flex;
		align-items: center;
		width: max-content;
		font-size: 0.9rem;
		font-weight: 800;
		border-radius: 0.5rem;
		gap: 0.3rem;
	}

	.normal {
		background-color: var(--yellow);
		color: var(--darkBlue);
	}

	.success {
		background-color: var(--green);
		color: var(--white);
	}

	.danger {
		background-color: var(--red);
		color: var(--white);
	}
</style>
