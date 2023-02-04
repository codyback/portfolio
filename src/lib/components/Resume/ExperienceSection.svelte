<script lang="ts">
	import type {
		Experience,
		ExperienceResponsibility,
		ExperienceProject,
	} from '@prisma/client';
	import { getExperienceDateRange } from '$lib/utils/DateUtils';
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	type ExperienceWithRelations = Experience & {
		responsibilities: ExperienceResponsibility[];
		projects: ExperienceProject[];
	};

	export let experiences: ExperienceWithRelations[];
</script>

<section
	id="cvExperiences"
	class="mt-10 lg:mt-20"
>
	<SectionHeading heading="Experience" />

	<div class="pt-8">
		{#each experiences as experience, i}
			<div>
				<div class="sm:grid sm:grid-cols-2 items-center font-bold">
					<div class="sm:col-span-1 text-lg leading-none">
						{experience.company}
					</div>
					<div class="sm:col-span-1 sm:text-right sm:pt-0 pt-4">
						{getExperienceDateRange(experience.startDate, experience.endDate)}
						<br />
						{experience.position}
					</div>
				</div>

				{#if experience.description}
					<p class="pt-4 text-neutral-500 dark:text-neutral-300">
						{experience.description}
					</p>
				{/if}

				{#if experience.responsibilities.length !== 0}
					<ul class="pt-4 list-disc text-neutral-500 dark:text-neutral-300">
						Responsibilities include:
						{#each experience.responsibilities as responsibility}
							<li class="ml-4">
								{responsibility.description}
							</li>
						{/each}
					</ul>
				{/if}

				{#if experience.projects.length !== 0}
					<ul class="pt-4 list-disc text-neutral-500 dark:text-neutral-300">
						Projects worked on:
						{#each experience.projects as project}
							<li class="ml-4">
								{#if project.url}
									<a
										href={project.url}
										class="hover:text-black dark:hover:text-white underline font-bold"
										>{project.name}</a
									>: {project.description}
								{:else}
									<span class="font-bold">{project.name}</span>: {project.description}
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			{#if i + 1 !== experiences.length}
				<hr class="my-8" />
			{/if}
		{/each}
	</div>
</section>
