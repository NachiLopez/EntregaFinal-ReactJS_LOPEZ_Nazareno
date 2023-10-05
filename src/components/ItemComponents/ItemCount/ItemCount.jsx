import { useCounter } from "../../Hooks/useCounter.jsx";
import './ItemCount.css'

export const ItemCount = ({initial, stock, onAdd}) => {
    const {count, handleAdd, handleSubtract} = useCounter(initial, stock);

    return (
        <div className="item-count">
            <button className="btn btn-outline-dark" onClick={handleSubtract}>-1</button>
            <strong>{count}</strong>
            <button className="btn btn-outline-dark" onClick={handleAdd}>+1</button>
            <button onClick={()=>onAdd(count)} className="btn btn-outline-dark">Agregar al carrito</button>
        </div>
    )   
}

export default ItemCount