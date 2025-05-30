import React from "react";

export default function ProductModal({ producto, onClose }) {
  if (!producto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-4 relative animate-fade-in">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-red-500"
        >
          &times;
        </button>

        {/* Contenido del modal */}
        <div className="flex flex-col md:flex-row items-center p-6 gap-6">
          <img
            src={producto.img}
            alt={producto.nombre}
            className="w-48 h-64 object-cover rounded-lg shadow-md"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{producto.nombre}</h2>
            <p className="text-lg text-red-600 font-semibold">{producto.precio}</p>
            <p className="text-sm line-through text-gray-500 mb-2">{producto.precioAnt}</p>
            <p className="text-yellow-500 text-base mb-4">{producto.estrellas}</p>
            <p className="text-sm text-gray-600">
              Este producto es parte de nuestra colección exclusiva. ¡Aprovechá el precio especial y sumalo a tu carrito!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
