<script lang="ts">
	import { fly } from 'svelte/transition';

	export let open = false;
</script>

{#if open}
	<aside
		transition:fly={{ x: 640, opacity: 1 }}
		class="absolute w-full h-full z-10 bg-gray-200 border-l-2 shadow-lg"
		class:open
	>
		<nav class="p-12 text-xl">
			<a
				href="/about"
				class="px-2 py-3 block rounded-md hover:bg-slate-200 leading-10"
				on:click={() => (open = !open)}>ABOUT</a
			>
			<a
				href="/projects"
				class="px-2 py-3 block rounded-md hover:bg-slate-200 leading-10"
				on:click={() => (open = !open)}>PROJECTS</a
			>
			<a
				href="/blog"
				class="px-2 py-3 block rounded-md hover:bg-slate-200 leading-10"
				on:click={() => (open = !open)}>BLOG</a
			>
			<a
				href="/resources"
				class="px-2 py-3 block rounded-md hover:bg-slate-200 leading-10"
				on:click={() => (open = !open)}>RESOURCES</a
			>
		</nav>
	</aside>
{/if}

<style>
	aside {
		position: fixed;
		top: 0;
		right: 0;
		transition: right 0.3s ease-in-out;
	}

	.open {
		right: 0;
	}
</style>
