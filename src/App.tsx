import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Preview from './components/Preview'
import Description from './components/Description'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Preview></Preview>
      <Description></Description>
    </>
  )
}

export default App
