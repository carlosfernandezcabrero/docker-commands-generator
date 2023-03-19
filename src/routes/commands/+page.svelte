<script>
  import Command from '$components/command.svelte'
  import NavigationButton from '$components/common/navigation-button.svelte'
  import PreviousPage from '$components/icons/previous-page.svelte'
  import ArrowRightNarrow from '$components/icons/arrow-right-narrow.svelte'
  import { fade } from 'svelte/transition'

  export let data

  const goToHome = () => history.back()
</script>

<section in:fade={{ delay: 200, duration: 250 }}>
  <ul class="flex flex-col gap-y-5">
    {#each data.commands as { command, description }}
      <li>
        <h3 class="mb-1 flex items-center gap-x-2">
          <ArrowRightNarrow height="h-6" width="w-6" />{description}
        </h3>
        <Command textToCopy={command}>{command}</Command>
      </li>
    {/each}
  </ul>

  <footer class="text-center mt-12 sticky bottom-7">
    <NavigationButton component={PreviousPage} onClick={goToHome} />
  </footer>
</section>
