<script lang="ts">
  import { goto } from '$app/navigation'
  import NavigationButton from '$components/common/navigation-button.svelte'
  import FormInput from '$components/form/form-input.svelte'
  import FormLabel from '$components/form/form-label.svelte'
  import NextPage from '$components/icons/next-page.svelte'
  import { paramsStore } from '../stores'
  import { slide } from 'svelte/transition'

  function handleSubmit(event: any) {
    event.preventDefault()

    const params = Object.entries($paramsStore)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    goto(`/commands?${params}`, {
      replaceState: false
    })
  }
</script>

<section>
  <form on:submit={handleSubmit}>
    <div class="flex flex-col gap-y-6">
      <fieldset class="flex items-center gap-x-2">
        <FormInput
          id="detach_mode"
          type="checkbox"
          bind:value={$paramsStore.detachMode}
        />
        <FormLabel id="detach_mode" type="checkbox">
          Ejecutar el contenedor en segundo plano
        </FormLabel>
      </fieldset>
      <fieldset class="flex items-center gap-x-2">
        <FormInput
          id="run_as_sudo"
          type="checkbox"
          bind:value={$paramsStore.runAsSudo}
        />
        <FormLabel id="run_as_sudo" type="checkbox">Ejecutar con sudo</FormLabel
        >
      </fieldset>
      <fieldset>
        <FormLabel id="image_name">Nombre de la imagen</FormLabel>
        <FormInput
          id="image_name"
          placeholder="Nombre de la imagen"
          bind:value={$paramsStore.imageName}
        />
      </fieldset>
      <fieldset>
        <FormLabel id="container_name">Nombre del contenedor</FormLabel>
        <FormInput
          id="container_name"
          placeholder="Nombre del contenedor"
          bind:value={$paramsStore.containerName}
        />
      </fieldset>
      <fieldset class="flex items-center gap-x-2">
        <FormInput
          id="config_hostname"
          type="checkbox"
          bind:value={$paramsStore.configHostname}
        />
        <FormLabel id="config_hostname" type="checkbox">
          Configurar hostname
        </FormLabel>
      </fieldset>
      {#if $paramsStore.configHostname}
        <fieldset transition:slide|local>
          <FormLabel id="hostname">Hostname del contenedor</FormLabel>
          <FormInput
            id="hostname"
            placeholder="Hostname del contenedor"
            bind:value={$paramsStore.hostname}
          />
        </fieldset>
      {/if}
    </div>

    <footer class="mt-12 text-center">
      <NavigationButton component={NextPage} type="submit" />
    </footer>
  </form>
</section>
