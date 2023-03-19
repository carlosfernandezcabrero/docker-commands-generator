<script lang="ts">
  export let id: string
  export let type = 'text'
</script>

<label for={id} class={`font-medium ${type === 'text' ? 'block mb-2' : ''}`}>
  <slot />
</label>
