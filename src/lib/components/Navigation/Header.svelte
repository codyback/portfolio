<script lang="ts">
	import Hamburger from '@/lib/components/Navigation/Hamburger.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import NavLink from './NavLink.svelte';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleDarkModeToggle() {
		dispatch('theme', {
			darkMode,
		});
	}

	const links = [
		{
			href: '/about',
			title: 'About Page',
			label: 'About',
		},
		{
			href: '/projects',
			title: 'Projects Page',
			label: 'Projects',
		},
		{
			href: '/blog',
			title: 'Blog Page',
			label: 'Blog',
		},
		{
			href: '/resources',
			title: 'Resources Page',
			label: 'Resources',
		},
	];

	export let sidebar = false;
	export let darkMode = false;
</script>

<header class="flex justify-between items-center border-b z-20 relative">
	<div class="py-2">
		<a
			href="/"
			class="font-bold text-xl leading-10 tracking-tight"
			title="Homepage"
			aria-label="Homepage"
		>
			Cody Backus
		</a>
	</div>

	<div class="py-2 text-right w-fit">
		<nav
			class="py-2 px-4 tracking-wider hidden sm:inline text-neutral-800 dark:text-neutral-300"
		>
			{#each links as link}
				<NavLink
					href={link.href}
					title={link.title}
					label={link.label}
				/>
			{/each}
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
