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
            // Logica para borrar
            console.log("aca se borraria el producto")
        } else {
            setCartList([])
        }
    }

    return(
        <CartContext.Provider value={{
            cartList, addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}