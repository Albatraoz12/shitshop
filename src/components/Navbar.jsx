import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Calculate total number of items in cart
  const cartItemCount = cart.length;

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='/logo.svg' alt='logo' height={40} width={50} />
          <span>Shitstore</span>
        </Link>
      </div>
      <div className='cart'>
        <Link to='/cart'>
          <img src='/cart.svg' alt='cart' height={40} width={50} />
          {cartItemCount > 0 && (
            <span className='cart-count'>{cartItemCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
