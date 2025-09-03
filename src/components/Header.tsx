import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className={`ml-3 text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Infinity AI Cloud Solutions
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#beneficios" className={`transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Beneficios
              </a>
              <a href="#como-funciona" className={`transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Cómo Funciona
              </a>
              <a href="#casos-exito" className={`transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Casos de Éxito
              </a>
            </nav>
            <a href="tel:+525512345678" className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'
            }`}>
              <Phone size={16} />
              <span className="font-semibold">Llamar Ahora</span>
            </a>
          </div>

          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-3">
              <a href="#beneficios" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Beneficios
              </a>
              <a href="#como-funciona" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Cómo Funciona
              </a>
              <a href="#casos-exito" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Casos de Éxito
              </a>
              <a href="tel:+525512345678" className="block mx-4 py-3 bg-blue-600 text-white text-center rounded-lg font-semibold">
                Llamar Ahora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;