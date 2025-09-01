import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="ml-3 text-xl font-bold">AutomaticoAI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Especializados en automatización AI para pequeñas y medianas empresas mexicanas. 
              Soluciones 100% personalizadas que transforman tu forma de trabajar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Automatización WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sistemas de Inventario</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apps de Pedidos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chatbots AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automatización de Citas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+52 55 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>hola@automaticoai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AutomaticoAI. Todos los derechos reservados. | 
            <a href="#" className="hover:text-white ml-2">Política de Privacidad</a> | 
            <a href="#" className="hover:text-white ml-2">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;