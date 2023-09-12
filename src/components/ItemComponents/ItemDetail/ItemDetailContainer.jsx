import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/fetchData";
import {ItemDetailed} from './ItemDetailed.jsx'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {paramID} = useParams()

  useEffect(() => {
    fetchData(Number(paramID))
      .then((resp) => setProduct(resp))
      .catch((error) => console.error("Error al obtener datos:", error))
      .finally(() => setLoading(false));
      console.log(parseInt(paramID));
  }, []);
  console.log(product);

////// ME DICE QUE PARAM ID NO ES UN NUMERO

  return (
    <div className="item-detail">
        {loading ? <h2>Loading...</h2> : <ItemDetailed key={product.id} product={product} />}
    </div>
  );
};
