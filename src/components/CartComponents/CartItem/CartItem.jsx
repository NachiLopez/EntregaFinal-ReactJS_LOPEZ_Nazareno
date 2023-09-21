import React from 'react'
import '../CartItem/CartItem.css'
import { useCartContext } from '../../Context/CartContext'

export const CartItem = ({cartProduct}) => {
    const {deleteProducts} = useCartContext();

    return (
        <div className='cart-item' key={cartProduct.id}>
            <div className="cart-product-img">
                <img src={cartProduct.imageUrl} alt="imgProduct" />
            </div>
            <div className="cart-product-info">
                <h2>Producto: {cartProduct.name}</h2>
                <p>Cantidad: {cartProduct.quantity}</p>
                <p>Precio unitario: {cartProduct.price}</p>
                <button className='btn btn-outline-dark' onClick={()=>deleteProducts(cartProduct)}>Quitar producto</button>
            </div>
        </div>
    )
}
