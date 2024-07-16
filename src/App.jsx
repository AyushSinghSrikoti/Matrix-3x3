import { useState } from 'react'
import Matrix from './matrix'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Matrix/>
    </>
  )
}

export default App
