<script>
	import image_01 from '$images/image_1.jpg?width=700;2400&quality=60&webp&meta';
	import image_02 from '$images/image_2.jpg?width=700;2400&quality=60&webp&meta';
	import image_03 from '$images/image_3.jpg?width=700;2400&quality=60&webp&meta';
	import image_04 from '$images/image_4.jpg?width=700;2400&quality=60&webp&meta';
	import image_05 from '$images/image_5.jpg?width=700;2400&quality=60&webp&meta';
	import image_06 from '$images/image_6.jpg?width=700;2400&quality=60&webp&meta';
	import image_07 from '$images/image_7.jpg?width=700;2400&quality=60&webp&meta';
	import image_08 from '$images/image_8.jpg?width=700;2400&quality=60&webp&meta';
	import image_09 from '$images/image_9.jpg?width=700;2400&quality=60&webp&meta';
	import image_10 from '$images/image_10.jpg?width=700;2400&quality=60&webp&meta';
	import image_11 from '$images/image_11.jpg?width=700;2400&quality=60&webp&meta';
	import image_12 from '$images/image_12.jpg?width=700;2400&quality=60&webp&meta';
	import image_13 from '$images/image_13.jpg?width=700;2400&quality=60&webp&meta&rotate=270';
	import image_14 from '$images/image_14.jpg?width=700;2400&quality=60&webp&meta';
	import image_15 from '$images/image_15.jpg?width=700;2400&quality=60&webp&meta';
	import image_16 from '$images/image_16.jpg?width=700;2400&quality=60&webp&meta';
	import image_17 from '$images/image_17.jpg?width=700;2400&quality=60&webp&meta';
	import image_18 from '$images/image_18.jpg?width=700;2400&quality=60&webp&meta';
	import image_19 from '$images/image_19.jpg?width=700;2400&quality=60&webp&meta';
	import image_20 from '$images/image_20.jpg?width=700;2400&quality=60&webp&meta';
	import image_21 from '$images/image_21.jpg?width=700;2400&quality=60&webp&meta';
	import image_22 from '$images/image_22.jpg?width=700;2400&quality=60&webp&meta';
	import image_23 from '$images/image_23.jpg?width=700;2400&quality=60&webp&meta';
	import image_24 from '$images/image_24.jpg?width=700;2400&quality=60&webp&meta';
	import image_25 from '$images/image_25.jpg?width=700;2400&quality=60&webp&meta';
	import image_26 from '$images/image_26.jpg?width=700;2400&quality=60&webp&meta';
	import image_27 from '$images/image_27.jpg?width=700;2400&quality=60&webp&meta';
	import image_28 from '$images/image_28.jpg?width=700;2400&quality=60&webp&meta';

	let images = [
		{ name: 'Image 1', image_small: image_01[0], image_large: image_01[1] },
		{ name: 'Image 2', image_small: image_02[0], image_large: image_02[1] },
		{ name: 'Image 3', image_small: image_03[0], image_large: image_03[1] },
		{ name: 'Image 4', image_small: image_04[0], image_large: image_04[1] },
		{ name: 'Image 5', image_small: image_05[0], image_large: image_05[1] },
		{ name: 'Image 6', image_small: image_06[0], image_large: image_06[1] },
		{ name: 'Image 7', image_small: image_07[0], image_large: image_07[1] },
		{ name: 'Image 8', image_small: image_08[0], image_large: image_08[1] },
		{ name: 'Image 9', image_small: image_09[0], image_large: image_09[1] },
		{ name: 'Image 10', image_small: image_10[0], image_large: image_10[1] },
		{ name: 'Image 11', image_small: image_11[0], image_large: image_11[1] },
		{ name: 'Image 12', image_small: image_12[0], image_large: image_12[1] },
		{ name: 'Image 13', image_small: image_13[0], image_large: image_13[1] },
		{ name: 'Image 14', image_small: image_14[0], image_large: image_14[1] },
		{ name: 'Image 15', image_small: image_15[0], image_large: image_15[1] },
		{ name: 'Image 16', image_small: image_16[0], image_large: image_16[1] },
		{ name: 'Image 17', image_small: image_17[0], image_large: image_17[1] },
		{ name: 'Image 18', image_small: image_18[0], image_large: image_18[1] },
		{ name: 'Image 19', image_small: image_19[0], image_large: image_19[1] },
		{ name: 'Image 20', image_small: image_20[0], image_large: image_20[1] },
		{ name: 'Image 21', image_small: image_21[0], image_large: image_21[1] },
		{ name: 'Image 22', image_small: image_22[0], image_large: image_22[1] },
		{ name: 'Image 23', image_small: image_23[0], image_large: image_23[1] },
		{ name: 'Image 24', image_small: image_24[0], image_large: image_24[1] },
		{ name: 'Image 25', image_small: image_25[0], image_large: image_25[1] },
		{ name: 'Image 26', image_small: image_26[0], image_large: image_26[1] },
		{ name: 'Image 27', image_small: image_27[0], image_large: image_27[1] },
		{ name: 'Image 28', image_small: image_28[0], image_large: image_28[1] }
	];

	console.log(images);

	import { fade } from 'svelte/transition';
	import Close from '$lib/svgs/close.svelte';

	let expand = false;
	let overlay, overlayWidth, overlayHeight, overlayName;

	function handleClick(name, index) {
		expand = !expand;
		overlay = images[index].image_large.src;
		overlayWidth = images[index].image_large.width;
		overlayHeight = images[index].image_large.height;
		overlayName = name;
	}

	$: console.log(expand, overlay);
</script>

{#if expand}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed flex z-10 w-full h-full px-4 pt-8 pb-24 bg-white items-middle"
	>
		<button class="fixed top-3 right-3" on:click={() => (expand = !expand)}>
			<Close />
		</button>
		<div class="w-11/12 flex align-bottom justify-center">
			<img
				class="object-contain object-bottom align-bottom"
				alt="alt"
				loading="lazy"
				decoding="async"
				src={overlay}
				width={overlayWidth}
				height={overlayHeight}
			/>
			<div class="w-1/5 mx-2 flex flex-col justify-end">
				<h1>{overlayName.toUpperCase()}</h1>
				<h2>LOCATION</h2>
				<h2>DATE</h2>
				<p>
					I'm baby venmo unicorn lo-fi shaman bitters 8-bit plaid chambray try-hard hammock
					chicharrones enamel pin deep v. Swag scenester messenger bag taxidermy ramps offal kale
					chips activated charcoal portland vice actually meggings. Tbh jianbing air plant 8-bit
					street art, literally locavore. Tattooed cray literally try-hard vegan viral pok pok.
					Fixie tattooed post-ironic craft beer chicharrones. Messenger bag copper mug meditation
					tacos church-key banh mi 3 wolf moon butcher brunch semiotics pour-over hoodie plaid
					ennui.
				</p>
			</div>
		</div>
	</div>
{/if}

<ul class="flex flex-wrap">
	{#each images as { image_small: { src, width, height, format }, name }, index}
		<button
			on:click={() => handleClick(name, index)}
			class="relative h-40vh flex-grow group bg-white p-0.5"
		>
			<h1
				class="font-medium text-lg text-black text-opacity-50 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 z-10"
			>
				{name}
			</h1>
			<img
				class="object-cover align-bottom max-h-full min-w-full group-hover:opacity-70 transition duration-200"
				alt="alt"
				loading="lazy"
				decoding="async"
				type="image/${format}"
				{src}
				{width}
				{height}
			/>
		</button>
	{/each}
	<ul class="last-list-elt" />
</ul>
