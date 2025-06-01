import React, { useEffect, useRef } from "react"

export default function ModalTest() {
  const modalRef = useRef(null)

  const abrirModal = () => {
    const modal = new window.bootstrap.Modal(modalRef.current)
    modal.show()
  }

  return (
    <>
      <button className="btn btn-success" onClick={abrirModal}>
        Abrir Modal Test
      </button>

      <div
        className="modal fade"
        tabIndex="-1"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">¡Funciona el modal! 🎉</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <p>Este es un test para asegurarnos que Bootstrap está vivo.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
