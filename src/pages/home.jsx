import React from 'react'
import ProductCard from '../components/ProductCard'
import vestidoImg from '../assets/vestido-verde.png'

export default function Home() {
  return (
    <main className="mainCont">
      <h2>Productos</h2>
      <div className="gridProd">
       <ProductCard
        nombre="Vestido ceñido"
        precio="Q.179.99"
        precioAnt="Q.219.99"
        img={vestidoImg}
        estrellas="★★★★☆"
      />

      </div>
    </main>
  )
}
