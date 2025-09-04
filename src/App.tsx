import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Preview from './components/MAIN/Preview'
import Description from './components/MAIN/Description'
import Galleries from './components/MAIN/Galleries'
import Footer from './components/Footer'
import Gallery from './components/GALLERIES/Gallery'
import { Routes, Route } from "react-router-dom";
import About from './components/ABOUT/About'
import Contact from './components/CONTACT/Contact'

function App() {

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
      <About></About>
      <Footer></Footer>
      </>}></Route>

      <Route path='/contact' element={<>
      <Navbar></Navbar>
      <Contact></Contact>
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
