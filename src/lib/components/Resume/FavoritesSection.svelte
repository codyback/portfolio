<script lang="ts">
	import type { Homepage } from '@prisma/client';

	export let homepage: Homepage;
</script>

<section
	id="cvFavorites"
	class="mt-10 sm:mt-14 text-sm font-bold uppercase dark:text-neutral-300"
>
	<div
		class="border-t-2 border-black dark:border-neutral-500 grid grid-cols-2 py-3"
	>
		<div class="col-span-1">Favorite Tech</div>
		<div class="col-span-1 text-right">
			<a
				href={homepage.favoriteTechURL}
				rel="noreferrer"
				target="_blank"
				class="hover:underline dark:hover:text-white hover:text-neutral-500"
			>
				{homepage?.favoriteTech}
			</a>
		</div>
	</div>
	<div
		class="border-t-2 border-black dark:border-neutral-500 grid grid-cols-2 py-3"
	>
		<div class="col-span-1">Learning</div>
		<div class="col-span-1 text-right">
			<a
				href={homepage?.currentlyLearningURL}
				rel="noreferrer"
				target="_blank"
				class="hover:underline dark:hover:text-white hover:text-neutral-500"
			>
				{homepage?.currentlyLearning}
			</a>
		</div>
	</div>
	<div
		class="border-t-2 border-b-2 border-black dark:border-neutral-500 grid grid-cols-2 py-3"
	>
		<div class="col-span-1">Reading</div>
		<div class="col-span-1 text-right">
			<a
				href={homepage?.currentlyReadingURL}
				rel="noreferrer"
				target="_blank"
				class="hover:underline dark:hover:text-white hover:text-neutral-500"
			>
				{homepage?.currentlyReading}
			</a>
		</div>
	</div>
	<div class="mt-10">
		<button
			class="py-3 w-full border-2 border-black dark:border-gray-500 dark:hover:border-gray-200 dark:text-white transition-all duration-300 dark:hover:text-black uppercase text-sm font-bold hover:bg-neutral-200"
			>Send Message</button
		>
	</div>
</section>
