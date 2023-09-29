import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import CartEmpty from '../CartEmpty/CartEmpty'
import { CartItem } from '../CartItem/CartItem'
import '../CartContainer/CartContainer.css'
import FormularioDatosComprador from './FormularioDatosComprador'

const CartContainer = () => {
    const {cartList, deleteProducts, confirmPurchase} = useCartContext()
    const [montoTotal, setMontoTotal] = useState(0)
    const showMont = () => (<h3 className='final-price'>Precio final: ${montoTotal}</h3>)
    const [formData, setFormData] = useState({name:'', email:'', tel:''})
    // HACER VALIDACION DE FORMULARIO
    let isActive = true

    useEffect(()=>{
      setMontoTotal(cartList.reduce((monto, prod) => (monto + prod.price * prod.quantity),0))
    }, [cartList])

    
    const handleOnChange = (evt) => {
      setFormData({
        ...formData, 
        [evt.target.name] : evt.target.value
      })
    }
    const enviarDatos = (evt) => {
      evt.preventDefault()
      console.log(formData);
      // Activar el boton para confirmar compra
    }

  return (
    <div className='cart-container'>
        {cartList.length == 0 ? <CartEmpty/> : cartList.map(prod => <CartItem key={prod.id} cartProduct={prod}/>)}
        {cartList.length != 0 ? showMont() && <FormularioDatosComprador formData={formData} handleOnChange={handleOnChange}/> : <></>}
        {cartList.length != 0 ? <button className='btn btn-outline-dark' onClick={()=>deleteProducts()}>Vaciar carrito</button> : <></>}
        {cartList.length != 0 ? <button className={isActive ? 'btn btn-success' : 'btn btn-success disabled'} onClick={()=>confirmPurchase(cartList, montoTotal,formData)}>Confirmar compra</button> : <></>}
    </div>
  )
}

export default CartContainer