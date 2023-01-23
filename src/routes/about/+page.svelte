<script lang="ts">
  import Saos from "saos";

	import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.about}
  <div class="sm:grid sm:grid-cols-3 sm:gap-20">
    <div class="sm:col-span-1">
      <Saos once animation="{"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
        <section id="aboutGoals" class="mt-10 text-sm font-bold uppercase">
          <img src={data.about.imageUrl} alt="headshot of Cody Backus" class="h-96 w-full rounded-md bg-gray-500" />
          <h1 class="text-2xl text-right mt-10">2023 Goals</h1>
          {#each data.about.goals as goal, i}
            <div class="border-t-2 border-black grid grid-cols-2 py-3" class:border-b-2={i + 1 === data.about.goals.length}>
              <div class="col-span-1">{goal.name}</div>
              <div class="col-span-1 text-right">{goal.goalPost}</div>
            </div>
          {/each}
        </section>
      </Saos>
    </div> 
    <div class="sm:col-span-2 mt-6">
      <Saos once animation="{"from-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
        <section id="aboutMe">
          {#each data.about.paragraphs as paragraph}
            <p class="my-4">{paragraph.description}</p>
          {/each}
        </section>
      </Saos>
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
