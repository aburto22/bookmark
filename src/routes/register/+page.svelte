<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { post } from '$lib/utils/fetch';
	import type { User } from '@prisma/client';
	import { onMount } from 'svelte';
	import session from '$lib/stores/session';
	import { goto } from '$app/navigation';
	let input: HTMLInputElement;
	let email = '';
	let name = '';
	let password = '';
	let error = '';

	onMount(() => {
		input.focus();
	});

	const resetForm = () => {
		email = '';
		name = '';
		password = '';
		error = '';
	};

	const handleSubmit = async () => {
		const res = await post<User>('/api/auth/register', { email, password, name });

		if (!res.success) {
			error = res.message;
			return;
		}

		session.set(res.data);
		await goto('/');
		resetForm();
	};
</script>

<h1>Login</h1>

<form on:submit|preventDefault={handleSubmit}>
	<label for="email">
		Email:
		<input type="email" bind:this={input} bind:value={email} required />
	</label>
	<label for="name">
		Name:
		<input type="text" bind:value={name} required />
	</label>
	<label for="password">
		Password:
		<input type="password" bind:value={password} required />
	</label>
	{#if error}
		<p>{error}</p>
	{/if}
	<Button type="submit">Register</Button>
</form>

<div>
	<a href="/login">Click here to Login</a>
</div>

<style>
	h1 {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		max-width: 20rem;
		margin: 0 auto;
		gap: 0.5rem;
		align-items: center;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-size: 0.9rem;
		width: 100%;
	}

	label:nth-child(3) {
		margin-bottom: 0.5rem;
	}

	input {
		padding: 0.3rem 0.5rem;
		border-radius: 0.3rem;
		font-size: 0.9rem;
	}

	p {
		font-size: 0.8rem;
		text-align: center;
		color: var(--red);
		margin-bottom: 0.5rem;
	}

	div {
		border-top: 1px solid var(--yellow);
		padding-top: 1rem;
		text-align: center;
		max-width: 100%;
		width: 18rem;
		margin: 2rem auto 0;
	}
</style>
