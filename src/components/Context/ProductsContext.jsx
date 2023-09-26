import { createContext, useContext, useEffect, useState } from "react"
import { fetchData } from "../../utils/fetchData"

const ProductsContext = createContext([])
export const useProductsContext = () => useContext(ProductsContext)

export const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetchData()
        .then(resp => setProducts(resp))
        .catch(console.log(`Error al obtener datos: `, error))
    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}
