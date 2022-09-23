<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { links } = data;
</script>

<section>
	<h1>There are my link</h1>
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
