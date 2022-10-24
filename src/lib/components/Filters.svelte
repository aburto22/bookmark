<script lang="ts">
	import { getLink, getName } from '$lib/utils/links';
	import tags from '$lib/stores/tags';

	export let currentTag = '';
</script>

<ul>
	{#each $tags as tag}
		<li>
			<a class:current={currentTag === tag} href={currentTag === tag ? '/' : `${getLink(tag)}`}>
				{getName(tag)}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		max-width: 35rem;
		margin: 0 auto 2rem;
	}

	li {
		display: block;
	}

	a {
		display: block;
		padding: 0.7rem;
		border-radius: 0.5rem;
		transition: all 50ms;
	}

	a:hover {
		background-color: var(--white);
		color: var(--darkBlue);
	}

	.current {
		background-color: var(--yellow);
		color: var(--darkBlue);
		font-weight: 600;
	}

	.current:hover {
		background-color: var(--yellow);
		color: var(--darkBlue);
	}
</style>
