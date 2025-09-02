import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Preview from './components/Preview'
import Description from './components/Description'
import Galleries from './components/Galleries'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<>
        <Navbar></Navbar>
        <Preview></Preview>
        <Description></Description>
        <Galleries></Galleries>
        <Footer></Footer>
      </>}></Route>

      <Route path='/journal' element={<>
      <Navbar></Navbar>
      <Footer></Footer>
      </>}></Route>

     <Route path='/about' element={<>
      <Navbar></Navbar>
      <Footer></Footer>
      </>}></Route>

      <Route path='/contact' element={<>
      <Navbar></Navbar>
      <Footer></Footer>
      </>}></Route>

      <Route path='/galleries' element={<>
      <Navbar></Navbar>
      <Gallery></Gallery>
      <Footer></Footer>
      </>}></Route>   

    </Routes>
  )
}

export default App
