import React from 'react'

export default function Header() {
  return (
    <header className="encabezado">
      <h1 className="logo">H&M</h1>
      <nav className="nav">
        <ul>
          <li>Mujer</li>
          <li>Hombre</li>
          <li>Niños</li>
          <li>Beauty</li>
        </ul>
      </nav>
      <div className="iconos">
        <button>🔍</button>
        <button>👜</button>
      </div>
    </header>
  )
}
