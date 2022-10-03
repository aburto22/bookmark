<script lang="ts">
	import '@fontsource/open-sans';
	import Header from '$lib/components/Header.svelte';
	import bookmarks from '$lib/stores/bookmarks';
	import type { LayoutData } from './$types';
	import Footer from '$lib/components/Footer.svelte';

	export let data: LayoutData;
	$: bookmarks.set(data.bookmarks);
</script>

<Header />

<main>
	<section>
		<slot />
	</section>
</main>

<Footer />

<style>
	main {
		padding: 1rem;
	}

	section {
		max-width: 50rem;
		margin: 0 auto;
	}
</style>
