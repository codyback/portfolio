<script lang="ts">
	import type { Skill } from '@prisma/client';
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	export let skills: Skill[];
</script>

<section
	id="cvSkills"
	class="sm:col-span-1 mt-10 sm:mt-20"
>
	<SectionHeading heading="Skills" />

	<div class="pt-8">
		<p class="text-justify dark:text-neutral-300 text-neutral-500">
			Skills include proficiency in multiple programming languages, frameworks,
			and tools, with experience in web, mobile and data analysis.
		</p>

		<div class="mt-6 font-bold flex-initial flex-wrap flex-row">
			{#each skills as skill (skill.id)}
				<span
					class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase"
				>
					{skill.name}
				</span>
			{/each}
		</div>
	</div>
</section>
