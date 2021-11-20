<script>
	import { cubicOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	export let name, authors, publishers, date, type, link;
	export let open = false;
	export let liked = false;

	async function updateLikes() {
		await patch(`https://api.notion.com/v1/databases/${import.meta.env.VITE_NOTION_LIST_ID}`, {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
				'Notion-Version': '2021-08-16',
				'Content-Type': 'application/json',
				mode: 'no-cors'
			},
			body: JSON.stringify({
				title: {
					text: {
						title: 'Media'
					}
				},
				properties: {
					Likes: 1
				}
			})
		});
	}
</script>

<div class="mb-4 sm:mb-1 group">
	<div
		on:click={() => (open = !open)}
		class="sm:flex sm:flex-row justify-between cursor-pointer mt-1 mb-2 mx-1.5 sm:border-b border-transparent group-hover:border-black dark:group-hover:border-white"
	>
		<div>
			<p class="font-semibold">{name}</p>
			<p>
				{#each authors as author, index}
					{author}
					{#if authors.length - 1 != index}
						&bullet;&nbsp;
					{/if}
				{/each}
				<span class="hidden sm:inline-block italic">
					,&nbsp;
					{#each publishers as publisher, index}
						{publisher}
						{#if publishers.length - 1 != index}
							&bullet;&nbsp;
						{/if}
					{/each}
				</span>
			</p>
		</div>
		<div class="flex gap-x-2 self-end">
			<p>{type}&nbsp;&bullet;&nbsp;{date}</p>
			<button on:click={updateLikes}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill={liked ? `curentColor` : `none`}
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<div class="mb-5 mt-1 mx-1.5 space-y-5" transition:slide={{ duration: 500, easing: cubicOut }}>
			<h1>
				I'm baby venmo unicorn lo-fi shaman bitters 8-bit plaid chambray try-hard hammock
				chicharrones enamel pin deep v. Swag scenester messenger bag taxidermy ramps offal kale
				chips activated charcoal portland vice actually meggings. Tbh jianbing air plant 8-bit
				street art, literally locavore. Tattooed cray literally try-hard vegan viral pok pok. Fixie
				tattooed post-ironic craft beer chicharrones. Messenger bag copper mug meditation tacos
				church-key banh mi 3 wolf moon butcher brunch semiotics pour-over hoodie plaid ennui.
				<br /> <br />
				Pop-up hell of pug waistcoat pinterest, disrupt portland green juice umami shaman pork belly
				crucifix wolf brooklyn. Knausgaard health goth vice poutine cronut organic gluten-free fashion
				axe. Fashion axe hashtag helvetica hot chicken swag. Asymmetrical edison bulb yr chartreuse truffaut
				ugh kombucha kogi, organic stumptown cornhole YOLO leggings enamel pin mixtape. Marfa pabst truffaut
				affogato kitsch.
			</h1>
			<button
				class="bg-gray-900 hover:bg-gray-700 hover:ring-white rounded-md text-white px-2 py-1 text-xs"
			>
				<a target="_blank" rel="noopener noreferrer" class="flex gap-x-1" href={link}>
					READ MORE
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						/>
					</svg>
				</a>
			</button>
		</div>
	{:else}
		<span />
	{/if}
</div>
