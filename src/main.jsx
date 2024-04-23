import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Inicio />
  </React.StrictMode>,
)
