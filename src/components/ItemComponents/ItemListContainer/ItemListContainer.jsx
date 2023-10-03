import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { fetchData } from "../../../utils/fetchData";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {catName} = useParams();

  useEffect(()=>{
    // TEMPORAL PORQUE SE ME TERMINO LA CUOTA DE FIREBASE
    fetchData()
    .then((resp) => setProducts(resp), 
    setLoading(false))
    // METODO A USAR (El de abajo)
    // const db = getFirestore()
    // const queryCollection = collection(db, 'products')
    // const queryFilter = (catName ? query(queryCollection, where('category', '==', catName.toLowerCase())) : queryCollection )
    // getDocs(queryFilter)
    // .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    // .catch(error => console.log(error))
    // .finally(() => setLoading(false))
  }, [catName, products])

  return (
    <div className="item-list-container">
      {loading ? <h2>Loading...</h2> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
