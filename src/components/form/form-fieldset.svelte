<script lang="ts">
  import { slide } from 'svelte/transition'

  export let transition = false
  export let type = 'block'

  const styles: Record<string, string> = {
    block: '',
    inline: 'flex items-center gap-x-2'
  }
</script>

{#if transition}
  <fieldset transition:slide class={styles[type]}><slot /></fieldset>
{:else}
  <fieldset class={styles[type]}><slot /></fieldset>
{/if}
