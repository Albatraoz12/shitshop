import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';

const Product = () => {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [hasProduct, setHasProduct] = useState(false);

  // Fetch product details when component mounts or id changes
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      return data;
    };

    fetchProduct();
  }, [id]);

  // Check if the product is already in cart
  useEffect(() => {
    if (product) {
      const productInCart = cart.find((item) => item.id === product.id);
      setHasProduct(!!productInCart); // Set hasProduct to true if product is in cart
    }
  }, [cart, product]);

  // Handle add to cart
  const addToCart = () => {
    const newItem = {
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    const updatedCart = cart.map((item) => {
      if (item.id === newItem.id) {
        // Item is already in the cart, update the quantity
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const hasItem = cart.some((item) => item.id === newItem.id);
    if (!hasItem) {
      // Item is not in the cart, add it
      updatedCart.push(newItem);
    }

    setCart(updatedCart);
    setHasProduct(true); // Update state to reflect item in cart
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
            {hasProduct ? (
              <button className='add-btn' disabled>
                Already in cart!
              </button>
            ) : (
              <button className='add-btn' onClick={addToCart}>
                Add to cart!
              </button>
            )}
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
