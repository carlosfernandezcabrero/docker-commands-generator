<script lang="ts">
  import Command from '$components/commands/command.svelte'
  import ArrowRightNarrow from '$components/icons/arrow-right-narrow.svelte'

  export let command: string
  export let description: string
</script>

<li>
  <h3 class="mb-1 flex items-center gap-x-2">
    <ArrowRightNarrow height="h-6" width="w-6" />
    <span class="flex-1">{description}</span>
  </h3>
  <Command textToCopy={command}>{command}</Command>
</li>
