<script lang="ts">
	import { getLink, getName } from '$lib/utils/links';
	import tags from '$lib/stores/tags';
	import Svg from '$lib/components/Svg.svelte';
	import { onMount } from 'svelte';

	export let currentTag = '';
	let areFiltersOpen = false;

	let height: number = 0;
	let hideChevron = false;
	let list: HTMLElement | null = null;

	const checkHeight = () => {
		height = list?.scrollHeight || 0;
		hideChevron = height < 40;
	};

	onMount(() => {
		checkHeight();
	});

	$: heightStyle = `--height: ${height}px;`;

	const handleClick = () => {
		areFiltersOpen = !areFiltersOpen;
	};
</script>

<svelte:window on:resize={checkHeight} />

<div>
	<ul id="filter-container" class:expanded={areFiltersOpen} style={heightStyle} bind:this={list}>
		{#each $tags as tag}
			<li>
				<a class:current={currentTag === tag} href={currentTag === tag ? '/' : `${getLink(tag)}`}>
					{getName(tag)}
				</a>
			</li>
		{/each}
	</ul>
	<button on:click={handleClick} class:hide={hideChevron}>
		{#if areFiltersOpen}
			<Svg name="chevron-up" width="1.2rem" height="1.2rem" />
		{:else}
			<Svg name="chevron-down" width="1.2rem" height="1.2rem" />
		{/if}
	</button>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: flex-start;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		max-width: 35rem;
		margin: 0 auto 2rem;
		max-height: 2.4rem;
		overflow: hidden;
		transition: max-height 200ms;

		@media (min-width: 50rem) {
			max-height: unset;
			margin-bottom: 2rem;
		}
	}

	.expanded {
		max-height: var(--height);
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

	button {
		padding: 0.6rem;

		@media (min-width: 50rem) {
			display: none;
		}
	}

	.hide {
		display: none;
	}
</style>
