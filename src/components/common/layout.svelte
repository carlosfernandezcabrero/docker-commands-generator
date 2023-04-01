<script lang="ts">
  export let title = ''
</script>

<svelte:head>
  <title>{title ? `DCG | ${title}` : 'Docker Commands Generator'}</title>
</svelte:head>

<slot />
