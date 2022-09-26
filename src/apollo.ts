import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'
import { API_URL } from './constants'

const cache = new InMemoryCache()

const link = new HttpLink({
  uri: API_URL,
  // Use explicit `window.fetch` so that outgoing requests
  // are captured and deferred until the Service Worker is ready.
  fetch: (...args) => fetch(...args),
})

export const client = new ApolloClient({ cache, link })
