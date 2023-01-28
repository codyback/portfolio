<script lang="ts">
	import type { Skill } from '@prisma/client';

	export let skills: Skill[];
</script>

<section
	id="cvSkills"
	class="sm:col-span-1 mt-10 sm:mt-20"
>
	<div class="border-b-2 border-black pb-3">
		<h3 class="uppercase text-2xl font-bold text-right">Skills</h3>
	</div>

	<div class="border-t-4 border-black mt-0.5 pt-8">
		<p class="text-justify text-neutral-500">
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
