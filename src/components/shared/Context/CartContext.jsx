import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (products) => {
    if (cartItems.some((cart) => cart.id === products.id)) {
      alert("Products already added to cart");
    } else {
      setCartItems((prev) => [...prev, products]);
    }
  };

  const cartCount = cartItems.length;
  
  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
