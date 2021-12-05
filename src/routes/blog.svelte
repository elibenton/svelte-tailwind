<script context="module">
	export async function load({ fetch }) {
		const url = `/blog.json`;
		const res = await fetch(url);
		const { posts, tags } = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					posts,
					tags
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
	export const prerender = true; // Does this work on this page type?
</script>

<script>
	import { groups } from 'd3-array';
	import { format as date } from 'date-fns';
	import Fuse from 'fuse.js';
	import format from 'format-fuse.js';

	import Card from '../components/Card.svelte';
	import Magnify from '$lib/svgs/magnify.svelte';

	export let posts;

	let searching = false;
	let searchTerm = '';
	$: if (searching === false) {
		searchTerm = '';
	}

	const fuse = new Fuse(posts, {
		keys: ['name', { name: 'authors', weight: 2 }, { name: 'publishers', weight: 3 }],
		includeScore: true, // default: false
		threshold: 0.2, // default: 0.6
		includeMatches: true, // default: false
		ignoreLocation: true // default: false
		// isCaseSensitive: false,
		// shouldSort: true,
		// minMatchCharLength: 1,
		// findAllMatches: false,
		// location: 0,
		// distance: 100,
		// useExtendedSearch: false,
		// ignoreFieldNorm: false,
	});

	$: searchedList = format(fuse.search(searchTerm));
	$: groupedPosts =
		searchTerm.length === 0
			? groups(posts, ({ added }) => date(new Date(added), `MMMM yyyy`))
			: groups(searchedList, ({ added }) => date(new Date(added), `MMMM yyyy`));
</script>

<div
	class="flex flex-row-reverse sm:flex-row content-center fixed sm:sticky sm:top-0 pt-2 bg-white z-10"
>
	<button
		class="fixed sm:relative right-2 sm:py-2 sm:bg-white"
		on:click={() => (searching = !searching)}
	>
		<Magnify />
	</button>
	{#if searching}
		<input
			bind:value={searchTerm}
			class="flex-grow text-xl mx-1 sm:mx-4 sm:border-b border-black dark:border-white focus:outline-none no-apple-style"
			type="text"
			name="searchTerm"
			id="searchTerm"
			placeholder="search..."
			autofocus
		/>
	{/if}
</div>

<ul>
	{#if Array.from(groupedPosts).length === 0}
		<p class="pt-12 mx-1 sm:mx-10 my-4 sm:text-xl">
			There are no posts matching that term. <br />
			Please try another.
		</p>
	{/if}
	{#each Array.from(groupedPosts) as section}
		<!-- {#if !searching} -->
		<li
			class="sm:hidden font-medium text-xl pt-3 pb-1.5 mb-4 -mx-2 px-3 bg-white border-b border-black dark:border-white sticky top-0"
		>
			{section[0]}
		</li>
		<!-- {/if} -->
		<div class="flex">
			<li class="hidden sm:inline-block self-start sticky top-12 mt-2 vertical">
				{section[0]}
			</li>
			<div class="flex-grow sm:pl-3 sm:pr-5">
				{#each section[1] as post (post.id)}
					<Card {...post} />
				{/each}
			</div>
		</div>
	{/each}
</ul>
