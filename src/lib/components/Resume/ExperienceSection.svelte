<script lang="ts">
	import type {
		Experience,
		ExperienceResponsibility,
		ExperienceProject,
	} from '@prisma/client';
	import { getExperienceDateRange } from '@/lib/utils/DateUtils';

	type ExperienceWithRelations = Experience & {
		responsibilities: ExperienceResponsibility[];
		projects: ExperienceProject[];
	};

	export let experiences: ExperienceWithRelations[];
</script>

<section id="cvExperiences">
	<div class="mt-10 sm:mt-20 border-b-2 border-black pb-3">
		<h3 class="uppercase text-2xl font-bold text-right">Experience</h3>
	</div>

	<div class="border-t-4 border-black mt-0.5 pt-8">
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
					<p class="pt-4 text-neutral-500">
						{experience.description}
					</p>
				{/if}

				{#if experience.responsibilities.length !== 0}
					<ul class="pt-4 list-disc text-neutral-500">
						Responsibilities include:
						{#each experience.responsibilities as responsibility}
							<li class="ml-4">
								{responsibility.description}
							</li>
						{/each}
					</ul>
				{/if}

				{#if experience.projects.length !== 0}
					<ul class="pt-4 list-disc text-neutral-500">
						Projects worked on:
						{#each experience.projects as project}
							<li class="ml-4">
								{#if project.url}
									<a
										href={project.url}
										class="hover:text-black underline font-bold"
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
