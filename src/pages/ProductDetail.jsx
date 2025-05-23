import React from 'react'

export default function ProductDetail() {
  return (
    <main className="mainCont">
      <h2>Detalle del producto</h2>
      <div className="detalleProd">
      <img src="/assets/vestido-verde.png" alt="Vestido ceñido" />
        <div className="infoDetalle">
          <h3>Nombre</h3>
          <p>Descripción del producto</p>
          <p>Q. 129.99</p>
          <button className="btn">Agregar</button>
        </div>
      </div>
    </main>
  )
}
