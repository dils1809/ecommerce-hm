import React from 'react'
import './ProductCard.css'

export default function ProductCard() {
  return (
    <div className="prodCard">
      <img src="/assets/prod.jpg" alt="Prod" className="prodImg" />
      <h3 className="prodTit">Nombre del prod</h3>
      <div className="estrellas">★★★★☆</div>
      <p className="precioAct">Precio actual</p>
      <p className="precioAnt">Precio anterior</p>
      <div className="acciones">
        <button className="btn">Agregar</button>
        <button className="btn">❤️</button>
      </div>
    </div>
  )
}
