<script lang="ts">
  import ActionButton from '$components/common/action-button.svelte'
  import Minus from '$components/icons/minus.svelte'
  import Plus from '$components/icons/plus.svelte'
  import { paramsStore } from '../../stores'
  import FormInput from './form-input.svelte'

  let hostPort = ''
  let guessPort = ''

  function handleAddFw() {
    $paramsStore.forwarderPorts = [
      ...$paramsStore.forwarderPorts,
      `${hostPort}:${guessPort}`
    ]
    hostPort = ''
    guessPort = ''
  }

  function handleRemoveFw(index: number) {
    $paramsStore.forwarderPorts = $paramsStore.forwarderPorts.filter(
      (_, i) => i !== index
    )
  }
</script>

<table class="w-full text-left">
  <thead><tr><th /><th /></tr></thead>
  <tbody>
    {#each $paramsStore.forwarderPorts as fwPortString, i}
      {@const fwPort = fwPortString.split(':')}
      <tr>
        <td class="px-6 text-right">
          {fwPort[0]}
        </td>
        <td class="text-center">:</td>
        <td class="px-6">{fwPort[1]}</td>
        <td>
          <ActionButton
            component={Minus}
            type="critical"
            onClick={() => handleRemoveFw(i)}
          />
        </td>
      </tr>
    {/each}
    <tr>
      <td class="px-6 pt-4">
        <FormInput
          id="host_port"
          size="small"
          placeholder="Host"
          bind:value={hostPort}
        />
      </td>
      <td class="text-center pt-4">:</td>
      <td class="px-6 pt-4">
        <FormInput
          id="guess_port"
          size="small"
          placeholder="Guest"
          bind:value={guessPort}
        />
      </td>
      <td class="pt-4">
        <ActionButton component={Plus} onClick={handleAddFw} />
      </td>
    </tr>
  </tbody>
</table>
