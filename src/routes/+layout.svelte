<script lang="ts">
	import '@fontsource/open-sans';
	import Header from '$lib/Header.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	const { tags } = data;
</script>

<Header {tags} />

<main>
	<section>
		<slot />
	</section>
</main>

<footer>Created by Alejandro Aburto Salazar</footer>

<style>
	:global(:root) {
		--darkBlue: #161b33;
		--black: #161b33;
		--white: #fffbff;
		--lightBlue: #76e5fc;
		--gray: #817f82;
		--lightGray: #aaa8ab;
		--yellow: #fedf1b;
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

	:global(a) {
		color: var(--yellow);
	}

	main {
		padding: 1rem;
	}

	section {
		padding: 1rem;
		max-width: 50rem;
		margin: 0 auto;
	}

	footer {
		margin-top: auto;
		text-align: center;
		padding: 1rem;
		font-size: 0.7rem;
		color: var(--lightGray);
	}
</style>
