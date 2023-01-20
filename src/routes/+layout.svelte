<script>
  import Header from '@/lib/components/Header.svelte';
  import Sidebar from '@/lib/components/Navigation/Sidebar.svelte';
  import Footer from '@/lib/components/Footer.svelte';
  import "@/app.css";

  let open = false
</script>

<div class="px-4 sm:px-6 lg:px-8" class:open>
  <div>
    <Sidebar bind:open />
    <Header bind:sidebar={open} />
    <main class="mx-auto max-w-5xl min-h-screen p-6">
      <slot></slot>
    </main>
    <Footer />
  </div>
</div>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,400;1,700;1,800&display=swap');

  :global(body) {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
  }

  .open {
    position:fixed;
    overflow: hidden;
  }
</style>
