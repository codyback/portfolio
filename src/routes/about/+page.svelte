<script lang="ts">
	import Saos from 'saos';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.about}
	<div class="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
		<div>
			<Saos
				once
				animation={'from-left 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
			>
				<section
					id="aboutGoals"
					class="mt-10 text-sm font-bold uppercase"
				>
					<img
						src={data.about.imageUrl}
						alt="headshot of Cody Backus"
						class="h-96 w-full rounded-md bg-gray-500"
					/>
					<h1 class="text-2xl text-right mt-10">2023 Goals</h1>
					{#each data.about.goals as goal, i}
						<div
							class="border-t-2 border-black grid grid-cols-2 py-3"
							class:border-b-2={i + 1 === data.about.goals.length}
						>
							<div class="col-span-1">{goal.name}</div>
							<div class="col-span-1 text-right">{goal.goalPost}</div>
						</div>
					{/each}
				</section>
			</Saos>
		</div>
		<div class="mt-6 lg:col-span-2">
			<Saos
				once
				animation={'from-right 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
			>
				<section id="aboutMe">
					{#each data.about.paragraphs as paragraph}
						<p class="my-4">{paragraph.description}</p>
					{/each}
				</section>
			</Saos>
		</div>
	</div>
{/if}
