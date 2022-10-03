<script>
	import Svg from './Svg.svelte';
</script>

<header>
	<a href="/" class="logo">
		<h1>
			<Svg name="logo" height="2rem" width="2rem" />
			Link bookmark
		</h1>
	</a>
</header>

<style lang="scss">
	header {
		padding: 1rem;
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
</style>
