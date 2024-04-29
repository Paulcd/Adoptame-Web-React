import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar/NavBar'
import SliderComponent from './components/SliderComponent/SliderComponent.jsx'
import Protectoras from './components/Protectoras/Protectoras.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <SliderComponent />
    <Protectoras />
  </React.StrictMode>,
)
