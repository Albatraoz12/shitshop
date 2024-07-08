import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

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
              <p>
                Quantity:
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </p>
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
