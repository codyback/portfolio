<script lang="ts">
	import Hamburger from '@/lib/components/Navigation/Hamburger.svelte';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const dispatch = createEventDispatcher();

	function handleDarkModeToggle() {
		dispatch('theme', {
			darkMode,
		});
	}

	export let sidebar = false;
	export let darkMode = false;
</script>

<header class="flex justify-between items-center border-b z-20 relative">
	<div class="py-2">
		<a
			href="/"
			class="font-bold text-xl leading-10 tracking-tight"
		>
			Cody Backus
		</a>
	</div>

	<div class="py-2 text-right w-fit">
		<nav
			class="py-2 px-4 tracking-wider hidden sm:inline text-neutral-800 dark:text-neutral-300"
		>
			<a
				href="/about"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 dark:hover:bg-dark-700 leading-10"
				class:underline={$page.route.id?.startsWith('/about')}
			>
				About
			</a>
			<a
				href="/projects"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 dark:hover:bg-dark-700 leading-10"
				class:underline={$page.route.id?.startsWith('/projects')}
			>
				Projects
			</a>
			<a
				href="/blog"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 dark:hover:bg-dark-700 leading-10"
				class:underline={$page.route.id?.startsWith('/blog')}
			>
				Blog
			</a>
			<a
				href="/resources"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 dark:hover:bg-dark-700 leading-10"
				class:underline={$page.route.id?.startsWith('/resources')}
			>
				Resources
			</a>
		</nav>
		<div class="flex sm:inline-block justify-center align-middle items-center">
			<ThemeToggle
				bind:darkMode
				on:theme={handleDarkModeToggle}
			/>
			<Hamburger bind:open={sidebar} />
		</div>
	</div>
</header>
