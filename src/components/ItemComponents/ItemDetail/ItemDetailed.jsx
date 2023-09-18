
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailed.css'
import {useCartContext } from '../../Context/CartContext'

export const ItemDetailed = ({product}) => {
    const {addProduct} = useCartContext()
    const onAdd = (count) => {
        console.log(`Productos seleccionados: ${count}`)
        if(product.stock > 0 && count <= product.stock){
            product.stock -= count;
            addProduct({...product, quantity: count})
        } else {
            alert("No hay suficiente stock")
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