<script lang="ts">
  import CommandsSection from '$components/commands/commands-section.svelte'
  import Layout from '$components/common/layout.svelte'
  import NavigationButton from '$components/common/navigation-button.svelte'
  import PreviousPage from '$components/icons/previous-page.svelte'
  import type { CommandInterfaceWithId } from '$types'
  import { fade } from 'svelte/transition'
  import { paramsStore } from '../../stores.js'

  export let data

  const goToHome = () => history.back()

  $: likedCommands = [...data.commands, ...data.snippets].filter(
    ({ id }: CommandInterfaceWithId) => $paramsStore.likedCommands.includes(id)
  )
  $: commandsFiltered = data.commands.filter(
    ({ id }: CommandInterfaceWithId) => !$paramsStore.likedCommands.includes(id)
  )
  $: snippetsFiltered = data.snippets.filter(
    ({ id }: CommandInterfaceWithId) => !$paramsStore.likedCommands.includes(id)
  )
</script>

<Layout title={data.containerName}>
  <div in:fade={{ delay: 200, duration: 250 }}>
    <div class="flex flex-col gap-y-12">
      <CommandsSection title="Favoritos" data={likedCommands} />
      <CommandsSection title="Comandos" data={commandsFiltered} />
      <CommandsSection title="Combinaciones" data={snippetsFiltered} />
    </div>

    <footer class="text-center mt-12 sticky bottom-7">
      <NavigationButton component={PreviousPage} onClick={goToHome} />
    </footer>
  </div>
</Layout>
