import { useRef } from 'react'

export default function useFavoritos() {
  const favoritos = useRef([])

  const toggleFavorito = (producto) => {
    const index = favoritos.current.findIndex((p) => p.id === producto.id)
    if (index >= 0) {
      favoritos.current.splice(index, 1) 
    } else {
      favoritos.current.push(producto) 
    }
  }

  const getFavoritos = () => favoritos.current

  return { toggleFavorito, getFavoritos }
}
