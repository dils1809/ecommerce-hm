import React from 'react'

export default function FavoritesList({ favs = [] }) {
  return (
    <div className="listaFavs">
      <h2>Mis favoritos</h2>
      <div className="gridFavs">
        {favs.map((prod, i) => (
          <div key={i} className="cardFav">
            <img src={prod.img} alt={prod.nombre} className="imgFav" />
            <p className="nomFav">{prod.nombre}</p>
            <button className="btn">Ver</button>
          </div>
        ))}
      </div>
    </div>
  )
}
