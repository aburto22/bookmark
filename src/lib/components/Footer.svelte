<script lang="ts">
	import session from '$lib/stores/session';
	import { goto } from '$app/navigation';

	const handleLogout = async () => {
		session.set(null);
		await goto('/');
	};
</script>

<footer>
	Created by Alejandro Aburto Salazar
	{#if $session}
		<span>
			You are logged-in,
			<button on:click={handleLogout} type="button">Click here to Logout</button>
		</span>
	{:else}
		<a href="/login">Admin login</a>
	{/if}
</footer>

<style>
	footer {
		margin-top: auto;
		text-align: center;
		padding: 1rem;
		font-size: 0.7rem;
		color: var(--lightGray);
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	a,
	button {
		color: var(--lightGray);
	}

	a:hover,
	button:hover {
		color: var(--yellow);
	}
</style>
