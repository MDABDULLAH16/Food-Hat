'use client'
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const AddToCart = (item) => {
  const [inCart, setInCart] = useState(false)
  const {addToCart}= use(CartContext)
  const handleAddToCart = (item) => {
    setInCart(true)
    addToCart(item)  }

    return (
      <button disabled={inCart} onClick={()=>handleAddToCart(item)} className="flex-1 text-center bg-blue-500 text-white py-2 rounded-xl font-medium disabled:bg-gray-200 disabled:text-black hover:bg-blue-600 transition-colors">
        { inCart?'Added':'Add To Cart'}
      </button>
    );
};

export default AddToCart;