import React from 'react'
import { Link } from 'react-router-dom'
import { MdSearch, MdPerson, MdFavoriteBorder, MdShoppingBag } from 'react-icons/md'
import logoHM from '../assets/logo-hm.png'

export default function Header() {
  return (
    <header className="encabezado">
      <div className="headLeft">
    <Link to="/">
      <img src={logoHM} alt="Logo H&M" className="logoImg" />
    </Link>
    <nav className="nav">
      <ul className="navLista">
        <li>Mujer</li>
        <li>Hombre</li>
        <li>Niños</li>
        <li>Beauty</li>
      </ul>
    </nav>
  </div>

      <div className="iconos">
        <button className="btnIcono"><MdSearch size={20} /></button>
        <button className="btnIcono"><MdPerson size={20} /></button>
        <Link to="/favorites" className="btnIcono"><MdFavoriteBorder size={20} /></Link>
        <Link to="/cart" className="btnIcono"><MdShoppingBag size={20} /></Link>
      </div>
    </header>
  )
}
