import { useState } from "react"

export const Filter = ({children, products}) =>{
    const [filterState, setFilterState] = useState('')

    const handleFilterChange = (event) => {
        setFilterState(event.target.value)
    }

    return (
        <div>
            <div className="buscador">
                <h2>🔍</h2>
                <input type="text" value={filterState} onChange={handleFilterChange} placeholder="Ingrese el nombre del producto a buscar..."/>
            </div>
            <div className="item-list">
                {children({filterState, handleFilterChange, products})}
            </div>
        </div>
    )
}