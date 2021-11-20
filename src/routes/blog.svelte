<script context="module">
	export async function load({ fetch }) {
		const url = `/blog.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				status: res.status,
				props: {
					posts: await res.json()
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
	import Months from '../components/Months.svelte';
	export let posts;
</script>

<ul class="sm:mt-6">
	{#each Array.from(posts) as month}<Months {month} />{/each}
</ul>
