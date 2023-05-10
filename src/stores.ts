import { writable } from 'svelte/store'

export interface Params {
  configForwarderPorts: boolean
  configHostname: boolean
  containerName: string
  detachMode: boolean
  forwarderPorts: string[]
  hostname: string
  imageName: string
  runAsSudo: boolean
  likedCommands: string[]
}

export const paramsStore = writable<Params>({
  configForwarderPorts: false,
  configHostname: false,
  containerName: '',
  detachMode: true,
  forwarderPorts: [],
  hostname: '',
  imageName: '',
  runAsSudo: false,
  likedCommands: []
})
