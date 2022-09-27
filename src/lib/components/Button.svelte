<script lang="ts">
	export let styleType: 'success' | 'danger' | 'normal' = 'normal';
	export let type: 'button' | 'submit' = 'button';
	export let size: 'regular' | 'small' = 'regular';
</script>

<button
	on:click
	class:normal={styleType === 'normal'}
	class:success={styleType === 'success'}
	class:danger={styleType === 'danger'}
	class:regular={size === 'regular'}
	class:small={size === 'small'}
	{type}
>
	<slot />
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		width: max-content;
		transition: transform 200ms;

		&:hover {
			transform: scale(1.07);
		}
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

	.regular {
		padding: 0.7rem;
		font-size: 0.9rem;
		font-weight: 800;
		border-radius: 0.5rem;
		gap: 0.3rem;
	}

	.small {
		padding: 0.3rem;
		font-size: 0.7rem;
		font-weight: 800;
		border-radius: 0.3rem;
		gap: 0.2rem;
	}
</style>
