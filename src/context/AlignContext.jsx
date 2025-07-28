// src/context/AlignContext.jsx
import React, { createContext, useContext, useState } from "react";

const AlignContext = createContext();

export const AlignProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlignContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AlignContext.Provider>
  );
};

export const useAlign = () => useContext(AlignContext);
