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
</script>

<script>
	import { groups } from 'd3-array';
	import { format, parse } from 'date-fns';
	import Fuse from 'fuse.js';

	import Card from '../components/Card.svelte';
	import Tag from '../components/Tag.svelte';

	export let posts, tags;

	let initialPosts = posts.map(
		(post) =>
			new Object({
				item: {
					...post
				}
			})
	);

	let searching = false;
	let searchTerm = '';
	$: console.log(searchTerm);

	const fuse = new Fuse(posts, {
		isCaseSensitive: false,
		includeScore: true,
		shouldSort: true,
		// includeMatches: false,
		// findAllMatches: false,
		// minMatchCharLength: 1,
		// location: 0,
		// threshold: 0.6,
		// distance: 100,
		// useExtendedSearch: false,
		// ignoreLocation: false,
		// ignoreFieldNorm: false,
		keys: ['name', { name: 'authors', weight: 2 }]
	});

	$: searchedList = fuse.search(searchTerm);

	$: groupedPosts =
		searchTerm.length === 0
			? groups(initialPosts, ({ item }) => format(new Date(item.added), `MMMM yyyy`))
			: groups(searchedList, ({ item }) => format(new Date(item.added), `MMMM yyyy`));

	let selectedTags = new Set();

	function addStatus({ detail }) {
		if (selectedTags.has(detail)) {
			selectedTags.delete(detail);
		} else {
			selectedTags.add(detail);
		}
		filteredPosts = Array.from(posts).filter((post) => !selectedTags.has(post.type));
		console.log(selectedTags);
	}
</script>

<div class="sm:mt-6 sm:flex justify-between">
	<button on:click={() => (searching = !searching)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</button>
	{#if searching}
		<input
			bind:value={searchTerm}
			class="flex flex-grow border border-b border-black"
			type="text"
			name="searchTerm"
			id="searchTerm"
		/>
	{:else}
		<ul class="gap-x-1 gap-y-2 sm:flex">
			{#each Array.from(tags) as tag}
				<Tag on:status={addStatus} {tag} />
			{/each}
		</ul>
	{/if}
</div>

<ul class="sm:mt-6">
	{#each Array.from(groupedPosts) as section}
		<li
			class="sm:hidden font-semibold text-2xl pt-3 pb-1.5 mb-4 -mx-6 px-8 border-b-2 border-black dark:border-white sticky top-0 bg-beige"
		>
			{section[0]}
		</li>
		<div class="flex">
			<li class="hidden sm:inline-block self-start sticky-top mt-2 vertical">
				{section[0]}
			</li>
			<div class="flex-grow sm:pl-3 sm:pr-5">
				{#each section[1] as { item } (item.name)}
					<Card {...item} />
				{/each}
			</div>
		</div>
	{/each}
</ul>
