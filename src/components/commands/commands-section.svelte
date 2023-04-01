<script lang="ts">
  import type { CommandInterface } from '$types'
  import CommandBox from './command-box.svelte'

  export let title: string
  export let data: CommandInterface[]
</script>

<section>
  <h3 class="text-3xl border-b border-gray-300 mb-5">{title}</h3>

  <ul class="flex flex-col gap-y-5">
    {#each data as { command, description }}
      <CommandBox {command} {description} />
    {/each}
  </ul>
</section>
