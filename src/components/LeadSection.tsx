import React from 'react';
import { TrendingUp, Target, Lightbulb, Clock, DollarSign, Users } from 'lucide-react';

interface LeadSectionProps {
  onContactClick: () => void;
}

const LeadSection: React.FC<LeadSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-16">
          <div className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg">
            <TrendingUp size={20} />
            <span className="font-semibold">+300% ROI promedio</span>
          </div>
          <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg">
            <Users size={20} />
            <span className="font-semibold">30+ empresas automatizadas</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem Side */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Target className="mr-2" size={16} />
                  El reto que enfrentas
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ¿Trabajas <span className="text-amber-600">EN</span> tu negocio en lugar de <span className="text-blue-600">PARA</span> tu negocio?
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <Clock className="text-amber-500 mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">20+ Horas</h4>
                  <p className="text-gray-600 text-xs">perdidas en tareas manuales</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <DollarSign className="text-red-500 mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Ingresos</h4>
                  <p className="text-gray-600 text-xs">perdidos por ineficiencias</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <Users className="text-purple-500 mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Clientes</h4>
                  <p className="text-gray-600 text-xs">esperando respuestas</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-amber-700">La realidad:</strong> Inventarios manuales, WhatsApp sin parar, citas desorganizadas, pedidos con errores... 
                  <span className="text-gray-600">Tiempo valioso que podrías usar para hacer crecer tu empresa.</span>
                </p>
              </div>
            </div>

            {/* Solution Side */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Lightbulb className="mr-2" size={16} />
                  La solución que necesitas
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Imagina recuperar <span className="text-blue-600">20 horas semanales</span> para estrategia y crecimiento
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Target className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">100% personalizado</h4>
                      <p className="text-gray-600 text-sm">Cada solución diseñada específicamente para TU negocio único</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Clock className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Resultados rápidos</h4>
                      <p className="text-gray-600 text-sm">Automatización funcionando en 4-8 semanas máximo</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <TrendingUp className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI garantizado</h4>
                      <p className="text-gray-600 text-sm">Recuperas tu inversión en 3-4 meses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                ¿Listo para transformar tu negocio en un sistema automatizado que trabaja para ti?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Descubre exactamente cómo automatizar tu negocio específico en una consulta gratuita de 30 minutos
              </p>
              <button onClick={onContactClick} className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contáctanos para consulta gratuita
              </button>
              <p className="text-blue-200 text-sm mt-3">Análisis de tus necedidades • Estrategia valiosa garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSection;