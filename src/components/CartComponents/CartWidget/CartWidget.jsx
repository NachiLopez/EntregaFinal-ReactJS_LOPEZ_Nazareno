import './CartWidget.css'
import {useCartContext } from '../../Context/CartContext.jsx'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const CartWidget = () => {
    const {cartList} = useCartContext();
    const [cantidadProds, setCantidadProds] = useState('0')
    
    useEffect(()=>{
        {cartList.length > 0 ? 
            setCantidadProds(cartList.reduce((total, product) => (total + product.quantity), 0)) 
            : 
            setCantidadProds(0) 
        }
    }, [cartList])
    
    return (
            <Link to={'/cart'}>
                <div className='cart-body'>
                    <img id='cartShop' src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png" alt="cart" />
                    <span>{cantidadProds}</span>
                </div>
            </Link>
    )
}

export default CartWidget