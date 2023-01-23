<script lang="ts">
  import Saos from "saos";
  import SummarySection from "@/lib/components/Resume/SummarySection.svelte";
  import FavoritesSection from "@/lib/components/Resume/FavoritesSection.svelte";
  import ExperienceSection from '@/lib/components/Resume/ExperienceSection.svelte';
  import SkillsSection from "@/lib/components/Resume/SkillsSection.svelte";
  import CertificatesSection from "@/lib/components/Resume/CertificatesSection.svelte";
  import HobbiesSection from "@/lib/components/Resume/HobbiesSection.svelte";
  
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.homepage}
  <Saos once animation={"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}>
    <section class="mt-10">
      <h1 class="uppercase sm:text-5xl text-4xl">{ data.homepage?.profession }</h1>
      <h2 class="uppercase font-bold sm:text-6xl text-4xl">{ data.homepage?.tagline }</h2>
    </section>
  </Saos>

  <div class="sm:grid sm:grid-cols-3 sm:gap-20">
    <div class="sm:col-span-1">
      <SummarySection description={data.homepage.description} />
      <FavoritesSection homepage={data.homepage} />
    </div>

    <div class="sm:col-span-2">
      {#if data.homepage.experiences.length !== 0}
        <ExperienceSection experiences={data.homepage.experiences} />
      {/if}

      <div class="sm:grid sm:grid-cols-2 sm:gap-10">
        {#if data.homepage.skills.length !== 0}
          <SkillsSection skills={data.homepage.skills} />
        {/if}

        <div class="sm:col-span-1 mt-10 sm:mt-20">
          {#if data.homepage.certifications.length !== 0}
            <CertificatesSection certifications={data.homepage.certifications} />
          {/if}

          {#if data.homepage.hobbies.length !== 0}
            <HobbiesSection hobbies={data.homepage.hobbies} />
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-from-right {
    0% {
      transform: rotateX(50deg) translateX(100vw) skewX(-50deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
</style>
