import matchers from '@testing-library/jest-dom/matchers'
import { beforeAll, afterAll, afterEach, expect } from 'vitest'
import { server } from './mocks/server'

expect.extend(matchers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
