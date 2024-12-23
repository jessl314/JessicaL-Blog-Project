import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Speepy from './pages/Speepy.jsx';
import Solace from './pages/Solace.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayImage from './pages/DisplayImage.jsx';


/* all page routes will be created here. the navigation menu/interface is in NavBar */

function App() {
  
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Speepy" element={<Speepy />} />
        <Route path="/DisplayImage" element={<DisplayImage />} />
        <Route path="/Solace" element={<Solace />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
