
import { Filter } from "../../Filter/Filter.jsx";
import { Item } from "../Item/Item.jsx";
import "../ItemListContainer/ItemListContainer.css";
import { addProductsFireBase } from "../../../utils/fetchData.js";

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
        <>
            <Filter products={products}>
                {handleProductFilter}
            </Filter>

            { // Si se elimina la coleccion "Products", aparece un boton para cargar los productos en FireStore
            products == 0 ?
            <button onClick={()=>addProductsFireBase()}>Cargar productos</button>
            : 
            <></>
            }
        </>
    )
}

export default ItemList