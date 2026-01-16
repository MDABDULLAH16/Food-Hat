'use client'
import React, { createContext, useState } from 'react';

export const CartContext =createContext()
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([item,...cart])
    }
    const removeFromCart = (id) => {
        console.log(id);
        
        const remainingItem = cart.filter(i => i.item.id !== id);
        setCart(remainingItem)
    }
    const cartItems = {
      addToCart,
      cart,
      setCart,
      removeFromCart,
    };
    return (
        <CartContext value={cartItems}>
            {children}
        </CartContext>
    );
};

export default CartProvider;