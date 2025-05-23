import React from 'react'

export default function CartItem({ nombre, precio, cant, img }) {
  return (
    <div className="itemCarrito">
      <img src={img} alt={nombre} className="imgItem" />
      <div className="infoItem">
        <h4>{nombre}</h4>
        <p>{precio}</p>
        <div className="cantItem">
          <button>-</button>
          <span>{cant}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}
