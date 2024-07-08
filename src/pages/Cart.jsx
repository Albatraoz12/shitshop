import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <p>Cart Value: {cart}</p>
      <button onClick={() => setCart([...cart, 'new Value'])}>
        Update Cart
      </button>
    </div>
  );
};

export default Cart;
