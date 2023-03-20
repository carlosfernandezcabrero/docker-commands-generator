<script lang="ts">
  import { goto } from '$app/navigation'
  import NavigationButton from '$components/common/navigation-button.svelte'
  import FormFieldset from '$components/form/form-fieldset.svelte'
  import FormInput from '$components/form/form-input.svelte'
  import FormLabel from '$components/form/form-label.svelte'
  import NextPage from '$components/icons/next-page.svelte'
  import { paramsStore } from '../stores'

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
      <FormFieldset type="inline">
        <FormInput
          id="detach_mode"
          type="checkbox"
          bind:value={$paramsStore.detachMode}
        />
        <FormLabel id="detach_mode" type="inline">
          Ejecutar en segundo plano
        </FormLabel>
      </FormFieldset>
      <FormFieldset type="inline">
        <FormInput
          id="run_as_sudo"
          type="checkbox"
          bind:value={$paramsStore.runAsSudo}
        />
        <FormLabel id="run_as_sudo" type="inline">Ejecutar con sudo</FormLabel>
      </FormFieldset>
      <FormFieldset>
        <FormLabel id="image_name">Nombre de la imagen</FormLabel>
        <FormInput
          id="image_name"
          placeholder="Nombre de la imagen"
          bind:value={$paramsStore.imageName}
        />
      </FormFieldset>
      <FormFieldset>
        <FormLabel id="container_name">Nombre del contenedor</FormLabel>
        <FormInput
          id="container_name"
          placeholder="Nombre del contenedor"
          bind:value={$paramsStore.containerName}
        />
      </FormFieldset>
      <FormFieldset type="inline">
        <FormInput
          id="config_hostname"
          type="checkbox"
          bind:value={$paramsStore.configHostname}
        />
        <FormLabel id="config_hostname" type="inline">
          Configurar hostname
        </FormLabel>
      </FormFieldset>
      {#if $paramsStore.configHostname}
        <FormFieldset transition={true}>
          <FormLabel id="hostname">Hostname del contenedor</FormLabel>
          <FormInput
            id="hostname"
            placeholder="Hostname del contenedor"
            bind:value={$paramsStore.hostname}
          />
        </FormFieldset>
      {/if}
    </div>

    <footer class="mt-12 text-center">
      <NavigationButton component={NextPage} type="submit" />
    </footer>
  </form>
</section>
