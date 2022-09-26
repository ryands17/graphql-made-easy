import './App.css'
import { useCountriesQuery } from './generated'

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
                {country.emoji} {country.name} | 💰 {country.currency}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
