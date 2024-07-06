import { Link } from 'react-router-dom';

const Card = () => {
  const item = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  return (
    <Link to={`/product/${item.id}`}>
      <div className='card-container'>
        <figure>
          <img src={item.image} alt={item.title} />
        </figure>
        <span className='card-price'>{item.price} €</span>
        <h2 className='card-title'>{item.title}</h2>
        <p className='card-desc'>{item.description}</p>
      </div>
    </Link>
  );
};

export default Card;
