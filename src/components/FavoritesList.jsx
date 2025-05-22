import React from 'react'

export default function FavoritesList() {
  return (
    <div className="listaFavs">
      <h2>Mis favs</h2>
      <div className="gridFavs">
        <div className="cardFav">
          <img src="/assets/prod.jpg" alt="Prod fav" className="imgFav" />
          <p className="nomFav">Nombre</p>
          <button className="btn">Ver</button>
        </div>
      </div>
    </div>
  )
}
