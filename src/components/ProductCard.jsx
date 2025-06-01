 import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FavContext } from '../context/FavContext'
import { useLocation } from 'react-router-dom'

export default function ProductCard({ id, nombre, precio, precioAnt, img, estrellas, onVerDetalle }) {
  const { agregarProducto } = useContext(CartContext)
  const { favoritos, toggleFavorito } = useContext(FavContext)
  const location = useLocation()

  const enFavoritos = favoritos.some((p) => p.id === id)

  const handleAgregar = (e) => {
    e.stopPropagation()
    agregarProducto({ id, nombre, precio, img })
  }

  const handleFavorito = (e) => {
    e.stopPropagation()
    toggleFavorito({ id, nombre, precio, img })
  }

  return (
<div className="prodCard" onClick={() => onVerDetalle?.({ id, nombre, precio, precioAnt, img, estrellas })}>
      <div className="prodImgCont">
        <img src={img} alt={nombre} className="prodImg" />
      </div>
      <h3 className="prodTit">{nombre}</h3>
      <div className="estrellas">{estrellas}</div>
      <p className="precioAct">{precio}</p>
      <p className="precioAnt">{precioAnt}</p>
      <div className="acciones">
        <button className="btn" onClick={handleAgregar}>Agregar</button>
        {location.pathname === "/favorites" ? (
          <button className="btn" onClick={handleFavorito}>Eliminar</button>
        ) : (
          <button className="btn" onClick={handleFavorito}>
            {enFavoritos ? "Eliminar" : "Favorito"}
          </button>
        )}
      </div>
    </div>
  )
}