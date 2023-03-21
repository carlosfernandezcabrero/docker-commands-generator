<script lang="ts">
  export let component: any
  export let type = 'normal'
  export let onClick: any = () => {}

  const styles: Record<string, string> = {
    normal: 'bg-sky-600 hover:bg-sky-800',
    critical: 'bg-red-600 hover:bg-red-800'
  }
</script>

<button
  class={`${styles[type]} active:scale-105 text-white rounded-full inline-block p-0.5 shadow-md`}
  on:click={onClick}
  {...$$restProps}
>
  <svelte:component this={component} width="w-6" height="h-6" />
</button>
