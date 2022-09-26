import { expect, it } from 'vitest'
import App from './App'
import { render, screen } from './test-utils'

it('displays the information correctly', () => {
  render(<App />)

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Vite + React'
  )
})
