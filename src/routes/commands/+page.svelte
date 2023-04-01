<script>
  import CommandsSection from '$components/commands/commands-section.svelte'
  import Layout from '$components/common/layout.svelte'
  import NavigationButton from '$components/common/navigation-button.svelte'
  import PreviousPage from '$components/icons/previous-page.svelte'
  import { fade } from 'svelte/transition'

  export let data

  const goToHome = () => history.back()
</script>

<Layout title={data.containerName}>
  <div in:fade={{ delay: 200, duration: 250 }}>
    <div class="flex flex-col gap-y-12">
      <CommandsSection title="Comandos" data={data.commands} />
      <CommandsSection title="Combinaciones" data={data.snippets} />
    </div>

    <footer class="text-center mt-12 sticky bottom-7">
      <NavigationButton component={PreviousPage} onClick={goToHome} />
    </footer>
  </div>
</Layout>
