import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from 'react'
import './App.css'
import Hero from './HerosSession/Hero'
import Project from './HerosSession/projects/Project'
import Skills from './HerosSession/skills/Skills'
import Contact from './HerosSession/contact/Contact'
import Footer from './HerosSession/Footer/Footer'
import Navbar from "./Navbar"


const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Projects" element={<Project />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Footer />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
