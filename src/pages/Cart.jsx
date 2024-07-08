import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
  const { cart, calculateTotal } = useContext(CartContext);
  console.log(cart);
  return (
    <section>
      <h1>Cart</h1>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className='items-container'>
            <div className='cart-image'>
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
            </div>
            <div className='cart-title'>
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      ) : (
        <h2>No items in your cart!</h2>
      )}
      <h2>Total: {calculateTotal()} €</h2>
    </section>
  );
};

export default Cart;
