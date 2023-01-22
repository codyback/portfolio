<script>
  import Header from '@/lib/components/Navigation/Header.svelte';
  import Sidebar from '@/lib/components/Navigation/Sidebar.svelte';
  import Footer from '@/lib/components/Footer.svelte';
  import "@/app.css";

  let open = false
</script>

<svelte:head>
  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
</svelte:head>

<div class="px-4 sm:px-6 lg:px-8" class:open>
  <div>
    <Sidebar bind:open />
    <Header bind:sidebar={open} />
    <main class="mx-auto max-w-6xl min-h-screen sm:p-6">
      <slot></slot>
    </main>
    <Footer />
  </div>
</div>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
  
  :global(html) {
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  :global(body) {
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  }

  .open {
    position:fixed;
    overflow: hidden;
    top: 0;
    right: 0;
  }

</style>
