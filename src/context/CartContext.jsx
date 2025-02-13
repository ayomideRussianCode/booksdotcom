import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 
  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]); 
  };

  const updateCartItem = (bookId, format) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === bookId ? { ...item, selectedFormat: format } : item
      )
    );
  };

  const removeFromCart = (bookId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== bookId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
