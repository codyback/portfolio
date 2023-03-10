<script lang="ts">
  import { page } from '$app/stores';

  export let href: string;
  export let title: string;
  export let label: string;
</script>

<a
  {href}
  class="px-3 py-3 rounded-md hover:bg-neutral-200 dark:hover:bg-dark-700 leading-10"
  class:underline={$page.route.id?.startsWith(href)}
  {title}
  aria-label={title}
>
  {label}
</a>
