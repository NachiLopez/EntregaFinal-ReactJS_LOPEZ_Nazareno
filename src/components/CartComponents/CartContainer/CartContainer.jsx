import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import CartEmpty from '../CartEmpty/CartEmpty'
import { CartItem } from '../CartItem/CartItem'
import '../CartContainer/CartContainer.css'

const CartContainer = () => {
    const {cartList, deleteProducts, confirmPurchase} = useCartContext()
    const [montoTotal, setMontoTotal] = useState(0)
    const showMont = () => (<h3 className='final-price'>Precio final: ${montoTotal}</h3>)

    useEffect(()=>{
      setMontoTotal(cartList.reduce((monto, prod) => (monto + prod.price * prod.quantity),0))
    }, [cartList])

    console.log('cartlist:');
    console.log(cartList)

  return (
    <div className='cart-container'>
        {cartList.length == 0 ? <CartEmpty/> : cartList.map(prod => <CartItem key={prod.id} cartProduct={prod}/>)}
        {cartList.length != 0 ? showMont() : <></>}
        {cartList.length != 0 ? <button className='btn btn-outline-dark' onClick={()=>deleteProducts()}>Vaciar carrito</button> : <></>}
        {cartList.length != 0 ? <button className='btn btn-success' onClick={()=>confirmPurchase(cartList, montoTotal)}>Confirmar compra</button> : <></>}

    </div>
  )
}

export default CartContainer