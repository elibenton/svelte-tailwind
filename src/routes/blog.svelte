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
	import Section from '../components/Section.svelte';
	import Tag from '../components/Tag.svelte';
	import visible from '../store';
	export let posts, tags;
	let tag;

	$: console.log($visible);
	$: $visible.concat(tag);
</script>

<ul class="sm:mt-6 sm:flex gap-x-1 gap-y-2">
	{#each Array.from(tags) as tag}
		<Tag bind:tag />
	{/each}
</ul>

<ul class="sm:mt-6">
	{#each Array.from(posts) as month}
		<Section {month} />
	{/each}
</ul>
