import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Contador con React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Número de click {count}
        </button>
      </div>
      <p className="read-the-docs">
        Este proyecto se usará para test en TestSigma :)
      </p>
    </>
  )
}

export default App
