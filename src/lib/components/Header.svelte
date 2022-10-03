<script>
	import { goto } from '$app/navigation';
	import session from '$lib/stores/session';
	import Button from './Button.svelte';
	import Svg from './Svg.svelte';
</script>

<header>
	<a href="/" class="logo">
		<h1>
			<Svg name="logo" height="2rem" width="2rem" />
			<span class="only-mobile">Link bookmark</span>
		</h1>
	</a>
</header>

<style lang="scss">
	header {
		padding: 1rem 1rem 0;
		display: flex;
		align-items: center;
	}

	.logo {
		display: block;
		color: var(--white);
	}

	h1 {
		text-align: center;
		font-size: 1.8rem;
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
	}

	.only-mobile {
		display: none;
	}

	@media (min-width: 40rem) {
		.only-mobile {
			display: unset;
		}
	}
</style>
