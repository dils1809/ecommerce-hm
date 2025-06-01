import React from 'react'
import Header from '/src/components/Header.jsx'
import Home from '/src/pages/Home.jsx'
import Cart from '/src/pages/Cart.jsx'
import Favorites from '/src/pages/Favorites.jsx'
import ProductDetail from '/src/pages/ProductDetail.jsx'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from '/src/context/CartContext.jsx'
import { FavProvider } from '/src/context/FavContext.jsx'

export default function App() {
  return (
    <CartProvider>
      <FavProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </FavProvider>
    </CartProvider>
  )
}
