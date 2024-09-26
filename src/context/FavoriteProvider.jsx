"use client";

import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [myFavorites, setMyFavorites] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMyFavorites(
        JSON.parse(localStorage.getItem("my_favorites_properties")) || []
      );
    }
  }, []);

  return (
    <FavoriteContext.Provider value={{ myFavorites, setMyFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
