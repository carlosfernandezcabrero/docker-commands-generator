<script lang="ts">
  export let id: string
  export let type = 'text'
  export let value: any
  export let size = 'normal'

  const sizes: Record<string, string> = {
    normal: 'p-2',
    small: 'px-1.5 py-0.5 text-lg'
  }

  const dynamicStyles = `${sizes[size]}`
</script>

{#if type === 'text'}
  <input
    {id}
    type="text"
    class={`${dynamicStyles} bg-gray-50 border border-gray-300 w-full focus:text-gray-600 focus:font-medium focus:outline-docker-primary`}
    bind:value
    {...$$restProps}
  />
{:else if type === 'checkbox'}
  <input
    {id}
    type="checkbox"
    class="accent-indigo-600 bg-white w-5 h-5 rounded-full"
    bind:checked={value}
    {...$$restProps}
  />
{/if}
