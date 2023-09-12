
import { Filter } from "../../Filter/Filter.jsx";
import { Item } from "../Item/Item.jsx";
import "../ItemListContainer/ItemListContainer.css";

const handleProductFilter = ({filterState, products}) => {
    return(
        <>
            {
                filterState == '' ?
                    products.map(product => (<Item key={product.id} product={product} />))
                :
                    products.filter(product => product.name.toLowerCase().includes(filterState.toLowerCase())).map(product => (<Item key={product.id} product={product} />))
            }
        </>
    )
}

const ItemList = ({products}) => {
    return (
        <Filter products={products}>
            {handleProductFilter}
        </Filter>
    )
}

export default ItemList