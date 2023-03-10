<script lang="ts">
  import Saos from 'saos';
</script>

{#each Array(10) as _, i}
  <section class="sm:grid sm:grid-cols-3 sm:gap-20 sm:mt-10 mt-6">
    <div class="sm:col-span-1">
      <div class="lg:sticky lg:top-10 text-right">
        <Saos
          once
          animation={'from-left 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
        >
          <h1 class="text-3xl font-extrabold uppercase dark:text-dark-400">
            Testing {i}
          </h1>
          <span class="block sm:hidden relative max-w-full h-0.5 bg-dark-400" />
        </Saos>
      </div>
    </div>

    <div class="sm:col-span-2 mt-4 sm:mt-0">
      <Saos
        once
        animation={'from-right 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0) both'}
      >
        {#each Array(6) as _, i}
          <article>
            <a
              href="https://a.co/d/eIF5J5N"
              target="_blank"
              rel="noreferrer"
              class="font-bold text-xl dark:text-white text-black dark:hover:text-neutral-300 hover:underline "
            >
              Logitech MX Master 3 Mouse
            </a>
            <a
              href="https://a.co/d/eIF5J5N"
              class="group text-sky-400 transition duration-300"
            >
              Link
              <span
                class="block relative max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"
              />
            </a>
            <a
              class="group font-bold text-xl dark:text-white text-black transition-all duration-300 ease-in-out"
              href="/"
            >
              <span
                class="pb-1 bg-left-bottom bg-gradient-to-r from-sky-300 to-sky-300 dark:from-sky-700 dark:to-sky-700 bg-[length:0%_6px] bg-no-repeat group-hover:bg-[length:100%_6px] -z-10 transition-all duration-300 ease-out"
              >
                This text gets 'underlined' on hover
              </span>
            </a>
            <p class="mb-4 dark:text-neutral-300 text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a et
              illo porro quos aliquid
              <a
                class="group transition-all text-sky-500 hover:text-white duration-300 ease-in-out"
                href="/"
              >
                <span
                  class="bg-left-bottom p-0.5 bg-gradient-to-r rounded-md from-sky-500 to-sky-500 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:100%_100%] -z-10 transition-all duration-300 ease-out"
                >
                  This text gets 'underlined' on hover
                </span>
              </a>, nostrum laudantium fuga, maxime repellendus nemo fugiat
              culpa dolor natus odit perspiciatis? Obcaecati, necessitatibus!
            </p>
          </article>
        {/each}
      </Saos>
    </div>
  </section>
{/each}
