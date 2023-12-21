import { useState } from 'react'
import PantallaPrincipal from './PantallaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PantallaPrincipal />
    </>
  )
}

export default App
