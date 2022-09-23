<script lang="ts">
	export let name: string;
	export let width: string | number = '1.5rem';
	export let height: string | number = '1.5rem';
</script>

{#if name === 'add'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		{width}
		{height}
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
{:else}
	{null}
{/if}
