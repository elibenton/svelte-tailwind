<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = `/photos.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				status: res.status,
				props: {
					images: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import Close from '$lib/svgs/close.svelte';

	export let images;

	console.log(images);

	let expand = false;
	let overlay, overlayWidth, overlayHeight, overlayName, ISO, ShutterSpeed, Apeture, FocalLength;

	function handleClick(image, metadata) {
		expand = !expand;
		overlay = image.variants[0];
		// overlayWidth = images[index].image_large.width;
		// overlayHeight = images[index].image_large.height;
		overlayName = image.filename;
		FocalLength = metadata.FocalLengthIn35mmFormat;
		ISO = metadata.ISO;
		ShutterSpeed = metadata.ExposureTime;
		Apeture = metadata.FNumber;
	}
</script>

{#if expand}
	<button class="fixed top-3 right-3 z-20" on:click={() => (expand = !expand)}>
		<Close />
	</button>
	<div
		transition:fade={{ duration: 200 }}
		class="fixed flex z-10 w-full h-full p-8 bg-white items-end space-x-4"
	>
		<img
			class="object-contain object-left-bottom w-11/12 max-w-min h-full"
			alt="alt"
			loading="lazy"
			decoding="async"
			src={overlay}
		/>
		<div class="w-48 flex flex-col gap-y-3">
			<!-- <h1>{overlayName.toUpperCase()}</h1> -->
			<p>
				I'm baby venmo unicorn lo-fi shaman bitters 8-bit plaid chambray try-hard hammock
				chicharrones enamel pin deep v. Swag scenester messenger bag taxidermy ramps offal kale
				chips activated charcoal portland vice actually meggings. Tbh jianbing air plant 8-bit
				street art, literally locavore.
			</p>
			<div class="flex font-mono text-sm gap-x-1">
				<h2>1/{1 / ShutterSpeed}s</h2>
				<h2>F{Apeture}</h2>
				<h2>{FocalLength}mm</h2>
				<h2>ISO{ISO}</h2>
			</div>
		</div>
	</div>
{/if}

<ul class="flex flex-wrap">
	{#each images as { image, metadata }, index}
		<button
			on:click={handleClick(image, metadata)}
			class="relative h-45vh flex-grow group bg-white p-0.5"
		>
			<h1
				class="font-medium text-lg text-black text-opacity-50 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 z-10"
			>
				{image.filename}
			</h1>
			<img
				class="object-cover align-bottom max-h-full min-w-full group-hover:opacity-70 transition duration-2004"
				alt="alt"
				loading="lazy"
				decoding="async"
				src={image.variants[1]}
			/>
		</button>
	{/each}
	<ul class="last-list-elt" />
</ul>
