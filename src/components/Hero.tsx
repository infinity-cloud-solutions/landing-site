import React from 'react';
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          {/* Eyebrow */}
          <div className="inline-flex items-center bg-orange-500 bg-opacity-20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Para Empresarios Mexicanos Exitosos
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Automatiza Tu Negocio y 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400"> Recupera 20 Horas</span> Semanales
          </h1>

          {/* Value Bullets */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
              <span className="text-lg">Soluciones 100% personalizadas desde cero</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-blue-400 flex-shrink-0" size={24} />
              <span className="text-lg">Resultados visibles en 2-4 semanas</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="text-purple-400 flex-shrink-0" size={24} />
              <span className="text-lg">Sin dos soluciones iguales - todo hecho a medida</span>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <button onClick={onContactClick} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2">
              <span>Contáctanos para Consulta GRATUITA</span>
              <ArrowRight size={20} />
            </button>
            
            {/* Friction Remover */}
            <p className="text-sm text-gray-300 flex items-center space-x-2">
              <Shield size={16} />
              <span>Sin compromiso • Consulta 100% gratuita • Solo 30 minutos</span>
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-orange-400">+127 empresarios</span> ya automatizaron sus negocios
            </p>
          </div>
        </div>

        <div className="lg:block hidden">
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Empresario usando automatización AI"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;