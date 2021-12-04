<script>
	import { fade } from 'svelte/transition';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class="h-7 w-7"
	fill="currentColor"
	viewBox="0 0 24 24"
	stroke="currentColor"
	in:fade={{ duration: 150 }}
>
	<path
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
	/>
</svg>
