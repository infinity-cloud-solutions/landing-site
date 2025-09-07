import React from 'react';
import { Clock, DollarSign, Users, BarChart3, Shield, Zap } from 'lucide-react';

interface BenefitsSectionProps {
  onContactClick: () => void;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onContactClick }) => {
  const benefits = [
    {
      icon: Clock,
      title: "Recupera 20+ Horas Semanales",
      description: "Deja que la AI maneje inventarios, pedidos, citas y respuestas automáticas mientras tú te enfocas en hacer crecer tu empresa."
    },
    {
      icon: DollarSign,
      title: "Aumenta Ingresos 40-60%",
      description: "Procesa más pedidos, atiende más clientes, reduce errores y mejora la experiencia sin contratar personal adicional."
    },
    {
      icon: Users,
      title: "Clientes Más Satisfechos 24/7",
      description: "Respuestas instantáneas en WhatsApp, citas automáticas, seguimiento personalizado que nunca duerme."
    },
    {
      icon: BarChart3,
      title: "Decisiones Basadas en Datos Reales",
      description: "Reportes automáticos, métricas en tiempo real, insights que te permiten tomar mejores decisiones cada día."
    },
    {
      icon: Shield,
      title: "Reduce Errores Humanos 95%",
      description: "Inventarios exactos, pedidos sin errores, citas confirmadas automáticamente, procesos que funcionan perfectamente."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados Que Transforman Tu Empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No vendemos software genérico. Creamos soluciones que resuelven TUS problemas específicos y se adaptan perfectamente a tu forma de trabajar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA in Benefits */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para recuperar tu tiempo y multiplicar tus ingresos?
            </h3>
            <button onClick={onContactClick} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contáctanos para Consulta Gratuita
            </button>
            <p className="text-sm text-gray-500 mt-3">Agenda en menos de 2 minutos • Sin presión de venta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;