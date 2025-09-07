import React from 'react';
import { Gift, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const OfferSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="mr-2" size={16} />
            Oferta Especial - Solo Este Mes
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Consulta de Automatización 100% GRATUITA
          </h2>
          
          <p className="text-xl mb-8 text-orange-100">
            Valorada en $2,500 MXN - Tuya sin costo si actúas hoy
          </p>

          {/* Offer Bullets */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-300 flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-bold mb-1">Análisis Completo de Tu Negocio</h4>
                  <p className="text-orange-100 text-sm">Identificamos exactamente qué automatizar para máximo impacto</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-300 flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-bold mb-1">Estrategia Personalizada de Automatización</h4>
                  <p className="text-orange-100 text-sm">Plan específico con prioridades y timeline realista</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-300 flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-bold mb-1">Cálculo de ROI Proyectado</h4>
                  <p className="text-orange-100 text-sm">Números reales de ahorro de tiempo y aumento de ingresos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-300 flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-bold mb-1">Hoja de Ruta de Implementación</h4>
                  <p className="text-orange-100 text-sm">Pasos exactos para automatizar tu empresa completa</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <button className="bg-white text-orange-600 px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto">
              <span>SÍ, Contáctanos para Consulta GRATUITA</span>
              <ArrowRight size={24} />
            </button>
            
            {/* Friction Removers */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-orange-100">
              <div className="flex items-center space-x-2">
                <Shield size={16} />
                <span className="text-sm">Sin compromiso de compra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span className="text-sm">Solo 30 minutos de tu tiempo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift size={16} />
                <span className="text-sm">Obtienes estrategia sin importar si contratas</span>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="mt-8 bg-red-600 bg-opacity-20 border border-red-400 border-opacity-30 rounded-lg p-4">
            <p className="text-red-200 font-semibold">
              ⚠️ <strong>Solo 12 consultas disponibles este mes</strong> - Agenda la tuya antes de que se agoten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;