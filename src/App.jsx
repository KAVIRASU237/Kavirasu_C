import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import "./App.css";
import Hero from "./HerosSession/Hero";
import Project from "./HerosSession/projects/Project";
import Skills from "./HerosSession/skills/Skills";
import Contact from "./HerosSession/contact/Contact";
import Footer from "./HerosSession/Footer/Footer";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Explicitly mark Hero as the home page */}
        <Route index element={<Hero />} />
        <Route path="/" element={<Hero />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Redirect to Home if no route matches */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
