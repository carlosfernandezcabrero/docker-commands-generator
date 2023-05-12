<script lang="ts">
  import toast from 'svelte-french-toast'
  import Copy from '../icons/copy.svelte'

  export let textToCopy: string
  export let handleLike: () => void
  export let isLiked: boolean

  function copyToClipboard() {
    navigator.clipboard.writeText(textToCopy)
    toast.success('Comando copiado!', {
      position: 'bottom-center'
    })
  }
</script>

<div
  class="bg-gray-50 border border-gray-300 p-2.5 flex items-start gap-x-4 justify-between"
>
  <p><slot /></p>

  <div class="flex flex-col sm:flex-row items-center gap-2">
    <button
      class="hover:text-indigo-600 active:scale-110"
      on:click={copyToClipboard}
    >
      <Copy width="w-7" height="h-7" />
    </button>
    <button class="active:scale-110" on:click={() => handleLike()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class={`w-7 h-7 stroke-pink-600 ${
          isLiked ? 'fill-pink-600' : 'fill-none'
        }`}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        />
      </svg>
    </button>
  </div>
</div>
