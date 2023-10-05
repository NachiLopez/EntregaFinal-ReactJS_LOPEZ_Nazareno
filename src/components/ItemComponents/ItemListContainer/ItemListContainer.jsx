import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {catName} = useParams();

  useEffect(()=>{
    // Puede que no funcione porque se excede la cuota de FireStore y muestra el error en la consola gracias al catch, en ese caso a la medianoche se restablece cada día, hora del Pacífico
    const db = getFirestore()
    const queryCollection = collection(db, 'products')
    const queryFilter = (catName ? query(queryCollection, where('category', '==', catName.toLowerCase())) : queryCollection )
    getDocs(queryFilter)
    .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [catName, products])

  return (
    <div className="item-list-container">
      {loading ? <h2>Loading...</h2> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
