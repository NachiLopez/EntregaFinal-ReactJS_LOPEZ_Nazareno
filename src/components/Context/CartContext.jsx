import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"
import { addDoc, collection, doc, getFirestore, writeBatch } from "firebase/firestore"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const db = getFirestore()
    const ordersColecction = collection(db, 'orders')
    const batch = writeBatch(db)

    const addProduct = (newProduct) =>{
        setCartList(
            [...cartList, newProduct]
        )
    }

    const confirmPurchase = (productsPurchase, totalAmount, formData) => {
        const order ={}
        order.buyer = formData
        order.products = productsPurchase.map(prod => ({id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}))
        order.total = totalAmount
        addDoc(ordersColecction, order)
        .then(({id}) => {
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada con exito',
                html: `Tu <span>ID</span> del pedido: <span style="text-decoration:underline;">${id}</span>`
            }).then(()=> setCartList([]))
        })
        // Los productos que se encontraron en la compra, los ubico en la BD y le resto el stock correspondiente
        productsPurchase.forEach(prod => {
            let queryProduct = doc(db, "products", prod.id)
            batch.update(queryProduct, {
                // No me di cuenta que solo restaba uno así que lo cambie a prod.quantity y tengo q verificar que funcione
                stock: (prod.stock-prod.quantity)
            })
        });
        batch.commit()
    }

    const deleteProducts = (productDelete) => {
        if(productDelete){
            // Recorrer products para encontrar al que corresponda al id de productDelete y devolverle al stock el quantity de productDelete
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