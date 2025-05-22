import React from 'react'

export default function CartItem() {
  return (
    <div className="itemCarrito">
      <img src="/assets/prod.jpg" alt="Prod" className="imgItem" />
      <div className="infoItem">
        <h4>Nombre del prod</h4>
        <p>Precio:</p>
        <div className="cantItem">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}
