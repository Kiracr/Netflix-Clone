import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Home/>
    </>
  )
}

export default App
