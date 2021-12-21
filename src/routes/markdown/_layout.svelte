<script context="module">
	import { Tag } from '../../components/Tag.svelte';
	export { Tag };
</script>

<script>
	export let title;
</script>

<svelte:head>
	<title>{title} | Eli B. Cohen</title>
</svelte:head>

<div>
	<h1>MD + SVELTE</h1>
	<slot />
</div>
