import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'plants', 'cart'

  const addToCart = (plant) => {
    setCart((prevCart) => ({
      ...prevCart,
      [plant.id]: {
        ...plant,
        quantity: (prevCart[plant.id]?.quantity || 0) + 1
      }
    }));
  };

  const updateQuantity = (plantId, amount) => {
    setCart((prevCart) => {
      const item = prevCart[plantId];
      if (!item) return prevCart;
      
      const newQuantity = item.quantity + amount;
      if (newQuantity <= 0) {
        const { [plantId]: _, ...rest } = prevCart;
        return rest;
      }
      
      return {
        ...prevCart,
        [plantId]: {
          ...item,
          quantity: newQuantity
        }
      };
    });
  };

  const deleteItem = (plantId) => {
    setCart((prevCart) => {
      const { [plantId]: _, ...rest } = prevCart;
      return rest;
    });
  };

  const getTotalCount = () => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      deleteItem,
      getTotalCount,
      getTotalAmount,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);