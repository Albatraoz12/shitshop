/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Retrieve the cart from localStorage if it exists, otherwise initialize with an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
