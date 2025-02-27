import { useState, useEffect } from 'react' ;
import "./index.css" ;
import React from 'react' ;
import {Routes, Route} from 'react-router-dom' ;
import Accueil from "./pages/index" ;
import Services from "./pages/services" ;
import Portfolio from "./pages/portfolio" ;
import Contact from "./pages/contact" ;
import MentionsLegales from "./pages/mentions" ;
import Header from "./components/header/header" ;
import Footer from "./components/footer/footer" ;

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/mentionslegales" element={<MentionsLegales/>}/>
      </Routes>
    </div>
  )
}

export default App
