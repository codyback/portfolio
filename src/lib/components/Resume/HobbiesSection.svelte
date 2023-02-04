<script lang="ts">
	import type { Hobby } from '@prisma/client';
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	export let hobbies: Hobby[];
</script>

<section
	id="cvHobbies"
	class="mt-10 sm:mt-20"
>
	<SectionHeading heading="Hobbies" />

	<div class="pt-8">
		<p class="text-justify dark:text-neutral-300 text-neutral-500">
			I enjoy taking on challenging projects as an opportunity to learn and
			grow, and am dedicated to delivering high-quality work.
		</p>

		<div class="mt-6 font-bold flex-initial flex-wrap flex-row">
			{#each hobbies as hobby (hobby.id)}
				<span
					class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase"
				>
					{hobby.name}
				</span>
			{/each}
		</div>
	</div>
</section>
