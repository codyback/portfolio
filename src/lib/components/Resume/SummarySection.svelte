<script lang="ts">
  import Saos from "saos";

  export let description: string
</script>

<Saos once animation={"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}>
  <section id="cvSummary" class="mt-10 sm:mt-20">
    <img src="" alt="Cody Backus" class="rounded-sm sm:rounded-full h-48 sm:w-48 w-full bg-gray-500" />
    <div class="mt-4 text-xl font-bold">Cody Backus</div>
    <p class="mt-10 text-neutral-500 text-justify">
      { description }
    </p>
  </section>
</Saos>
