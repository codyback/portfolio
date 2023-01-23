<script lang="ts">
	import type { Hobby } from "@prisma/client";
  import Saos from "saos";
  
  export let hobbies: Hobby[];
</script>

<Saos once animation="{"from-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
  <section id="cvHobbies">
    <div class="mt-10 border-b-2 border-black pb-3">
      <h3 class="uppercase text-2xl font-bold text-right">Hobbies</h3>
    </div>

    <div class="border-t-4 border-black mt-0.5 pt-8">
      <p class="text-justify text-neutral-500">
        I enjoy taking on challenging projects as an opportunity to learn and grow, and am dedicated to delivering high-quality work.
      </p>

      <div class="mt-6 font-bold flex-initial flex-wrap flex-row">
        {#each hobbies as hobby (hobby.id)}
          <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">
            {hobby.name}
          </span> 
        {/each}
      </div>
    </div>
  </section>
</Saos>
