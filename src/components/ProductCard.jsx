import React from 'react'

export default function ProductCard({ nombre, precio, precioAnt, img, estrellas }) {
  return (
    <div className="prodCard">
      <img src={img} alt={nombre} className="prodImg" />
      <h3 className="prodTit">{nombre}</h3>
      <div className="estrellas">{estrellas}</div>
      <p className="precioAct">{precio}</p>
      <p className="precioAnt">{precioAnt}</p>
      <div className="acciones">
        <button className="btn">Agregar</button>
        <button className="btn">Favorito</button>
      </div>
    </div>
  )
}
