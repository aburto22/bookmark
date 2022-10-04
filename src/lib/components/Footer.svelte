<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import Svg from './Svg.svelte';
	import { post } from '$lib/utils/fetch';

	const handleLogout = async () => {
		await post('/api/auth/logout');
		await invalidate('session:user');
		await goto('/');
	};
</script>

<footer>
	Created by Alejandro Aburto Salazar
	{#if $page.data.user}
		<span>
			You are logged-in,
			<button on:click={handleLogout} type="button">click here to Logout</button>
		</span>
	{:else}
		<a href="/login">Admin login</a>
	{/if}
	<div>
		<a href="https://github.com/aburto22" target="_blank">
			<Svg name="github" width="1.2rem" height="1.2rem" />
		</a>
		<a href="https://www.linkedin.com/in/alejandroaburtos/" target="_blank">
			<Svg name="linkedin" width="1.2rem" height="1.2rem" />
		</a>
	</div>
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
		gap: 0.3rem;
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
