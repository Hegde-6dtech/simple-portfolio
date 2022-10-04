import React from 'react'
import './App.css'
import Info from './Components/info/Info'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import Footer from './Components/Footer'

function App() {
  return (
    <>
   
      <Info />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    
    </>
  )
}

export default App
