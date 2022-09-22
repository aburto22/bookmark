<header>
	<a href="/">
		<h1>Link bookmark</h1>
	</a>
	<nav>
		<a href="/links">Links</a>
		<a href="/about">About</a>
	</nav>
</header>

<style lang="scss">
	header {
		padding-top: 1rem;
	}

	a {
		display: block;
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
