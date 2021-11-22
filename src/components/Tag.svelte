<script>
	export let tag;
	let selected = true;
</script>

<li>
	<button
		on:click={(selected = !selected)}
		class={selected ? `bg-black text-white rounded-2xl` : `bg-beige text-black rounded-2xl`}
	>
		{tag}
	</button>
</li>
