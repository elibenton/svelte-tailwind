<script>
	export let tag;
	let selected = true;
</script>

<li>
	<button
		on:click={() => (selected = !selected)}
		class={selected
			? `bg-black text-white rounded-2xl px-1.5 py-0.5`
			: `bg-beige text-black rounded-2xl  px-1.5 py-0.5`}
	>
		{tag}
	</button>
</li>
