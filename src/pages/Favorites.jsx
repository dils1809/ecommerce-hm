import React from 'react';
import { useFav } from '../context/FavContext';
import ProductCard from '../components/ProductCard';

export default function Favorites() {
  const { favoritos } = useFav();

  return (
    <main className="mainCont">
      <h2>Mis Favoritos</h2>
      <div className="gridProd">
        {favoritos.length === 0 ? (
          <p>No tienes productos en favoritos.</p>
        ) : (
          favoritos.map((prod) => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              nombre={prod.nombre}
              precio={prod.precio}
              precioAnt={prod.precioAnt}
              img={prod.img}
              estrellas={prod.estrellas}
              desdeFavoritos={true}
            />
          ))
        )}
      </div>
    </main>
  );
}
