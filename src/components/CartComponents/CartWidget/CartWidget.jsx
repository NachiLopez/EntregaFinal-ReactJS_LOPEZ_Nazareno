import './CartWidget.css'
import {useCartContext } from '../../Context/CartContext.jsx'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {cartList} = useCartContext();
    const totalQuantity = cartList.reduce((total, product) => (total + product.quantity), 0);
    
    return (
            <Link to={'/cart'}>
                <div className='cart-body'>
                    <img id='cartShop' src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png" alt="cart" />
                    <span>{totalQuantity}</span>
                    {console.log(cartList)}
                </div>
            </Link>
    )
}

export default CartWidget