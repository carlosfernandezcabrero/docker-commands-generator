<script lang="ts">
  import toast from 'svelte-french-toast'
  import Copy from '../icons/copy.svelte'

  export let textToCopy: string
  export let handleLike: () => void

  function copyToClipboard() {
    navigator.clipboard.writeText(textToCopy)
    toast.success('Comando copiado!', {
      position: 'bottom-center'
    })
  }
</script>

<div
  class="bg-gray-50 border border-gray-300 p-2.5 flex items-center gap-x-3 justify-between"
>
  <p><slot /></p>

  <div class="flex items-center gap-x-2">
    <button
      class="hover:text-indigo-600 active:scale-110"
      on:click={copyToClipboard}
    >
      <Copy width="w-7" height="h-7" />
    </button>
    <button on:click={() => handleLike()}>Toggle</button>
  </div>
</div>
