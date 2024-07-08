import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
  const { calculateTotal } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <h2>Total: {calculateTotal()} €</h2>
    </div>
  );
};

export default Cart;
