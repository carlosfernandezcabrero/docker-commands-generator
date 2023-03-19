<script lang="ts">
  export let id: string
  export let type = 'text'
  export let value: any
</script>

{#if type === 'text'}
  <input
    {id}
    type="text"
    class="bg-gray-50 border border-gray-300 w-full p-2 focus:text-gray-600 focus:font-medium focus:outline-docker-primary"
    bind:value
    {...$$restProps}
  />
{:else if type === 'checkbox'}
  <input
    {id}
    type="checkbox"
    class="accent-indigo-600 bg-white w-5 h-5"
    bind:checked={value}
    {...$$restProps}
  />
{/if}
