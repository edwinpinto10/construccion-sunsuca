import React from 'react';
import { Menu, X, Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-green-800">SUNSUCA</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600">Inicio</a>
              <a href="/services" className="text-gray-700 hover:text-green-600">Servicios</a>
              <a href="/gallery" className="text-gray-700 hover:text-green-600">Galería</a>
              <a href="/contact" className="text-gray-700 hover:text-green-600">Contacto</a>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Área Cliente
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SUNSUCA</h3>
              <p className="text-green-100">
                Innovando en agricultura sostenible para un futuro mejor
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+57 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contacto@sunsuca.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Calle Principal #123, Ciudad</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-green-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-green-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} SUNSUCA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;