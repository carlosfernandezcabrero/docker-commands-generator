<script>
  import CommandBox from '$components/commands/command-box.svelte'
  import Command from '$components/command.svelte'
  import NavigationButton from '$components/common/navigation-button.svelte'
  import PreviousPage from '$components/icons/previous-page.svelte'
  import { fade } from 'svelte/transition'

  export let data

  const goToHome = () => history.back()
</script>

<div in:fade={{ delay: 200, duration: 250 }}>
  <div class="flex flex-col gap-y-12">
    <section>
      <h3 class="text-3xl border-b border-gray-300 mb-5">Comandos</h3>

      <ul class="flex flex-col gap-y-5">
        {#each data.commands as { command, description }}
          <CommandBox {command} {description} />
        {/each}
      </ul>
    </section>

    <section>
      <h3 class="text-3xl border-b border-gray-300 mb-5">Combinaciones</h3>

      <ul class="flex flex-col gap-y-5">
        {#each data.snippets as { command, description }}
          <CommandBox {command} {description} />
        {/each}
      </ul>
    </section>
  </div>

  <footer class="text-center mt-12 sticky bottom-7">
    <NavigationButton component={PreviousPage} onClick={goToHome} />
  </footer>
</div>
