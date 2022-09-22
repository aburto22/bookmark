<script lang="ts">
	import '@fontsource/open-sans';
	import Header from '$lib/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<footer>Created by Alejandro Aburto Salazar</footer>

<style>
	:global(:root) {
		--darkBlue: #161b33;
		--black: #161b33;
		--white: #fffbff;
		--lightBlue: #76e5fc;
		--gray: #817f82;
	}

	:global(body) {
		background-color: var(--darkBlue);
		color: var(--white);
		font-family: 'Open Sans';
	}

	:global(#app) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		padding: 0.1rem;
	}

	main {
		padding: 1rem;
	}

	footer {
		margin-top: auto;
		text-align: center;
		padding: 1rem;
		font-size: 0.8rem;
	}
</style>
