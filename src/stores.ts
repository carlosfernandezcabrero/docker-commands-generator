import { writable } from 'svelte/store'

export const paramsStore = writable({
  detachMode: true,
  imageName: '',
  containerName: '',
  runAsSudo: false,
  configHostname: false,
  hostname: ''
})
