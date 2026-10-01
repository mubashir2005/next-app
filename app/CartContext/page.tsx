"use client";

import { createContext, useState, ReactNode } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type CartContextType = {
  cartProducts: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addToCart: () => {},
  clearCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartProducts((prev) => [...prev, product]);
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}