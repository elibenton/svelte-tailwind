<script>
	import { cubicOut } from 'svelte/easing';
	import { slide, fade } from 'svelte/transition';
	import Link from '../lib/svgs/link.svelte';
	// import * as api from '$lib/api';

	export let name, authors, publishers, date, type, link;

	let open = false;

	// 	async function updateLikes(page_id) {
	// 		api.patch(`pages/${page_id}`, { properties: { Likes: { number: likes + 1 } } });
	// 	}
	//
</script>

<div class="mb-4 sm:mb-1 group">
	<div
		on:click={() => (open = !open)}
		class="sm:flex sm:flex-row justify-between cursor-pointer mt-1 mb-2 mx-1 sm:border-b border-transparent group-hover:border-black dark:group-hover:border-white"
	>
		<div>
			<p class="font-semibold">
				{#if typeof name[0] === 'object'}
					{#each name as { matches, text }}
						{#if matches && text.length > 3}
							<mark>{text}</mark>
						{:else}
							{text}
						{/if}
					{/each}
				{:else}
					{name}
				{/if}
			</p>
			{#if authors}
				<p>
					{#if typeof authors[0] === 'object'}
						{#each authors as { matches, text }}
							{#if matches && text.length > 3}
								<mark>{text}</mark>
							{:else}
								{text}
							{/if}
						{/each}
					{:else}
						{#each authors as author, index}
							{#if authors.length - 1 != index}
								{author},&nbsp;
							{:else}
								{author}
							{/if}
						{/each}
					{/if}
					-
					<i>
						{#if typeof publishers[0] === 'object'}
							{#each publishers as { matches, text }}
								{#if matches && text.length > 2}
									<mark>{text}</mark>
								{:else}
									{text}
								{/if}
							{/each}
						{:else}
							{#each publishers as publisher, index}
								{#if publishers.length - 1 != index}
									{publisher},&nbsp;
								{:else}
									{publisher}
								{/if}
							{/each}
						{/if}
					</i>
				</p>
			{/if}
		</div>
		<div class="flex gap-x-2 self-end">
			{#if open}
				<button in:fade>
					{#if link}
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="flex gap-x-1 items-center"
							href={link}
						>
							Link <Link />
						</a>
					{/if}
				</button>
			{:else}
				<p in:fade>{type}&nbsp;&bullet;&nbsp;{date}</p>
				<!-- <button on:click={() => (liked = !liked)}>
				<Heart />
			</button>
			<p>{likes}</p> -->
			{/if}
		</div>
	</div>

	{#if open}
		<div class="mb-5 mt-1 mx-1.5 space-y-5" transition:slide={{ duration: 400, easing: cubicOut }}>
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
		</div>
	{/if}
</div>
