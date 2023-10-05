import './CartWidget.css'
import {useCartContext } from '../../Context/CartContext.jsx'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const CartWidget = () => {
    const {cartList} = useCartContext();
    const [quantityProducts, setQuantityProducts] = useState('0')
    
    useEffect(()=>{
        {cartList.length > 0 ? 
            setQuantityProducts(cartList.reduce((total, product) => (total + product.quantity), 0)) 
            : 
            setQuantityProducts(0) 
        }
    }, [cartList])
    
    return (
            <Link to={'/cart'}>
                <div className='cart-body'>
                    <img id='cartShop' src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png" alt="cart" />
                    <span>{quantityProducts}</span>
                </div>
            </Link>
    )
}

export default CartWidget