<script>
  import Hamburger from '@/lib/components/Navigation/Hamburger.svelte';

  export let sidebar = false;
</script>

<header class="flex justify-between border-b">
  <div class="py-2">
    <a href="/" class="font-bold tracking-wider leading-10">
      CODY BACKUS
    </a>
  </div>
  <nav class="py-2 tracking-wider hidden sm:inline">
    <a href="/about" class="px-2 py-3 rounded-md hover:bg-slate-200 leading-10">ABOUT</a>
    <a href="/projects" class="px-2 py-3 rounded-md hover:bg-slate-200 leading-10">PROJECTS</a>
    <a href="/blog" class="px-2 py-3 rounded-md hover:bg-slate-200 leading-10">BLOG</a>
    <a href="/resources" class="px-2 py-3 rounded-md hover:bg-slate-200 leading-10">RESOURCES</a>
  </nav>
  <div class="py-2 text-right w-fit">
    <img class="h-10 w-10 rounded-full bg-slate-500 hidden sm:inline-block" src="" alt="" />
    <Hamburger bind:open={sidebar} />
  </div>

</header>
