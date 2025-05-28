import React from 'react';
import { useCart } from '../context/CartContext';
import { useFav } from '../context/FavContext';

export default function ProductCard({
  id, nombre, precio, precioAnt, img, estrellas, desdeFavoritos
}) {
  const { agregarProducto } = useCart();
  const { favoritos, toggleFavorito } = useFav();

  const handleAgregar = () => {
    agregarProducto({ id, nombre, precio, img });
  };

  const handleToggleFavorito = () => {
    toggleFavorito({ id, nombre, precio, precioAnt, img, estrellas });
  };

  return (
    <div className="prodCard">
      <div className="prodImgCont">
        <img src={img} alt={nombre} className="prodImg" />
      </div>
      <h3 className="prodTit">{nombre}</h3>
      <div className="estrellas">{estrellas}</div>
      <p className="precioAct">{precio}</p>
      <p className="precioAnt">{precioAnt}</p>
      <div className="acciones">
        <button className="btn" onClick={handleAgregar}>Agregar</button>
        <button className="btn" onClick={handleToggleFavorito}>
          {desdeFavoritos ? 'Eliminar' : 'Favorito'}
        </button>
      </div>
    </div>
  );
}
