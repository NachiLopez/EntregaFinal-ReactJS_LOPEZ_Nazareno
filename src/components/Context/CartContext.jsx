import { createContext, useContext, useState } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
console.log(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct) =>{
        setCartList(
            [...cartList, newProduct]
        )
    }

    const deleteProducts = (productDelete) => {
        if(productDelete){
            // Haciendolo de esta manera funcionaba pero no se actualizaba mi vista cartContainer
            // let indexProd = cartList.findIndex((prod) => prod.id == productDelete.id)
            // console.log(`index: ${indexProd}`);
            // cartList.splice(indexProd,1)

            // Haciendolo de esta manera, detecta el cambio en CartList gracias a usar el set, y asi se  actualiza la vista cartContainer 
            let updatedCartList = cartList.filter((prod) => prod.id != productDelete.id);
            setCartList(updatedCartList)
        } else {
            setCartList([])
        }
    }

    return(
        <CartContext.Provider value={ {cartList, setCartList, addProduct, deleteProducts} }>
            {children}
        </CartContext.Provider>
    )
}