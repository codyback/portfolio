<script lang="ts">
  import Saos from 'saos';
  import { browser } from '$app/environment';

  import type { PageData } from './$types';

  let gridMode: boolean;

  if (browser) {
    gridMode = localStorage.gridMode === 'grid';
  }

  function switchMode(mode: 'grid' | 'list') {
    localStorage.setItem('gridMode', mode);
    gridMode = mode === 'grid';
  }

  export let data: PageData;
  let hoveredProject = data.projects[0];
</script>

<div class="mt-6 hidden lg:flex items-center pb-4">
  <button
    class="px-3 py-2 hover:bg-neutral-200 dark:hover:bg-dark-700 rounded-lg"
    class:dark:text-dark-400={gridMode}
    class:font-extrabold={gridMode}
    on:click={() => switchMode('grid')}
  >
    Grid View
  </button>
  <span class="px-2">/</span>
  <button
    class="px-3 py-2 hover:bg-neutral-200 dark:hover:bg-dark-700 rounded-lg"
    class:dark:text-dark-400={!gridMode}
    class:font-extrabold={!gridMode}
    on:click={() => switchMode('list')}
  >
    List View
  </button>
</div>

{#if gridMode}
  <div class="sm:grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-5 mt-4 sm:mt-0">
    {#each data.projects as project}
      <div class="mt-4 sm:mt-0">
        <Saos
          once
          animation={'from-bottom 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
        >
          <div
            class="relative overflow-hidden group rounded-lg shadow-lg bg-cover sm:hover:scale-110 hover:filter hover:bg-blend-darken hover:contrast-100 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <a
              href={`/projects/${project.slug}`}
              title={project.title}
              aria-label={project.title}
            >
              <img
                class="object-cover w-full h-48 group-hover:scale-110 transition-all duration-1000"
                src={project.imageURL}
                alt={`${project.title} cover`}
              />
              <div
                class="absolute top-0 left-0 w-full h-48 px-6 py-4 group-hover:backdrop-brightness-50 group-hover:backdrop-blur-sm transition-all duration-500"
              >
                <h4
                  class="mb-3 text-xl text-center text-shadow sm:opacity-0 group-hover:opacity-100 font-semibold tracking-tight text-white transition-all duration-300"
                >
                  {project.title}
                </h4>
                <p
                  class="leading-normal flex flex-col justify-end align-bottom text-shadow text-center h-28 opacity-0 group-hover:opacity-100 transition-all duration-300 text-neutral-100"
                >
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        </Saos>
      </div>
    {/each}
  </div>
{:else}
  <div
    class="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20"
  >
    <Saos
      once
      animation={'from-left 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
    >
      <div class="p-2 bg-neutral-100 dark:bg-dark-700 rounded-lg">
        {#each data.projects as project}
          <div class="w-full">
            <a
              class="px-3 py-1 block font-semibold rounded-md hover:bg-neutral-200 dark:hover:bg-dark-600 leading-10"
              class:bg-neutral-200={hoveredProject.slug === project.slug}
              class:dark:bg-dark-600={hoveredProject.slug === project.slug}
              href={`projects/${project.slug}`}
              title={project.title}
              aria-label={project.title}
              on:mouseover={() => (hoveredProject = project)}
              on:focus={() => (hoveredProject = project)}
            >
              {project.title}
            </a>
          </div>
        {/each}
      </div>
    </Saos>
    <div class="col-span-2">
      <Saos
        once
        animation={'from-right 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
      >
        <div class="w-full p-4 bg-neutral-100 dark:bg-dark-700 rounded-lg">
          <div class="pb-4 text-lg text-justify font-semibold">
            {hoveredProject.description}
          </div>
          <img
            src={hoveredProject.imageURL}
            alt={`${hoveredProject.title} cover`}
            class="w-full h-full rounded-lg"
          />
        </div>
      </Saos>
    </div>
  </div>
{/if}
