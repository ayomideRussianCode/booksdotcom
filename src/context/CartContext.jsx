import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems(prev => {
      const exists = prev.some(item => item._id === book._id);
      if (exists) {
        return prev;
      }
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

  const updateCartItem = (bookId, format) => {
    setCartItems((prev) => prev.map((item) => item._id===bookId ? {...item,selectedFormat: format } : item ))
  }
  
  const removeFromCart = (bookId) => {
    setCartItems((prev) => {
      console.log("Cart before removal:", prev);
      const newCart = prev.filter((item) => item._id !== bookId);
    console.log("cart after removal:", newCart);
    return newCart;
  });
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
        updateCartItem,
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