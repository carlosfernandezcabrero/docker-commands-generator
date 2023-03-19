<script lang="ts">
  import Copy from './icons/copy.svelte'

  export let textToCopy: string

  const copyToClipboard = () => navigator.clipboard.writeText(textToCopy)
</script>

<div
  class="bg-gray-50 border border-gray-300 p-2.5 flex items-center gap-x-3 justify-between"
>
  <p><slot /></p>
  <button
    class="hover:text-indigo-600 active:scale-110"
    on:click={copyToClipboard}
  >
    <Copy width="w-7" height="h-7" />
  </button>
</div>
