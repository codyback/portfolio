<script lang="ts">
	import type { Homepage } from "@prisma/client";
  import Saos from "saos";

  export let homepage: Homepage;
</script>

<Saos once animation="{"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
  <section id="cvFavorites" class="mt-10 sm:mt-14 text-sm font-bold uppercase">
    <div class="border-t-2 border-black grid grid-cols-2 py-3">
      <div class="col-span-1">Favorite Tech</div>
      <div class="col-span-1 text-right">
        <a href={homepage.favoriteTechURL} rel="noreferrer" target="_blank" class="hover:underline hover:text-neutral-500">
          { homepage?.favoriteTech }
        </a>
      </div>
    </div>
    <div class="border-t-2 border-black grid grid-cols-2 py-3">
      <div class="col-span-1">Currently Learning</div>
      <div class="col-span-1 text-right">
        <a href={homepage?.currentlyLearningURL} rel="noreferrer" target="_blank" class="hover:underline hover:text-neutral-500">
          { homepage?.currentlyLearning }
        </a>
      </div>
    </div>
    <div class="border-t-2 border-b-2 border-black grid grid-cols-2 py-3">
      <div class="col-span-1">Currently Reading</div>
      <div class="col-span-1 text-right">
        <a href={homepage?.currentlyReadingURL} rel="noreferrer" target="_blank" class="hover:underline hover:text-neutral-500">
          { homepage?.currentlyReading }
        </a>
      </div>
    </div>
    <div class="mt-10">
      <button class="py-3 w-full border-2 border-black uppercase text-sm font-bold hover:bg-neutral-200">Send Message</button>
    </div>
  </section>
</Saos>
