<script lang="ts">
  import Command from '$components/commands/command.svelte'
  import ArrowRightNarrow from '$components/icons/arrow-right-narrow.svelte'
  import { paramsStore, type Params } from '../../stores'

  export let command: string
  export let description: string
  export let id: string

  const isLiked = $paramsStore.likedCommands.includes(id)

  function handleLike() {
    paramsStore.update((params: Params) => ({
      ...params,
      likedCommands: isLiked
        ? params.likedCommands.filter((likedId: string) => likedId !== id)
        : [...params.likedCommands, id]
    }))

    localStorage.setItem('likedCommands', $paramsStore.likedCommands.join(','))
  }
</script>

<li>
  <h3 class="mb-1 flex items-center gap-x-2">
    <ArrowRightNarrow height="h-6" width="w-6" />
    <span class="flex-1">{description}</span>
  </h3>

  <Command textToCopy={command} {handleLike} {isLiked}>{command}</Command>
</li>
