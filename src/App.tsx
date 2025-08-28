import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
