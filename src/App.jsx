import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <>
      <Navbar />

      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </>
  )
}

export default App
