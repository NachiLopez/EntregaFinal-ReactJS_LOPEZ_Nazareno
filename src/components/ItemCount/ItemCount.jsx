import { useState } from "react"
import useCounter from "../Hooks/useCounter";

export const ItemCount = (initial, stock, onAdd) => {
    const [count, handleAdd, hanldeSubtract] = useCounter(initial, stock);

    return (
        <div className="item-count">
            <button onClick={hanldeSubtract}>-1</button>
            <strong>{count}</strong>
            <button onClick={handleAdd}>+1</button>
        </div>
    )
}

export default ItemCount