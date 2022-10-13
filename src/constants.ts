export const API_URL = 'https://countries.trevorblades.com/'

type Optional<T> = T | undefined | null

export type Country = {
  name: string
  currency: Optional<string>
  emoji: string
}
