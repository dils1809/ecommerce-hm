import React from "react"


export default function ProductInfoColumn({
  producto,
  handleAgregar,
  handleFavorito,
  enFavoritos
}) {
  return (
    <div className="col-md-6 d-flex flex-column justify-content-between">
      <div>
        <p><strong>Precio actual:</strong> {producto.precio}</p>
        <p><strong>Precio anterior:</strong> <del>{producto.precioAnt}</del></p>
        <p>
          <strong>Reseñas:</strong>{' '}
          <span className="estrellas">{producto.estrellas}</span>
        </p>

        <p className="mt-4"><strong>Tallas disponibles:</strong></p>
        <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary btn-lg px-5">S</button>
            <button className="btn btn-outline-secondary btn-lg px-5">M</button>
            <button className="btn btn-outline-secondary btn-lg px-5">L</button>

        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-danger" onClick={handleFavorito}>
          {enFavoritos ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>
        <button className="btn btn-dark" onClick={handleAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
