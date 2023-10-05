import { Link } from 'react-router-dom'

export const Item = ({product}) => {
    return(
        <div key={product.id} className="card">
            <div className="card-body ">
                <img className='card-img-top' src={product.imageUrl} alt="imgProduct" />
                <h2 className='card-name'>{product.name}</h2>
                <p className="card-desc">{product.desc}</p>
                <p className='card-price'>${product.price} ARS</p>
            </div>
            <div className="card-footer">
                <Link to={`/id/${product.id}`}>
                    <button className="btn btn-outline-dark">Mas informacion</button>
                </Link>
            </div>
        </div>
    )
}