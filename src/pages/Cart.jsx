import React from 'react'
import CartItem from '../components/CartItem'

export default function Cart() {
  return (
    <main className="mainCont">
      <h2>Carrito</h2>
      <CartItem />
      <CartItem />
      <div className="resumenCarrito">
        <p>Subtotal:</p>
        <p>Total:</p>
        <button className="btn">Pagar</button>
        <button className="btn">Vaciar</button>
      </div>
    </main>
  )
}
