<script>
	import Header from '@/lib/components/Navigation/Header.svelte';
	import Sidebar from '@/lib/components/Navigation/Sidebar.svelte';
	import Footer from '@/lib/components/Footer.svelte';
	import { siteBaseUrl } from '@/lib/meta';

	import '@/app.css';

	let open = false;
	export let data;
	let { title, image, excerpt } = data;
</script>

<svelte:head>
	<meta
		name="viewport"
		content="user-scalable=no, width=device-width, initial-scale=1.0"
	/>
	<meta
		name="apple-mobile-web-app-capable"
		content="yes"
	/>
	{#if title}
		<title>{title}</title>
		<meta
			property="og:title"
			content={title}
		/>
		<meta
			name="twitter:title"
			content={title}
		/>
	{/if}

	{#if excerpt}
		<meta
			name="description"
			content={excerpt}
		/>
		<meta
			property="og:description"
			content={excerpt}
		/>
		<meta
			name="twitter:description"
			content={excerpt}
		/>
	{/if}

	{#if image}
		<meta
			property="og:image"
			content="{siteBaseUrl}/images/{image.path}/{image.filename}.png"
		/>
		<meta
			name="twitter:image"
			content="{siteBaseUrl}/images/{image.path}/{image.filename}.png"
		/>
	{/if}
</svelte:head>

<div
	class="px-4 sm:px-6 lg:px-8"
	class:open
>
	<div>
		<Sidebar bind:open />
		<Header bind:sidebar={open} />
		<main class="mx-auto max-w-6xl min-h-screen sm:p-6">
			<article id="markdown-content">
				{#if title}
					<div class="header">
						<h1>{title}</h1>
					</div>
				{/if}

				{#if image}
					<div class="cover-image">
						<img
							src={image.src}
							alt="Cover"
						/>
					</div>
				{/if}

				<div class="content">
					<slot />
				</div>
			</article>
		</main>
		<Footer />
	</div>
</div>
