import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/fetchData";
import {ItemDetailed} from './ItemDetailed.jsx'
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {paramID} = useParams();

  // useEffect(() => {
  //   fetchData(Number(paramID))
  //     .then((resp) => setProduct(resp))
  //     .catch((error) => console.error("Error al obtener datos:", error))
  //     .finally(() => setLoading(false));
  // }, [product]);

  useEffect(()=>{
    const db = getFirestore() // conectar a firestore
    const queryDoc = doc(db, 'products', paramID) // Traer el firestore, dsp la coleccion y dsp el id
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
