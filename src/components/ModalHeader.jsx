import React from "react"

export default function ModalHeader({ producto, onClose }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{producto.nombre}</h5>
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  )
}
