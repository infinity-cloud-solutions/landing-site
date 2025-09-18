import React from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Gift } from 'lucide-react';

interface FinalRecapSectionProps {
  onContactClick: () => void;
}

const FinalRecapSection: React.FC<FinalRecapSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Tu momento de decidir ha llegado
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Puedes seguir perdiendo 20+ horas semanales en tareas manuales... o dar el paso que cambiará tu negocio para siempre.
        </p>

        {/* Final Offer Summary */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Lo que obtienes HOY (valorado en $2,500 MXN)</h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Análisis completo de automatización</h4>
                <p className="text-gray-300 text-sm">Identificamos exactamente qué procesos automatizar para máximo impacto</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Estrategia personalizada completa</h4>
                <p className="text-gray-300 text-sm">Plan detallado con prioridades, timeline y presupuesto realista</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Cálculo de ROI proyectado</h4>
                <p className="text-gray-300 text-sm">Números exactos de ahorro de tiempo y aumento de ingresos</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Hoja de ruta de implementación</h4>
                <p className="text-gray-300 text-sm">Pasos exactos para automatizar tu empresa completa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="space-y-6">
          <button onClick={onContactClick} className="bg-gradient-to-r from-orange-700 to-orange-400 text-white px-12 py-6 rounded-xl text-xl font-bold hover:from-orange-800 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto">
            <Gift size={24} />
            <span>Contáctanos para consulta GRATUITA ahora</span>
            <ArrowRight size={24} />
          </button>
          
          {/* Final Friction Remover */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-orange-200">
            <div className="flex items-center space-x-2">
              <Shield size={16} />
              <span className="text-sm">100% sin riesgo ni compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span className="text-sm">Solo 30 minutos de tu tiempo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift size={16} />
              <span className="text-sm">Estrategia valiosa garantizada</span>
            </div>
          </div>
        </div>

        {/* Scarcity */}
        <div className="mt-8 bg-red-600 bg-opacity-30 border border-red-400 border-opacity-50 rounded-lg p-4">
          <p className="text-red-200 font-semibold">
            🔥 <strong>ÚLTIMAS 4 CONSULTAS DISPONIBLES ESTE MES</strong> - No esperes a enero cuando ya no habrá cupo
          </p>
        </div>

        {/* Final Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Únete a empresarios que ya dieron el paso:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-gray-400">+ Tienda Luna</span>
            <span className="text-gray-400">+ Clínica Salud Total</span>
            <span className="text-gray-400">+ Restaurante Casa María</span>
            <span className="text-gray-400">+ 124 más...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalRecapSection;