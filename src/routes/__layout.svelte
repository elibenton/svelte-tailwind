<script>
	'@hmr:keep-all';
	import { fade } from 'svelte/transition';
	import '../app.css';
	let dark = false;
</script>

<div class:dark>
	<div class="bg-beige dark:bg-gray-900">
		<main
			class="flex flex-col h-screen justify-between max-w-3xl px-4 sm:px-8 mx-auto pt-2 pb-8 dark:text-white"
		>
			<section>
				<slot />
			</section>
			<footer>
				<div class="flex justify-end">
					<button
						on:click|preventDefault={() => {
							dark = !dark;
						}}
					>
						{#if !dark}
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
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-7 w-7"
								fill="currentColor"
								viewBox="0 0 24 24"
								stroke="currentColor"
								in:fade={{ duration: 150 }}
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						{/if}
					</button>
				</div>
			</footer>
		</main>
	</div>
</div>
