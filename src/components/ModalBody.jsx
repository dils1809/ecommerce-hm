import React from "react"

export default function ModalBody({ producto }) {
  return (
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={producto.img} alt={producto.nombre} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p><strong>Precio actual:</strong> {producto.precio}</p>
            <p><strong>Precio anterior:</strong> <del>{producto.precioAnt}</del></p>
            <p><strong>Reseñas:</strong> {producto.estrellas}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
