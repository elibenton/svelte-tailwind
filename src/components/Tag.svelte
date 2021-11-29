<script>
	export let tag;
	let selected = true;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function select() {
		selected = !selected;
		dispatch('status', tag);
	}
</script>

<li>
	<button
		on:click={select}
		class={selected
			? `bg-black text-white rounded-2xl px-1.5 py-0.5 duration-150`
			: `bg-beige text-black rounded-2xl  px-1.5 py-0.5 duration-150`}
	>
		{tag}
	</button>
</li>
