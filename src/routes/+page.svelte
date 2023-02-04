<script lang="ts">
	import Saos from 'saos';
	import SummarySection from '@/lib/components/Resume/SummarySection.svelte';
	import FavoritesSection from '@/lib/components/Resume/FavoritesSection.svelte';
	import ExperienceSection from '@/lib/components/Resume/ExperienceSection.svelte';
	import SkillsSection from '@/lib/components/Resume/SkillsSection.svelte';
	import CertificatesSection from '@/lib/components/Resume/CertificatesSection.svelte';
	import HobbiesSection from '@/lib/components/Resume/HobbiesSection.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.homepage}
	<Saos
		once
		animation={'from-left 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
	>
		<section class="mt-10">
			<h1 class="uppercase sm:text-5xl text-4xl dark:text-dark-600">
				{data.homepage?.profession}
			</h1>
			<h2 class="uppercase font-bold sm:text-6xl text-4xl dark:text-dark-400">
				{data.homepage?.tagline}
			</h2>
		</section>
	</Saos>

	<div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-20">
		<div class="lg:col-span-1 sm:col-span-2">
			<Saos
				once
				animation={'from-left 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
			>
				<SummarySection description={data.homepage.description} />
			</Saos>

			<Saos
				once
				animation={'from-left 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
			>
				<FavoritesSection homepage={data.homepage} />
			</Saos>
		</div>

		<div class="sm:col-span-2">
			{#if data.homepage.experiences.length !== 0}
				<Saos
					once
					animation={'from-right 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
				>
					<ExperienceSection experiences={data.homepage.experiences} />
				</Saos>
			{/if}

			<div class="sm:grid sm:grid-cols-2 sm:gap-10">
				{#if data.homepage.skills.length !== 0}
					<Saos
						once
						animation={'from-right 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
					>
						<SkillsSection skills={data.homepage.skills} />
					</Saos>
				{/if}

				<div class="sm:col-span-1 mt-10 sm:mt-20">
					{#if data.homepage.certifications.length !== 0}
						<Saos
							once
							animation={'from-right 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
						>
							<CertificatesSection
								certifications={data.homepage.certifications}
							/>
						</Saos>
					{/if}

					{#if data.homepage.hobbies.length !== 0}
						<Saos
							once
							animation={'from-right 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
						>
							<HobbiesSection hobbies={data.homepage.hobbies} />
						</Saos>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
