import React, { useContext, useMemo } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const { carrito, vaciarCarrito, cambiarCantidad, eliminarProducto } = useContext(CartContext)

  const total = useMemo(() => {
    return carrito.reduce((acc, prod) => acc + parseFloat(prod.precio.replace('Q.', '')) * prod.cantidad, 0)
  }, [carrito])

  return (
    <main className="mainCont">
      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="listaCarrito">
            {carrito.map((prod) => (
              <li key={prod.id} className="itemCarrito">
                <img src={prod.img} alt={prod.nombre} className="imgCarrito" />
                <div className="infoCarrito">
                  <h3>{prod.nombre}</h3>
                  <p>{prod.precio}</p>
                  <div className="contControles">
                    <button className="btn" onClick={() => cambiarCantidad(prod.id, prod.cantidad - 1)}>-</button>
                    <span>{prod.cantidad}</span>
                    <button className="btn" onClick={() => cambiarCantidad(prod.id, prod.cantidad + 1)}>+</button>
                  </div>
                  <button className="btnEliminar" onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="totales">
            <p>Subtotal: Q.{total.toFixed(2)}</p>
            {total > 999.99 && <p className="error">¡ERROR! Total excede Q.999.99</p>}
            <button className="btn" onClick={vaciarCarrito}>Vaciar carrito</button>
            <button className="btn">Comprar</button>
          </div>
        </div>
      )}
    </main>
  )
}
