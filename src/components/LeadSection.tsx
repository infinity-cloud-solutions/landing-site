import React from 'react';
import { TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const LeadSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* USPs */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
              <TrendingUp className="text-green-600" size={20} />
              <span className="text-green-800 font-semibold">+300% ROI promedio en automatización</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-blue-800 font-semibold">127+ empresas automatizadas exitosamente</span>
            </div>
          </div>

          {/* Pain Point */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 text-left">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">¿Te sientes atrapado trabajando EN tu negocio en lugar de trabajar PARA tu negocio?</h3>
                <p className="text-red-700">La mayoría de empresarios exitosos pierden 20+ horas semanales en tareas manuales: inventarios, responder WhatsApp, agendar citas, procesar pedidos... tiempo que podrían usar para hacer crecer su empresa.</p>
              </div>
            </div>
          </div>

          {/* Solution Teaser */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 text-left">
            <div className="flex items-start space-x-3">
              <Lightbulb className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Imagina recuperar esas 20 horas para enfocarte en estrategia y crecimiento</h3>
                <p className="text-blue-700">Nuestras soluciones de automatización AI están diseñadas específicamente para empresarios como tú: exitosos, ambiciosos, pero ahogados en operaciones diarias. <strong>Cada solución es 100% personalizada</strong> porque entendemos que tu negocio es único.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSection;