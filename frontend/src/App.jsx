// import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Grin from "./pages/Grin";
import Speepy from "./pages/Speepy";
import NavBar from './Navbar.jsx';


function App() {

  return (
    <StrictMode>
      <NavBar />
      <h1>App</h1>
    </StrictMode>
  );
}

export default App
