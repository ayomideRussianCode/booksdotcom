import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const toggleCartItem = (item) => {
    setCart((prevCart) => {
      if (prevCart.some((cartItem) => cartItem._id === item._id)) {
        return prevCart.filter((cartItem) => cartItem._id !== item._id); 
      }
      return [...prevCart, item]; 
    });
  };

  return (
    <CartContext.Provider value={{ cart, toggleCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
