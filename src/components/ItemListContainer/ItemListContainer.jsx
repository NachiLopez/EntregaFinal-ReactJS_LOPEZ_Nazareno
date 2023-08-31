import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { fetchData } from "../../utils/fetchData";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount.jsx'

const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetchData()
    .then(resp => setProduct(resp))
    .catch((error) => console.error("Error al obtener datos:", error))
    .finally(() => setLoading(false), []);
  })

  return (
    <div className="item-list-container">
    <h2>{greeting}</h2>
      <div className="item-list">
      {loading ? <h2>Loading...</h2> : product.map(product => (
        <div className="card" key={product.id}>
            <div className="card-body">
                <img className='card-img-top' src={product.imageUrl} alt="imgProducto" />
                <h2>{product.name}</h2>
                <p className="desc">{product.desc}</p>
                <p>${product.price} ARS</p>
            </div>
            <div className="card-footer">
                <ItemCount></ItemCount>
                <button className="btn btn-outline-dark">Comprar</button>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
