import React from "react"

export default function ModalFooter({ onClose, handleAgregar, handleFavorito, enFavoritos }) {
  return (
    <div className="modal-footer d-flex justify-content-between">
      <button className="btn btn-dark" onClick={handleAgregar}>Agregar al carrito</button>
      <button className="btn btn-outline-danger" onClick={handleFavorito}>
        {enFavoritos ? "Eliminar de favoritos" : "Agregar a favoritos"}
      </button>
      <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
    </div>
  )
}
