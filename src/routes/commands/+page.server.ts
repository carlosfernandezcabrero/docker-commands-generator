import type { PageServerLoad } from './$types'

interface Command {
  description: string
  command: string
}

export const load = (({ url }) => {
  const { searchParams } = url

  const imageName = searchParams.get('imageName') as string
  const containerName = searchParams.get('containerName') as string
  const detachMode = searchParams.get('detachMode') === 'true' ? ' -d' : ''
  const runAsSudo = searchParams.get('runAsSudo') === 'true' ? 'sudo ' : ''
  const hostname = searchParams.get('hostname') as string
  const forwarderPorts = (searchParams.get('forwarderPorts') as string)
    .split(',')
    .join(' -p ')

  const hostnameOption =
    searchParams.get('configHostname') === 'true'
      ? ` --hostname ${hostname}`
      : ''
  const forwarderPortsOption =
    searchParams.get('configForwarderPorts') === 'true'
      ? ` -p ${forwarderPorts}`
      : ''

  const stopContainerCommand = `${runAsSudo}docker stop ${containerName}`
  const removeContainerCommand = `${runAsSudo}docker rm ${containerName}`
  const removeImageCommand = `${runAsSudo}docker rmi ${imageName}`

  const commands: Command[] = [
    {
      description: 'Crear imagen',
      command: `${runAsSudo}docker build -t ${imageName} .`
    },
    {
      description: 'Levantar contenedor',
      command: `${runAsSudo}docker run${detachMode}${hostnameOption}${forwarderPortsOption} --name ${containerName} ${imageName}`
    },
    {
      description: 'Arrancar contenedor',
      command: `${runAsSudo}docker start ${containerName}`
    },
    {
      description: 'Parar contenedor',
      command: stopContainerCommand
    },
    {
      description: 'Borrar contenedor',
      command: removeContainerCommand
    },
    {
      description: 'Borrar imagen',
      command: removeImageCommand
    }
  ]
  const snippets: Command[] = [
    {
      description: 'Parar y borrar contenedor',
      command: [stopContainerCommand, removeContainerCommand].join(' && ')
    },
    {
      description: 'Parar contenedor y borrar contenedor e imagen',
      command: [
        stopContainerCommand,
        removeContainerCommand,
        removeImageCommand
      ].join(' && ')
    }
  ]

  return { commands, snippets, containerName }
}) as PageServerLoad
