import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { FavProvider } from './context/FavContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavProvider>
    </BrowserRouter>
  </React.StrictMode>
)
