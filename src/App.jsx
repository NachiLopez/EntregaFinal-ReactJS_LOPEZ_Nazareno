import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemComponents/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemComponents/ItemDetail/ItemDetailContainer'
import { CartContextProvider } from './components/Context/CartContext'
import CartContainer from './components/CartComponents/CartContainer/CartContainer'

function App() {
  return (  
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes> 
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:catName' element={<ItemListContainer />}/>
          <Route path='/id/:paramID' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </CartContextProvider>
    </Router>
  )
}

export default App
