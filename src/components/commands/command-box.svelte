<script lang="ts">
  import Command from '$components/commands/command.svelte'
  import ArrowRightNarrow from '$components/icons/arrow-right-narrow.svelte'
  import { paramsStore, type Params } from '../../stores'

  export let command: string
  export let description: string
  export let id: string

  function handleLike() {
    if ($paramsStore.likedCommands.includes(id)) {
      paramsStore.update((params: Params) => ({
        ...params,
        likedCommands: params.likedCommands.filter(
          (likedId: string) => likedId !== id
        )
      }))
    } else {
      paramsStore.update((params: Params) => ({
        ...params,
        likedCommands: [...params.likedCommands, id]
      }))
    }
  }
</script>

<li>
  <h3 class="mb-1 flex items-center gap-x-2">
    <ArrowRightNarrow height="h-6" width="w-6" />
    <span class="flex-1">{description}</span>
  </h3>
  <Command textToCopy={command} {handleLike}>{command}</Command>
</li>
