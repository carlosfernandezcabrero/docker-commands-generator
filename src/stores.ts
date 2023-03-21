import { writable } from 'svelte/store'

interface Params {
  configForwarderPorts: boolean
  configHostname: boolean
  containerName: string
  detachMode: boolean
  forwarderPorts: string[]
  hostname: string
  imageName: string
  runAsSudo: boolean
}

export const paramsStore = writable<Params>({
  configForwarderPorts: false,
  configHostname: false,
  containerName: '',
  detachMode: true,
  forwarderPorts: [],
  hostname: '',
  imageName: '',
  runAsSudo: false
})
