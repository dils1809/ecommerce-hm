import React from 'react'

export default function SearchPanel({ sugerencias = [] }) {
  return (
    <aside className="panelBusq">
      <h2 className="titBusq">Buscar</h2>
      <div className="sugs">
        {sugerencias.map((sug, i) => (
          <button key={i} className="btn">{sug}</button>
        ))}
      </div>
    </aside>
  )
}
