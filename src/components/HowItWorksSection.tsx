import React from 'react';
import { MessageSquare, Search, Cog, Rocket, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consulta gratuita (30 min)",
      description: "Analizamos tu negocio, escuchamos tus ideas y necesidades e identificamos oportunidades de automatización.",
      timeframe: "Mismo día"
    },
    {
      icon: Search,
      title: "Análisis profundo de procesos",
      description: "Estudiamos tus flujos de trabajo actuales, puntos de fricción y diseñamos una estrategia personalizada.",
      timeframe: "2-3 días"
    },
    {
      icon: Cog,
      title: "Desarrollo de solución personalizada",
      description: "Creamos tu solución desde cero: chatbots, apps, sistemas de inventario, lo que tu negocio necesite.",
      timeframe: "4-8 semanas"
    },
    {
      icon: Rocket,
      title: "Implementación y capacitación",
      description: "Instalamos todo, capacitamos a tu equipo y nos aseguramos de que funcione perfectamente desde el día 1.",
      timeframe: "2 semanas"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo automatizamos tu negocio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso probado que ha transformado 30+ empresas mexicanas en sistemas automatizados para generar ingresos.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="text-white" size={28} />
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                      {step.timeframe}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title.charAt(0).toUpperCase() + step.title.slice(1).toLowerCase()}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results Timeline */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Tu línea de tiempo de resultados
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Semana 1</h4>
              <p className="text-gray-600 text-sm">Primeras automatizaciones funcionando, ahorro inmediato de 5-8 horas</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">2-3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Semanas 2-3</h4>
              <p className="text-gray-600 text-sm">Sistema completo operando, 15+ horas libres, aumento notable en eficiencia</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Semana 4+</h4>
              <p className="text-gray-600 text-sm">ROI completo, negocio funcionando solo, tú enfocado en crecimiento estratégico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;