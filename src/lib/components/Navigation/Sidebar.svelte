<script lang="ts">
  import { fly } from 'svelte/transition';

  function toggleDrawer() {
    open = !open;
  }

  const links = [
    {
      href: '/about',
      title: 'About Page',
      label: 'About',
    },
    // {
    //   href: '/projects',
    //   title: 'Projects Page',
    //   label: 'Projects',
    // },
    // {
    //   href: '/blog',
    //   title: 'Blog Page',
    //   label: 'Blog',
    // },
    // {
    //   href: '/resources',
    //   title: 'Resources Page',
    //   label: 'Resources',
    // },
  ];

  export let open = false;
</script>

{#if open}
  <aside
    transition:fly={{ x: 640, opacity: 1 }}
    class="absolute w-full h-full z-10 bg-gray-200 dark:bg-dark-700 dark:text-neutral-300 dark:border-none border-l-2 shadow-lg"
    class:open
  >
    <nav class="p-4 mt-14 text-xl">
      {#each links as link}
        <a
          href={link.href}
          class="px-4 py-2 block rounded-md hover:bg-slate-200 dark:hover:bg-dark-900 leading-10 uppercase"
          title={link.title}
          aria-label={link.title}
          on:click={toggleDrawer}
        >
          {link.label}
        </a>
      {/each}
    </nav>
  </aside>
{/if}

<style>
  aside {
    position: fixed;
    top: 0;
    right: 0;
    transition: right 0.3s ease-in-out;
  }

  .open {
    right: 0;
  }
</style>
