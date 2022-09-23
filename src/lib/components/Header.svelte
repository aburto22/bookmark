<script lang="ts">
	import { getLink, getName } from '$lib/utils/links';

	export let tags: string[];
</script>

<header>
	<a href="/">
		<h1>Link bookmark</h1>
	</a>
	<nav>
		{#each tags as tag}
			<a href={`${getLink(tag)}`}>{getName(tag)}</a>
		{/each}
	</nav>
</header>

<style lang="scss">
	header {
		padding-top: 1rem;
	}

	a {
		display: block;
		color: var(--white);
	}

	h1 {
		padding: 1rem;
		text-align: center;
		font-size: 2rem;
	}

	nav {
		display: flex;
		justify-content: center;
		gap: 0.5rem;

		a {
			padding: 0.5rem;

			&:hover {
				background-color: var(--white);
				color: var(--darkBlue);
			}
		}
	}
</style>
