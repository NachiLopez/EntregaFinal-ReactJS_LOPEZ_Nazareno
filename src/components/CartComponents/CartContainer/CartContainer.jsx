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
    const [isValidated, setIsValidated] = useState(false)
    const [errorInputName, setErrorInputName] = useState(false)
    const [errorInputEmail, setErrorInputEmail] = useState(false)
    const [errorInputPhone, setErrorInputPhone] = useState(false)

    useEffect(()=>{
      setMontoTotal(cartList.reduce((monto, prod) => (monto + prod.price * prod.quantity),0))
    }, [cartList])

    const handleOnChange = (evt) => {
      setFormData({
        ...formData, 
        [evt.target.name] : evt.target.value
      })
    }

    const validateForm = (formData) => {
      // Solucion encontrada en https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
      const isValidEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

      const isNameValid = formData.name.length > 3;
      const isEmailValid = formData.email.length !== 0 && isValidEmail.test(formData.email);
      const isPhoneValid = (!isNaN(parseInt(formData.tel)) && formData.tel.length >= 8);

      setErrorInputName(!isNameValid);
      setErrorInputEmail(!isEmailValid);
      setErrorInputPhone(!isPhoneValid);
      // Si alguno de los campos no es válido, isValidated será false, de lo contrario, será true.
      setIsValidated(isNameValid && isEmailValid && isPhoneValid);
    }

    useEffect(()=>{
      validateForm(formData)
    }, [handleOnChange])

  return (
    <div className='cart-container'>
        {cartList.length == 0 ? <CartEmpty/> : cartList.map(prod => <CartItem key={prod.id} cartProduct={prod}/>)}
        {cartList.length != 0 ? showMont() : <></>}
        {cartList.length != 0 ? <FormularioDatosComprador formData={formData} handleOnChange={handleOnChange} errorInputName={errorInputName} errorInputEmail={errorInputEmail} errorInputPhone={errorInputPhone}/> : <></>}
        {cartList.length != 0 ? <button className='btn btn-outline-dark' onClick={()=>deleteProducts()}>Vaciar carrito</button> : <></>}
        {cartList.length != 0 ? <button className={isValidated ? 'btn btn-success' : 'btn btn-success disabled'} onClick={()=>confirmPurchase(cartList, montoTotal,formData)}>Confirmar compra</button> : <></>}
    </div>
  )
}
export default CartContainer