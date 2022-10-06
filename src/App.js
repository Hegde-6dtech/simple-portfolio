import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
 
    </>
  )
}

export default App
