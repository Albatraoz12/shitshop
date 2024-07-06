/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='card-container'>
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>
        <span className='card-price'>{product.price} €</span>
        <h2 className='card-title'>{product.title}</h2>
        <p className='card-desc'>{product.description}</p>
      </div>
    </Link>
  );
};

export default Card;
