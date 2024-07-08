const Checkout = () => {
  return (
    <form className='form-container'>
      <h2>Your information</h2>
      <div>
        <label htmlFor='fullName'>Full name</label>
        <input type='text' name='fullName' id='fullName' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </div>
      <div>
        <label htmlFor='text'>Phone number</label>
        <input type='phone' name='phonenumber' id='phonenumber' />
      </div>
      <div>
        <label htmlFor='adress'>Home adress</label>
        <input type='url' name='adress' id='adress' />
      </div>
      <div>
        <label htmlFor='city'>City</label>
        <input type='text' name='city' id='city' />
      </div>
      <div>
        <label htmlFor='postCode'>Post code</label>
        <input type='text' name='postCode' id='postCode' />
      </div>

      <button className='link-btn'>Pay purchase</button>
    </form>
  );
};

export default Checkout;
