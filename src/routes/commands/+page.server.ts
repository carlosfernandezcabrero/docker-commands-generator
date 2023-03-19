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

  const hostnameOption =
    searchParams.get('configHostname') === 'true'
      ? ` --hostname ${hostname}`
      : ''

  const commands: Command[] = [
    {
      description: 'Crear imagen',
      command: `${runAsSudo}docker build -t ${imageName} .`
    },
    {
      description: 'Levantar contenedor',
      command: `${runAsSudo}docker run${detachMode}${hostnameOption} --name ${containerName} ${imageName}`
    },
    {
      description: 'Parar contenedor',
      command: `${runAsSudo}docker stop ${containerName}`
    },
    {
      description: 'Borrar contenedor',
      command: `${runAsSudo}docker rm ${containerName}`
    },
    {
      description: 'Borrar imagen',
      command: `${runAsSudo}docker rmi ${imageName}`
    }
  ]

  return { commands }
}) as PageServerLoad
