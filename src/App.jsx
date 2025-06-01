import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { FavProvider } from './context/FavContext'

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
