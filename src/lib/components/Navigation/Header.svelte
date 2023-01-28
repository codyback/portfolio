<script>
	import Hamburger from '@/lib/components/Navigation/Hamburger.svelte';
	import { page } from '$app/stores';

	export let sidebar = false;
</script>

<header class="flex justify-between border-b z-20 relative">
	<div class="py-2">
		<a
			href="/"
			class="font-bold text-xl leading-10 tracking-tight"
		>
			Cody Backus
		</a>
	</div>

	<div class="py-2 text-right w-fit">
		<nav class="py-2 tracking-wider hidden sm:inline text-neutral-800">
			<a
				href="/about"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 leading-10"
				class:underline={$page.route.id?.startsWith('/about')}
			>
				About
			</a>
			<a
				href="/projects"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 leading-10"
				class:underline={$page.route.id?.startsWith('/projects')}
			>
				Projects
			</a>
			<a
				href="/blog"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 leading-10"
				class:underline={$page.route.id?.startsWith('/blog')}
			>
				Blog
			</a>
			<a
				href="/resources"
				class="px-2 py-3 rounded-md hover:bg-neutral-200 leading-10"
				class:underline={$page.route.id?.startsWith('/resources')}
			>
				Resources
			</a>
		</nav>
		<img
			class="h-10 w-10 rounded-full bg-slate-500 hidden sm:inline-block"
			src=""
			alt=""
		/>
		<Hamburger bind:open={sidebar} />
	</div>
</header>
