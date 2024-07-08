import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      return data;
    };
    fetchProduct();
  }, [id]);

  // Handle add to cart
  const addToCart = () => {
    const newItem = {
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
    };

    setCart([...cart, newItem]);
  };

  return (
    <section className='product-container'>
      {product && (
        <>
          <div className='product-image'>
            <figure>
              <img src={product.image} alt={product.category} />
            </figure>
          </div>

          <div className='product-desc-container'>
            <h1>{product.title}</h1>
            <span className='product-price'>{product.price} €</span>
            <button className='add-btn' onClick={addToCart}>
              Add to cart!
            </button>
            <div className='product-desc'>
              <h2>Description</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
