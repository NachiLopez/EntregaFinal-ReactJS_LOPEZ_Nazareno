
import { Link } from 'react-router-dom'

export const Item = ({product}) => {
    return(
        <div key={product.id} className="card">
            <div className="card-body ">
                <img className='card-img-top' src={product.imageUrl} alt="imgProducto" />
                <h2>{product.name}</h2>
                <p className="desc">{product.desc}</p>
                <p>${product.price} ARS</p>
            </div>
            <div className="card-footer">
                <Link to={`/id/${product.id}`}>
                    <button className="btn btn-outline-dark">Mas informacion</button>
                </Link>
            </div>
        </div>
    )
}