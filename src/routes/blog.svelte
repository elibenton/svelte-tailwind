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
	export let posts;
</script>

<ul>
	{#each Array.from(posts) as month}
		<li class="font-semibold text-2xl pt-6 pb-2">{month[0]}</li>
		{#each month[1] as { name, authors, type, link, date, added, publisher, summary }}
			<div class="flex justify-between">
				<a href={link}>{name}</a>
				<p class="italic">
					{#each authors as author, index}{author}{#if authors.length - 1 != index}&nbsp;&bullet;&nbsp;{/if}{/each}
				</p>
			</div>
		{/each}
	{/each}
</ul>
