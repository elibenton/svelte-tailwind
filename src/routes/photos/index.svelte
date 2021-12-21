<script>
	import image_01 from '$images/image_1.jpg?w=700;1700&webp&meta';
	import image_02 from '$images/image_2.jpg?w=700;1700&webp&meta';
	import image_03 from '$images/image_3.jpg?w=700;1700&webp&meta';
	import image_04 from '$images/image_4.jpg?w=700;1700&webp&meta';
	import image_05 from '$images/image_5.jpg?w=700;1700&webp&meta';
	import image_06 from '$images/image_6.jpg?w=700;1700&webp&meta';
	import image_07 from '$images/image_7.jpg?w=700;1700&webp&meta';
	import image_08 from '$images/image_8.jpg?w=700;1700&webp&meta';
	import image_09 from '$images/image_9.jpg?w=700;1700&webp&meta';
	import image_10 from '$images/image_10.jpg?w=700;1700&webp&meta';
	import image_11 from '$images/image_11.jpg?w=700;1700&webp&meta';
	import image_12 from '$images/image_12.jpg?w=700;1700&webp&meta';
	import image_13 from '$images/image_13.jpg?w=700;1700&webp&meta';
	import image_14 from '$images/image_14.jpg?w=700;1700&webp&meta';
	import image_15 from '$images/image_15.jpg?w=700;1700&webp&meta';
	import image_16 from '$images/image_16.jpg?w=700;1700&webp&meta';
	import image_17 from '$images/image_17.jpg?w=700;1700&webp&meta';
	import image_18 from '$images/image_18.jpg?w=700;1700&webp&meta';
	import image_19 from '$images/image_19.jpg?w=700;1700&webp&meta';
	import image_20 from '$images/image_20.jpg?w=700;1700&webp&meta';
	import image_21 from '$images/image_21.jpg?w=700;1700&webp&meta';
	import image_22 from '$images/image_22.jpg?w=700;1700&webp&meta';
	import image_23 from '$images/image_23.jpg?w=700;1700&webp&meta';
	import image_24 from '$images/image_24.jpg?w=700;1700&webp&meta&rotate=270';
	import image_25 from '$images/image_25.jpg?w=700;1700&webp&meta';
	import image_26 from '$images/image_26.jpg?w=700;1700&webp&meta';
	import image_27 from '$images/image_27.jpg?w=700;1700&webp&meta';
	import image_28 from '$images/image_28.jpg?w=700;1700&webp&meta';
	import image_29 from '$images/image_29.jpg?w=700;1700&webp&meta';
	import image_30 from '$images/image_30.jpg?w=700;1700&webp&meta';
	import image_31 from '$images/image_31.jpg?w=700;1700&webp&meta';
	import image_32 from '$images/image_32.jpg?w=700;1700&webp&meta';
	import image_33 from '$images/image_33.jpg?w=700;1700&webp&meta';
	import image_34 from '$images/image_34.jpg?w=700;1700&webp&meta';
	import image_35 from '$images/image_35.jpg?w=700;1700&webp&meta';
	import image_36 from '$images/image_36.jpg?w=700;1700&webp&meta';
	import image_37 from '$images/image_37.jpg?w=700;1700&webp&meta';
	import image_38 from '$images/image_38.jpg?w=700;1700&webp&meta';
	import image_39 from '$images/image_39.jpg?w=700;1700&webp&meta';
	import image_40 from '$images/image_40.jpg?w=700;1700&webp&meta';
	import image_41 from '$images/image_41.jpg?w=700;1700&webp&meta';
	import image_42 from '$images/image_42.jpg?w=700;1700&webp&meta';
	import image_43 from '$images/image_43.jpg?w=700;1700&webp&meta&rotate=270';
	import image_44 from '$images/image_44.jpg?w=700;1700&webp&meta';
	import image_45 from '$images/image_45.jpg?w=700;1700&webp&meta';
	import image_46 from '$images/image_46.jpg?w=700;1700&webp&meta';
	import image_47 from '$images/image_47.jpg?w=700;1700&webp&meta';
	import image_48 from '$images/image_48.jpg?w=700;1700&webp&meta';
	import image_49 from '$images/image_49.jpg?w=700;1700&webp&meta';
	import image_50 from '$images/image_50.jpg?w=700;1700&webp&meta';
	import image_51 from '$images/image_51.jpg?w=700;1700&webp&meta';
	import image_52 from '$images/image_52.jpg?w=700;1700&webp&meta';
	import image_53 from '$images/image_53.jpg?w=700;1700&webp&meta';
	import image_54 from '$images/image_54.jpg?w=700;1700&webp&meta';
	import image_55 from '$images/image_55.jpg?w=700;1700&webp&meta';
	import image_56 from '$images/image_56.jpg?w=700;1700&webp&meta';
	import image_57 from '$images/image_57.jpg?w=700;1700&webp&meta';
	import image_58 from '$images/image_58.jpg?w=700;1700&webp&meta';
	import image_59 from '$images/image_59.jpg?w=700;1700&webp&meta';
	import image_60 from '$images/image_60.jpg?w=700;1700&webp&meta';
	import image_61 from '$images/image_61.jpg?w=700;1700&webp&meta';
	import image_62 from '$images/image_62.jpg?w=700;1700&webp&meta';
	import image_63 from '$images/image_63.jpg?w=700;1700&webp&meta';
	import image_64 from '$images/image_64.jpg?w=700;1700&webp&meta';
	import image_65 from '$images/image_65.jpg?w=700;1700&webp&meta';
	import image_66 from '$images/image_66.jpg?w=700;1700&webp&meta';

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
		{ name: 'Image 28', image_small: image_28[0], image_large: image_28[1] },
		{ name: 'Image 29', image_small: image_29[0], image_large: image_29[1] },
		{ name: 'Image 30', image_small: image_30[0], image_large: image_30[1] },
		{ name: 'Image 31', image_small: image_31[0], image_large: image_31[1] },
		{ name: 'Image 32', image_small: image_32[0], image_large: image_32[1] },
		{ name: 'Image 33', image_small: image_33[0], image_large: image_33[1] },
		{ name: 'Image 34', image_small: image_34[0], image_large: image_34[1] },
		{ name: 'Image 35', image_small: image_35[0], image_large: image_35[1] },
		{ name: 'Image 36', image_small: image_36[0], image_large: image_36[1] },
		{ name: 'Image 37', image_small: image_37[0], image_large: image_37[1] },
		{ name: 'Image 38', image_small: image_38[0], image_large: image_38[1] },
		{ name: 'Image 39', image_small: image_39[0], image_large: image_39[1] },
		{ name: 'Image 40', image_small: image_40[0], image_large: image_40[1] },
		{ name: 'Image 41', image_small: image_41[0], image_large: image_41[1] },
		{ name: 'Image 42', image_small: image_42[0], image_large: image_42[1] },
		{ name: 'Image 43', image_small: image_43[0], image_large: image_43[1] },
		{ name: 'Image 44', image_small: image_44[0], image_large: image_44[1] },
		{ name: 'Image 45', image_small: image_45[0], image_large: image_45[1] },
		{ name: 'Image 46', image_small: image_46[0], image_large: image_46[1] },
		{ name: 'Image 47', image_small: image_47[0], image_large: image_47[1] },
		{ name: 'Image 48', image_small: image_48[0], image_large: image_48[1] },
		{ name: 'Image 49', image_small: image_49[0], image_large: image_49[1] },
		{ name: 'Image 50', image_small: image_50[0], image_large: image_50[1] },
		{ name: 'Image 51', image_small: image_51[0], image_large: image_51[1] },
		{ name: 'Image 52', image_small: image_52[0], image_large: image_52[1] },
		{ name: 'Image 53', image_small: image_53[0], image_large: image_53[1] },
		{ name: 'Image 54', image_small: image_54[0], image_large: image_54[1] },
		{ name: 'Image 55', image_small: image_55[0], image_large: image_55[1] },
		{ name: 'Image 56', image_small: image_56[0], image_large: image_56[1] },
		{ name: 'Image 57', image_small: image_57[0], image_large: image_57[1] },
		{ name: 'Image 58', image_small: image_58[0], image_large: image_58[1] },
		{ name: 'Image 59', image_small: image_59[0], image_large: image_59[1] },
		{ name: 'Image 60', image_small: image_60[0], image_large: image_60[1] },
		{ name: 'Image 61', image_small: image_61[0], image_large: image_61[1] },
		{ name: 'Image 62', image_small: image_62[0], image_large: image_62[1] },
		{ name: 'Image 63', image_small: image_63[0], image_large: image_63[1] },
		{ name: 'Image 64', image_small: image_64[0], image_large: image_64[1] },
		{ name: 'Image 65', image_small: image_65[0], image_large: image_65[1] },
		{ name: 'Image 66', image_small: image_66[0], image_large: image_66[1] }
	];

	// console.log(images);

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
			width={overlayWidth}
			height={overlayHeight}
		/>
		<div class="w-48">
			<h1>{overlayName.toUpperCase()}</h1>
			<h2>LOCATION</h2>
			<h2>DATE</h2>
			<p>
				I'm baby venmo unicorn lo-fi shaman bitters 8-bit plaid chambray try-hard hammock
				chicharrones enamel pin deep v. Swag scenester messenger bag taxidermy ramps offal kale
				chips activated charcoal portland vice actually meggings. Tbh jianbing air plant 8-bit
				street art, literally locavore.
			</p>
		</div>
	</div>
{/if}

<ul class="flex flex-wrap">
	{#each images as { image_small: { src, width, height, format }, name }, index}
		<button
			on:click={() => handleClick(name, index)}
			class="relative h-45vh flex-grow group bg-white p-0.5"
		>
			<h1
				class="font-medium text-lg text-black text-opacity-50 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 z-10"
			>
				{name}
			</h1>
			<img
				class="object-cover align-bottom max-h-full min-w-full group-hover:opacity-70 transition duration-2004"
				alt="alt"
				loading="lazy"
				decoding="async"
				type="image/${format}"
				{src}
			/>
		</button>
	{/each}
	<ul class="last-list-elt" />
</ul>
