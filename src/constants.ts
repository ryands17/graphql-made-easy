export const API_URL = 'https://countries.trevorblades.com/'

type Maybe<T> = T | undefined | null

export type Country = {
  name: String
  currency: Maybe<string>
  emoji: String
}
