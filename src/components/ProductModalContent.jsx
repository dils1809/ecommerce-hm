import React from "react"
import ProductInfoColumn from "./ProductInfoColumn"
import "../pages/InfoProducto.css"

export default function ModalContent({
  producto,
  onClose,
  handleAgregar,
  handleFavorito,
  enFavoritos
}) {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">{producto.nombre}</h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>

      <div className="modal-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={producto.img} alt={producto.nombre} className="img-fluid" />
            </div>

            <ProductInfoColumn
              producto={producto}
              handleAgregar={handleAgregar}
              handleFavorito={handleFavorito}
              enFavoritos={enFavoritos}
            />
          </div>
        </div>
      </div>

      <div className="modal-footer justify-content-end">
        <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
      </div>
    </>
  )
}
