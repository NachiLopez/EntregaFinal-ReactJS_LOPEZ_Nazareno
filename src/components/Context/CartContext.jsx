import { createContext, useContext, useState } from "react"
import { useProductsContext } from "./ProductsContext"
import Swal from "sweetalert2"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
console.log(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const {products} = useProductsContext()

    const addProduct = (newProduct) =>{
        setCartList(
            [...cartList, newProduct]
        )
    }

    const confirmPurchase = (productsPurchase, montoTotal) => {
        const order ={}
        order.buyer = {email: 'juan@gmail.com', name: 'Juan', telephone: '11 4443-6759'}
        order.products = productsPurchase.map(prod => ({id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}))
        order.total = montoTotal
        console.log(order);
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada con exito'
        })
        // Deberia hacer un update en el product para settear el nuevo stock
        const db = getFirestore()
        const ordersColecction = collection(db, 'orders')
        addDoc(ordersColecction, order)
        .then(resp => console.log(resp))
    }

    const deleteProducts = (productDelete) => {
        if(productDelete){
            // Haciendolo de esta manera funcionaba pero no se actualizaba mi vista cartContainer
            // let indexProd = cartList.findIndex((prod) => prod.id == productDelete.id)
            // console.log(`index: ${indexProd}`);
            // cartList.splice(indexProd,1)

            // Haciendolo de esta manera, detecta el cambio en CartList gracias a usar el set, y asi se  actualiza la vista cartContainer 

            // Recorrer products para encontrar al q corresponda al id de productDelete y devolverle al stock el quantity de productDelete
            let updatedCartList = cartList.filter((prod) => prod.id != productDelete.id);
            setCartList(updatedCartList)
        } else {
            setCartList([])
        }
    }

    return(
        <CartContext.Provider value={ {cartList, setCartList, addProduct, deleteProducts, confirmPurchase} }>
            {children}
        </CartContext.Provider>
    )
}