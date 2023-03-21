import { writable } from 'svelte/store'

interface Params {
  containerName: string
  configForwarderPorts: boolean
  configHostname: boolean
  detachMode: boolean
  forwarderPorts: string[]
  hostname: string
  imageName: string
  runAsSudo: boolean
}

export const paramsStore = writable<Params>({
  detachMode: true,
  imageName: '',
  containerName: '',
  runAsSudo: false,
  configHostname: false,
  hostname: '',
  configForwarderPorts: false,
  forwarderPorts: []
})
