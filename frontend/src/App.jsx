import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Speepy from './pages/Speepy.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
    {/* <NavBar /> */}
    <h1>App</h1>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Speepy" element={<Speepy />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
