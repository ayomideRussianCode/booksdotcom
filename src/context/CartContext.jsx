// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems(prev => {
      // Check if book already exists in cart
      const exists = prev.some(item => item._id === book._id);
      if (exists) {
        return prev;
      }
      // Add book with all necessary properties
      return [...prev, {
        _id: book._id,
        title: book.title,
        coverImage: book.coverImage,
        formats: book.formats || [],
        author: book.author,
        price: book.price
      }];
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems(prev => prev.filter(item => item._id !== bookId));
  };

  const toggleCartItem = (book) => {
    const isInCart = cartItems.some(item => item._id === book._id);
    if (isInCart) {
      removeFromCart(book._id);
    } else {
      addToCart(book);
    }
  };

  return (
    <CartContext.Provider 
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        toggleCartItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}