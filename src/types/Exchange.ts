export type ExchangeItem = {
  id: string
  title: string
  description: string
}

export type ExchangeListing = {
  id: string
  user: {
    name: string
    avatarUrl: string
    role: string
  }
  items: ExchangeItem[]
  notes?: string
}