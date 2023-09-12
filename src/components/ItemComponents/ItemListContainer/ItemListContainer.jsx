import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css";
import { fetchData } from "../../../utils/fetchData";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetchData()
    .then(resp => setProduct(resp))
    .catch((error) => console.error("Error al obtener datos:", error))
    .finally(() => setLoading(false));
  }, [])

  return (
    <div className="item-list-container">
      {loading ? <h2>Loading...</h2> : <ItemList products={product} />}
    </div>
  );
};

export default ItemListContainer;
