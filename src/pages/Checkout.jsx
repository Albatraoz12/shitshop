import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import { useContext, useState } from 'react';

const Checkout = () => {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setCart([]);
      navigate('/purchase-complete');
    }, 1000);

    return payload;
  };

  return (
    <form className='form-container' onSubmit={submitForm}>
      <h2>Your information</h2>
      <div>
        <label htmlFor='fullName'>Full name</label>
        <input type='text' name='fullName' id='fullName' required />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' required />
      </div>
      <div>
        <label htmlFor='text'>Phone number</label>
        <input type='phone' name='phonenumber' id='phonenumber' required />
      </div>
      <div>
        <label htmlFor='adress'>Home adress</label>
        <input type='text' name='adress' id='adress' required />
      </div>
      <div>
        <label htmlFor='city'>City</label>
        <input type='text' name='city' id='city' required />
      </div>
      <div>
        <label htmlFor='postCode'>Post code</label>
        <input type='text' name='postCode' id='postCode' required />
      </div>

      <button disabled={isLoading} type='submit' className='link-btn'>
        {isLoading ? 'Loading...' : 'Pay purchase'}
      </button>
    </form>
  );
};

export default Checkout;
