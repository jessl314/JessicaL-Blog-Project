import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

/*

all elements will be rendered here

*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
