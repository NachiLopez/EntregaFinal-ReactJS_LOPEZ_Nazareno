
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailed.css'
import {useCartContext } from '../../Context/CartContext'
import Swal from 'sweetalert2'

export const ItemDetailed = ({product}) => {
    const {cartList,setCartList, addProduct} = useCartContext()
    const onAdd = (count) => {
        if(product.stock > 0 && count <= product.stock){
            let productIfExists = cartList.find((prod) => prod.id == product.id)
            if(productIfExists){
                let updatedCartList = cartList.map((prod) => {
                    if(prod.id == product.id){
                        return {...prod, quantity: prod.quantity + count}
                    }
                    return prod
                })
            setCartList(updatedCartList)
            } else {
                addProduct({...product, quantity: count})
            }
            Swal.fire({
                icon: 'success',
                title: 'Agregado al carrito',
                text: `Se ha añadido ${count} ${product.name} al carrito`
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay suficiente stock',
                text: `El producto sin suficiente stock es ${product.name}`
              })
        }
    }

    return(
        <div key={product.id} className="card">
            <div className="card-body only-one-item">
                <img className='card-img-top only-one-item-img' src={product.imageUrl} alt="imgProducto" />
                <div className='only-one-item-info'>
                    <h2>{product.name}</h2>
                    <p className="desc">{product.desc}</p>
                    <p>${product.price} ARS</p>
                    <p>Stock disponible: {product.stock}</p>
                    <div className="addToCart card">
                        {product.stock > 0 ?
                            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                        :
                            //Despues voy a crear un componente que imprima que no se puede comprar porque no hay mas stock
                            <ItemCount initial={0} stock={0} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <h3>Te podria interesar...</h3>
            </div>
        </div>
    )
}