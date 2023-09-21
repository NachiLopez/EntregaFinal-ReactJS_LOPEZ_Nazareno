import React from 'react'
import { Link } from 'react-router-dom'
import '../CartEmpty/CartEmpty.css'

const CartEmpty = () => {
  return (
    <div className='cart-empty'>
        <img className='cart-img' src="https://www.100natural.com/delivery100/web/vistas/img/cartempty.png" alt="cartEmptyImg" />
        <h2>No hay ningun elemento en el carrito ahora mismo</h2>
        <p>Si deseas puedes volver a la pagina principal y agregar algun producto de tu interes</p>
        <Link to={'/'}>
            <button className='btn btn-outline-dark'>Volver a home</button>
        </Link>
    </div>
  )
}

export default CartEmpty