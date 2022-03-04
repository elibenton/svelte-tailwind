<script>
	import '../app.css';
	import Moon from '$lib/svgs/moon.svelte';
	import Sun from '$lib/svgs/sun.svelte';

	import { page } from '$app/stores';

	$: currentPage = $page.path;

	$: console.log(currentPage);

	// let dark = false;

	let links = ['writing', 'photos', 'comment', 'projects'];
</script>

<main class="max-w-4xl mx-auto p-4 relative min-h-screen">
	<!-- <div class="md:flex md:justify-center"> -->
	<!-- <nav class=" md:w-36">
			{#if currentPage === '/'}
				<a class="font-bold" sveltekit:prefetch href="/">Eli Benton Cohen</a>
			{:else}
				<a sveltekit:prefetch href="/">Eli Benton Cohen</a>
			{/if}

			<div class="flex gap-x-3 md:flex-col">
				{#each links as link}
					{#if currentPage.slice(1) === link}
						<a class="underline" sveltekit:prefetch href={link}>{link}</a>
					{:else}
						<a sveltekit:prefetch href={link}>{link}</a>
					{/if}
				{/each}
			</div>
		</nav> -->
	<!-- <div class="md:min-w-min md:max-w-2xl md:mx-8"> -->
	<slot />
	<!-- </div> -->
	<!-- </div> -->
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
