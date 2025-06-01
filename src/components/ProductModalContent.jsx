import React from "react"

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
            <div className="col-md-6 d-flex flex-column justify-content-between" style={{ minHeight: '100%' }}>
              <div>
                <p><strong>Precio actual:</strong> {producto.precio}</p>
                <p><strong>Precio anterior:</strong> <del>{producto.precioAnt}</del></p>
                <p><strong>Reseñas:</strong> {producto.estrellas}</p>
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
          </div>
        </div>
      </div>

      <div className="modal-footer justify-content-end">
        <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
      </div>
    </>
  )
}
