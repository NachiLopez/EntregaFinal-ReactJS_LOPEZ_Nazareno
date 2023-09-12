import { useCounter } from "../../Hooks/useCounter.jsx";

export const ItemCount = ({initial, stock, onAdd}) => {
    const {count, handleAdd, handleSubtract} = useCounter(initial, stock);

    return (
        <div className="item-count">
            <button onClick={handleSubtract}>-1</button>
            <strong>{count}</strong>
            <button onClick={handleAdd}>+1</button>
            <button onClick={()=>onAdd(count)} className="btn btn-outline-dark">Comprar</button>
        </div>
    )   
}

export default ItemCount