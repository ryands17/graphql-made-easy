export const API_URL = 'https://countries.trevorblades.com/'

type Maybe<T> = T | undefined | null

export type Country = {
  name: string
  currency: Maybe<string>
  emoji: string
}
