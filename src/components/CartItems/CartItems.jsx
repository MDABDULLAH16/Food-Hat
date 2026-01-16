"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
      const { cart, removeFromCart } = use(CartContext);
    console.log(cart);   
    const handleRemoveCart = (item) => {        
        removeFromCart(item.id);
        
}

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{cart.length} Items Added</h1>

      <div className="grid gap-4">
        {cart.map((cartEntry, index) => {
          // Destructure the internal 'item' object out of the cart entry
          const { item } = cartEntry;

          return (
            <div
              key={item.id || index}
              className="flex items-center justify-between border p-4 mb-2 rounded shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.foodImg}
                  alt={item.title}
                  className="w-8 h-8 rounded"
                />
                <div>
                  <h3 className="font-bold truncate">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-green-600">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveCart(item)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          );
        })}

        {cart.length === 0 && (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartItems;
