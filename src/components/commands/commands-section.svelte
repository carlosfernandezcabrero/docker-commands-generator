<script lang="ts">
  import type { CommandInterfaceWithId } from '$types'
  import CommandBox from './command-box.svelte'

  export let title: string
  export let data: CommandInterfaceWithId[]
</script>

<section>
  <h3 class="text-3xl border-b border-gray-300 mb-5">{title}</h3>

  <ul class="flex flex-col gap-y-5">
    {#each data as command}
      <CommandBox {...command} />
    {/each}
  </ul>
</section>
