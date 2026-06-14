import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const addHandler = (product) => {
    setShoppingCart((prev) => {
      const exitingProduct = prev.find((item) => item.id === product.id);
      if (exitingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const totalItems = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);
  const increase = (id) => {
    setShoppingCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decrease = (id) => {
    setShoppingCart((prev) => {
      const existingProduct = prev.find((item) => item.id === id);

      if (!existingProduct) return prev;

      if (existingProduct.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }

      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };
  return (
    <CartContext.Provider
      value={{ addHandler, totalItems, shoppingCart, increase, decrease }}
    >
      {children}
    </CartContext.Provider>
  );
};
