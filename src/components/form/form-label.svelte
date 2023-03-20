<script lang="ts">
  export let id: string
  export let type = 'block'

  const styles: Record<string, string> = {
    block: 'block mb-2',
    inline: 'flex-1'
  }
</script>

<label for={id} class={styles[type]}>
  <slot />
</label>
