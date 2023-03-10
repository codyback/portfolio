<script lang="ts">
  import Header from '@/lib/components/Navigation/Header.svelte';
  import Sidebar from '@/lib/components/Navigation/Sidebar.svelte';
  import Footer from '@/lib/components/Footer.svelte';
  import { browser } from '$app/environment';

  import '@/app.css';

  let open = false;
  let darkMode = true;

  type EventMap = {
    detail: {
      darkMode: boolean;
    };
  };

  function handleSwitchDarkMode(event: EventMap) {
    darkMode = event.detail.darkMode;

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }

  if (browser) {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      darkMode = true;
    } else {
      document.documentElement.classList.remove('dark');
      darkMode = false;
    }
  }
</script>

<svelte:head>
  <meta
    name="viewport"
    content="user-scalable=no, width=device-width, initial-scale=1.0"
  />
  <meta
    name="apple-mobile-web-app-capable"
    content="yes"
  />
</svelte:head>

<div
  class="px-4 sm:px-6 lg:px-8 dark:bg-dark-900"
  class:open
>
  <div>
    <Sidebar bind:open />
    <Header
      bind:sidebar={open}
      bind:darkMode
      on:theme={handleSwitchDarkMode}
    />
    <main class="mx-auto max-w-6xl min-h-screen sm:p-6">
      <slot />
    </main>
    <Footer />
  </div>
</div>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

  :global(html) {
    font-family: 'Inter', 'Lato', sans-serif;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  :global(body) {
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  :global(.text-shadow) {
    text-shadow: 2px 2px 2px #333;
  }

  .open {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
  }

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

  @keyframes -global-from-bottom {
    0% {
      transform: translateY(100vh);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
