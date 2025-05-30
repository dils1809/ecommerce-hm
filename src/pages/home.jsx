import React, { useContext, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { CartContext } from '../context/CartContext'

import vestido from '../assets/vestido-verde.png'
import blusa from '../assets/blusa-blanca.png'
import pantalon from '../assets/pantalon-negro.png'
import top from '../assets/top-rojo.png'
import falda from '../assets/falda-beige.png'
import camisa from '../assets/camisa-oversize.png'
import blazer from '../assets/blazer-blanco.png'
import jeans from '../assets/jeans-claros.png'
import abrigo from '../assets/abrigo-gris.png'
import enterizo from '../assets/enterizo-negro.png'

const productos = [
  { id: 1, nombre: 'Vestido ceñido', precio: 'Q.179.99', precioAnt: 'Q.219.99', img: vestido, estrellas: '★★★★☆' },
  { id: 2, nombre: 'Top blanco', precio: 'Q.129.99', precioAnt: 'Q.159.99', img: blusa, estrellas: '★★★★★' },
  { id: 3, nombre: 'Pantalón negro', precio: 'Q.199.99', precioAnt: 'Q.239.99', img: pantalon, estrellas: '★★★☆☆' },
  { id: 4, nombre: 'Top rojo ajustado', precio: 'Q.89.99', precioAnt: 'Q.129.99', img: top, estrellas: '★★★★☆' },
  { id: 5, nombre: 'Falda beige plisada', precio: 'Q.149.99', precioAnt: 'Q.189.99', img: falda, estrellas: '★★★★☆' },
  { id: 6, nombre: 'Camisa oversize café', precio: 'Q.159.99', precioAnt: 'Q.189.99', img: camisa, estrellas: '★★★☆☆' },
  { id: 7, nombre: 'Blazer blanco ', precio: 'Q.229.99', precioAnt: 'Q.269.99', img: blazer, estrellas: '★★★★★' },
  { id: 8, nombre: 'Jeans claros ', precio: 'Q.189.99', precioAnt: 'Q.219.99', img: jeans, estrellas: '★★★☆☆' },
  { id: 9, nombre: 'Abrigo gris', precio: 'Q.299.99', precioAnt: 'Q.349.99', img: abrigo, estrellas: '★★★★☆' },
  { id: 10, nombre: 'Enterizo negro ', precio: 'Q.249.99', precioAnt: 'Q.289.99', img: enterizo, estrellas: '★★★★★' },
]

export default function Home() {
  const { historial } = useContext(CartContext)
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  const recomendaciones = useMemo(() => {
    return productos.filter(p => historial.some(h => h.id !== p.id)).slice(0, 4)
  }, [historial])

  return (
    <main className="mainCont">
      <h2>Productos</h2>
      <div className="gridProd">
        {productos.map((prod) => (
          <ProductCard
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            precioAnt={prod.precioAnt}
            img={prod.img}
            estrellas={prod.estrellas}
            onVerDetalle={setProductoSeleccionado}
          />
        ))}
      </div>

      {historial.length > 0 && (
        <>
          <h2 style={{ marginTop: '2rem' }}>Te puede interesar</h2>
          <div className="gridProd">
            {recomendaciones.map((prod) => (
              <ProductCard
                key={`rec-${prod.id}`}
                id={prod.id}
                nombre={prod.nombre}
                precio={prod.precio}
                precioAnt={prod.precioAnt}
                img={prod.img}
                estrellas={prod.estrellas}
                onVerDetalle={setProductoSeleccionado}
              />
            ))}
          </div>
        </>
      )}

      {productoSeleccionado && (
        <ProductModal
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
        />
      )}
    </main>
  )
}
