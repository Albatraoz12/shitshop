import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart, calculateTotal } = useContext(CartContext);
  console.log(cart);

  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + increment } : item
      )
    );
  };

  const removeItem = (id) => {
    // Remove item from cart state
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    // Remove item from localStorage
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <section className='cart-wrapper'>
      <div className='item-container'>
        <h1>SHOPPING CART ITEMS</h1>
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className='items-container'>
              <div className='cart-image'>
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
              </div>
              <div className='cart-title'>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.price} €</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className='remove-item-btn'
                >
                  Remove
                </button>
                <p>
                  Quantity:
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                    className='btn'
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className='btn'
                  >
                    +
                  </button>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2>No items in your cart!</h2>
        )}
      </div>
      <div className='checkout-container'>
        <h1>ORDER SUMMARY</h1>
        <div className='order-summary'>
          <div className='order-value'>
            <p>Order value</p>
            <span>{calculateTotal()} €</span>
          </div>
          <div className='order-value'>
            <p>Delivery</p>
            <span>0 €</span>
          </div>
        </div>
        <div className='total-value'>
          <h2>Total:</h2>
          <span>{calculateTotal()} €</span>
        </div>
        <Link to='/'>Proceed to checkout</Link>
      </div>
    </section>
  );
};

export default Cart;
