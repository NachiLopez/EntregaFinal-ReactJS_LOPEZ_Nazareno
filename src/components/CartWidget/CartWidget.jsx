import './CartWidget.css'

const CartWidget = () => {
    const itemCount = 0
    
    return (
        <div>
            <img id='cartShop' src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png" alt="cart" />
            <span>{itemCount}</span>
        </div>
    )
}

export default CartWidget