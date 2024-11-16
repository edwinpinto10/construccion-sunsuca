import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Barra de Navegación */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-green-800">SUNSUCA</span>
            </div>

            {/* Enlaces de Navegación (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-green-600">Inicio</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Servicios</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Galería</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Contacto</a>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Área Cliente
              </button>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Menú Móvil */}
          {isMenuOpen && (
            <div className="md:hidden py-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">Inicio</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">Servicios</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">Galería</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">Contacto</a>
              <button className="mt-2 w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Área Cliente
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Sección Hero */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Soluciones agrícolas <span className="text-green-600">sostenibles</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Innovamos en el sector agropecuario con tecnología de punta para 
            el sembrado ecológico y riego automático.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Conoce nuestros servicios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;