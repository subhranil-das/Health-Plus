import React, { createContext, useState } from 'react';

// Create a context for the shopping cart
export const ShoppingCartContext = createContext();

// Create a provider component
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Increase quantity if item already in cart
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0)); // Remove item if quantity drops to 0
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
