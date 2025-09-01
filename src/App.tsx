import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Preview from './components/Preview'
import Description from './components/Description'
import Galleries from './components/Galleries'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Preview></Preview>
      <Description></Description>
      <Galleries></Galleries>
      <Footer></Footer>
    </>
  )
}

export default App
