<script lang="ts">
  export let id: string
  export let type = 'text'

  const styles: Record<string, string> = {
    text: 'block mb-2'
  }
</script>

<label for={id} class={`${styles[type] || 'flex-1'}`}>
  <slot />
</label>
