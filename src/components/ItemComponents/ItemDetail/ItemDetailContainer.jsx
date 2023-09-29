import { useEffect, useState } from "react";
import {ItemDetailed} from './ItemDetailed.jsx'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {paramID} = useParams();
  const db = getFirestore() // conectar a firestore
  const queryDoc = doc(db, 'products', paramID) // Traer el firestore, dsp la coleccion y dsp el id

  useEffect(()=>{
    // Traer el documento recien creado
    getDoc(queryDoc)
    .then(resp => ({id: resp.id, ...resp.data()}))
    .then(resp => setProduct(resp))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [product])

  return (
    <div className="item-detail">
        {loading ? <h2>Loading...</h2> : <ItemDetailed key={product.id} product={product} />}
    </div>
  );
};
