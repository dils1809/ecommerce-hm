import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FavContext } from "../context/FavContext"
import ModalContent from "./ProductModalContent"
import "bootstrap/dist/css/bootstrap.min.css"

export default function ProductModal({ producto, onClose }) {
  const { agregarProducto } = useContext(CartContext)
  const { favoritos, toggleFavorito } = useContext(FavContext)

  if (!producto) return null

  const handleAgregar = () => agregarProducto(producto)
  const handleFavorito = () => toggleFavorito(producto)
  const enFavoritos = favoritos.some((p) => p.id === producto.id)

  return (
    <div className="custom-modal-wrapper">
      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalContent
              producto={producto}
              onClose={onClose}
              handleAgregar={handleAgregar}
              handleFavorito={handleFavorito}
              enFavoritos={enFavoritos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
