import { gql } from '@apollo/client'
import './App.css'
import { useCountriesQuery } from './generated'

export const COUNTRIES = gql`
  query countries($orderBy: String) {
    countries(orderBy: $orderBy) {
      name
      currency
      emoji
      capital
    }
  }
`

function App() {
  let { data, loading } = useCountriesQuery()

  return (
    <div className="App">
      <h1>Countries</h1>
      <div className="card">
        {loading && <h5>Loading...</h5>}
        {data && (
          <ul>
            {data.countries?.slice(0, 10)?.map(country => (
              <li
                key={country.name}
                style={{
                  listStyle: 'none',
                  fontSize: '2rem',
                  margin: '0.8rem',
                }}
              >
                {country.emoji} {country.name} | 💰 {country.currency}{' '}
                {country.capital}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
