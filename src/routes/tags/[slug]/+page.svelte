<script lang="ts">
	import Title from '$lib/Title.svelte';
	import { getName } from '$utils/links';
	import type { PageData } from './$types';

	export let data: PageData;
	const { links, slug } = data;
</script>

<section>
	<Title>{getName(slug)}</Title>
	<ul>
		{#each links as link}
			<li>{link.name}</li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding: 1rem;
	}
</style>
