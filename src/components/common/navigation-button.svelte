<script lang="ts">
  export let component: any
  export let onClick: any = () => {}
</script>

<button
  class="bg-indigo-600 hover:bg-indigo-800 active:scale-105 text-white rounded-full inline-block p-1 shadow-lg"
  on:click={onClick}
  {...$$restProps}
>
  <svelte:component this={component} width="w-11" height="h-11" />
</button>
