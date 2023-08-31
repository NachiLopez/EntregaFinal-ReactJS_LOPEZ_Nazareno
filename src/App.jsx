import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  const onAdd = (count) => {
    console.log(`Productos seleccionados: ${count}`)
  }

  return (
    <>
      <Navbar />

      <ItemListContainer greeting="Bienvenido a mi tienda" />
    
      <ItemCount initial={1} stock={4} onAdd={onAdd} />
    </>
  )
}

export default App
