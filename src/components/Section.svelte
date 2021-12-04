<script>
	import Card from './Card.svelte';
	export let section, selectedTags;
</script>

<li
	class="sm:hidden font-semibold text-2xl pt-3 pb-1.5 mb-4 -mx-6 px-8 border-b-2 border-black dark:border-white sticky top-0"
>
	{section[0]}
</li>
<div class="flex">
	<li class="hidden sm:inline-block self-start sticky-top mt-2 vertical">
		{section[0]}
	</li>
	<div class="flex-grow sm:pl-3 sm:pr-5">
		{#each section[1] as post}
			{#if selectedTags.has(post.type)}
				<Card {...post} />
			{/if}
		{/each}
	</div>
</div>
