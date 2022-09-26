import { expect, it } from 'vitest'
import App from './App'
import { countries } from './mocks/handlers'
import { render, screen } from './test-utils'

it('displays the loading state', () => {
  render(<App />)

  expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
    /Loading/i
  )
})

it('displays 10 countries correctly', async () => {
  render(<App />)

  expect(await screen.findByRole('list')).toBeInTheDocument()

  countries.forEach(country =>
    expect(screen.getByText(new RegExp(country.name))).toBeInTheDocument()
  )
})
