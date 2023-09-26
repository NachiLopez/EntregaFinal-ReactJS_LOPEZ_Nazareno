import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css";
import { fetchData } from "../../../utils/fetchData";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {catName} = useParams();

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'products')
    const queryFilter = (catName ? query(queryCollection, where('category', '==', catName.toLowerCase())) : queryCollection )
    getDocs(queryFilter)
    .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [catName])
  
  // useEffect(() =>{
  //   if (catName) {
  //     fetchData()
  //     .then(resp => setProducts(resp.filter(product => product.category == catName)))
  //     .catch((error) => console.error("Error al obtener datos:", error))
  //     .finally(() => setLoading(false));
  //   } else {
  //     fetchData()
  //     .then(resp => setProducts(resp))
  //     .catch((error) => console.error("Error al obtener datos:", error))
  //     .finally(() => setLoading(false));
  //   }
  // }, [catName])

  return (
    <div className="item-list-container">
      {loading ? <h2>Loading...</h2> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
