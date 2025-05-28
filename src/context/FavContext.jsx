import { createContext, useState, useContext } from 'react';

export const FavContext = createContext();

export function FavProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (producto) => {
    const existe = favoritos.some((item) => item.id === producto.id);
    if (existe) {
      setFavoritos(favoritos.filter((item) => item.id !== producto.id));
    } else {
      setFavoritos([...favoritos, producto]);
    }
  };

  return (
    <FavContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavContext.Provider>
  );
}

export const useFav = () => useContext(FavContext);
    