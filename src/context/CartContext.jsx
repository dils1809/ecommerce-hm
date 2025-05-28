import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((p) => p.id === producto.id)
      if (existente) {
        if (existente.cantidad < 9) {
          return prev.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          )
        }
        return prev
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const vaciarCarrito = () => setCarrito([])

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id))
  }

  const cambiarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1 || nuevaCantidad > 9) return
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: nuevaCantidad } : p
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ carrito, agregarProducto, vaciarCarrito, eliminarProducto, cambiarCantidad }}
    >
      {children}
    </CartContext.Provider>
  )
}
