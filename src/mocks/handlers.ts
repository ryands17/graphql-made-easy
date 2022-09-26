import { graphql } from 'msw'
import { API_URL } from '../constants'

const countriesAPI = graphql.link(API_URL)

const countries = [
  {
    name: 'Andorra',
    currency: 'EUR',
    emoji: '🇦🇩',
  },
  {
    name: 'United Arab Emirates',
    currency: 'AED',
    emoji: '🇦🇪',
  },
  {
    name: 'Afghanistan',
    currency: 'AFN',
    emoji: '🇦🇫',
  },
  {
    name: 'Antigua and Barbuda',
    currency: 'XCD',
    emoji: '🇦🇬',
  },
  {
    name: 'Anguilla',
    currency: 'XCD',
    emoji: '🇦🇮',
  },
  {
    name: 'Albania',
    currency: 'ALL',
    emoji: '🇦🇱',
  },
  {
    name: 'Armenia',
    currency: 'AMD',
    emoji: '🇦🇲',
  },
  {
    name: 'Angola',
    currency: 'AOA',
    emoji: '🇦🇴',
  },
  {
    name: 'Antarctica',
    currency: null,
    emoji: '🇦🇶',
  },
  {
    name: 'Argentina',
    currency: 'ARS',
    emoji: '🇦🇷',
  },
]

export const handlers = [
  countriesAPI.query('countries', (_req, res, ctx) => res(ctx.data(countries))),
]
