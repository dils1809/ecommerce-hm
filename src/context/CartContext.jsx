import React, { createContext, useState, useMemo } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])
  const [historial, setHistorial] = useState([])

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

    if (!historial.find((p) => p.id === producto.id)) {
      setHistorial((prev) => [...prev, producto])
    }
  }

  const agregarAFavoritos = (producto) => {
    if (!historial.find((p) => p.id === producto.id)) {
      setHistorial((prev) => [...prev, producto])
    }
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

  const total = useMemo(() => {
    return carrito.reduce((acc, prod) => acc + parseFloat(prod.precio.replace('Q.', '')) * prod.cantidad, 0)
  }, [carrito])

  const recomendaciones = useMemo(() => {
    return historial.slice(-3)
  }, [historial])

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        agregarAFavoritos,
        vaciarCarrito,
        eliminarProducto,
        cambiarCantidad,
        total,
        historial,
        recomendaciones
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
