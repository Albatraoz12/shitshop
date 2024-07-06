import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='/logo.svg' alt='logo' height={40} width={50} />
        </Link>
      </div>
      <div className='cart'>
        <Link to='/cart'>
          <img src='/cart.svg' alt='cart' height={40} width={50} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
