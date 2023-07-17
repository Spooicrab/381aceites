import { useState, createContext } from "react";

export const ProductosContext = createContext();

const initialState = () => [];

export const ProductosProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  return (
    <ProductosContext.Provider value={[items, setItems]}>
      {children}
    </ProductosContext.Provider>
  );
};
