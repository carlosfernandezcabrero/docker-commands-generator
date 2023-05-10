export interface CommandInterface {
  description: string
  command: string
}

export interface CommandInterfaceWithId extends CommandInterface {
  id: string
}
