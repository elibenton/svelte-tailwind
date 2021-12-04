<script>
	import '../app.css';
	import Moon from '../lib/svgs/moon.svelte';
	import Sun from '../lib/svgs/sun.svelte';
	let dark = false;
</script>

<main class:dark class="max-w-4xl mx-1.5 sm:mx-auto mt-2 mb-8 sm:px-8 relative">
	<slot />
	<!-- <footer>
		<div class="flex justify-end">
			<button
				on:click|preventDefault={() => {
					dark = !dark;
				}}
			>
				{#if !dark}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</button>
		</div>
	</footer> -->
</main>
