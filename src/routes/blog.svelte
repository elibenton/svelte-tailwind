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
	import format from 'date-fns/format';
	import Fuse from 'fuse.js';
	// import format from 'format-fuse.js'

	import Card from '../components/Card.svelte';
	// import Tag from '../components/Tag.svelte';
	import Magnify from '../lib/svgs/magnify.svelte';

	export let posts;
	// export let tags;

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
		keys: ['name', { name: 'authors', weight: 2 }],
		includeScore: true, // default: false
		threshold: 0.35, // default: 0.6
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

	$: searchedList = fuse.search(searchTerm);
	$: console.log('NEW LIST:', searchedList);
	$: console.log(
		'\nMATCHES: ',
		searchedList.map(({ matches }) => matches.map(({ value }) => value))
	);
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

<div class="sm:mt-6 sm:mb-1 sm:flex content-center sticky top-0 py-2 z-20">
	<button
		class="dark:bg-gray-900 bg-beige px-2 -mx-2 py-3 -my-2"
		on:click={() => (searching = !searching)}
	>
		<Magnify />
	</button>
	{#if searching}
		<input
			bind:value={searchTerm}
			class="flex flex-grow text-xl mx-4 -my-2 py-2 text-black dark:text-white border-b border-black dark:border-white bg-beige dark:bg-gray-900 focus:outline-none"
			type="text"
			name="searchTerm"
			id="searchTerm"
			placeholder="search..."
			autofocus
		/>
	{:else}
		<!-- <ul class="gap-x-1 gap-y-2 sm:flex">
			{#each Array.from(tags) as tag}
				<Tag on:status={addStatus} {tag} />
			{/each}
		</ul> -->
	{/if}
</div>

<ul>
	{#if Array.from(groupedPosts).length === 0}
		<p class="mx-10 my-4 text-xl">
			There are no posts matching that term. <br />
			Please try another.
		</p>
	{/if}
	{#each Array.from(groupedPosts) as section}
		<li
			class="sm:hidden font-semibold text-2xl pt-3 pb-1.5 mb-4 -mx-6 px-8 border-b-2 border-black dark:border-white sticky -top-12 bg-beige"
		>
			{section[0]}
		</li>
		<div class="flex">
			<li class="hidden sm:inline-block self-start sticky top-12 mt-2 vertical">
				{section[0]}
			</li>
			<div class="flex-grow sm:pl-3 sm:pr-5">
				{#each section[1] as { item: { name, authors, publishers, date, type, link }, matches } (name)}
					<Card {name} {authors} {publishers} {date} {type} {link} {searchTerm} />
				{/each}
			</div>
		</div>
	{/each}
</ul>
