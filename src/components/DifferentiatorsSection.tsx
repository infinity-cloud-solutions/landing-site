import React from 'react';
import { Wrench, Heart, Rocket, Eye, Users, Zap, CheckCircle, X } from 'lucide-react';

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Wrench,
      title: "100% Personalizado desde cero",
      description: "No usamos plantillas. Cada línea de código se escribe específicamente para tu negocio y tus procesos únicos."
    },
    {
      icon: Heart,
      title: "Enfoque personal, no corporativo",
      description: "Trabajas directamente con el desarrollador. Sin intermediarios, sin call centers, sin agentes, sin esperas interminables."
    },
    {
      icon: Rocket,
      title: "Implementación rápida y efectiva",
      description: "Mientras otros tardan meses, nosotros entregamos resultados con entregables cada dos semanas."
    },
    {
      icon: Eye,
      title: "Transparencia total del proceso",
      description: "Ves el progreso día a día, entiendes cada decisión técnica y tienes control total sobre tu proyecto."
    },
    {
      icon: Users,
      title: "Soporte post-entrega",
      description: "No te abandonamos después de entregar. Ajustes, mejoras y soporte técnico post venta."
    },
    {
      icon: Zap,
      title: "Resultados medibles desde día 1",
      description: "Métricas claras, reportes automáticos, ROI visible. Sabes exactamente qué está funcionando y por qué."
    }
  ];

  const comparison = [
    {
      feature: "Soluciones personalizadas",
      us: true,
      them: false
    },
    {
      feature: "Sin costos ocultos",
      us: true,
      them: false
    },
    {
      feature: "Soporte técnico",
      us: true,
      them: false
    },
    {
      feature: "Entrega en 6-8 Semanas",
      us: true,
      them: false
    },
    {
      feature: "Contacto directo con desarrolladores",
      us: true,
      them: false
    },
    {
      feature: "Resultados garantizados",
      us: true,
      them: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por qué somos completamente diferentes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No somos otra empresa de software. Somos especialistas en automatización que entienden los retos únicos de del mercado mexicano.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((diff, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <diff.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">{diff.title.charAt(0).toUpperCase() + diff.title.slice(1).toLowerCase()}</h3>
              <p className="text-gray-300">{diff.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Infinity AI vs. otros proveedores</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 text-gray-300">Característica</th>
                  <th className="text-center py-4 text-orange-400 font-bold">Infinity AI</th>
                  <th className="text-center py-4 text-gray-400">Otros proveedores</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-4 text-gray-300">{item.feature}</td>
                    <td className="text-center py-4">
                      {item.us ? (
                        <CheckCircle className="text-green-400 mx-auto" size={24} />
                      ) : (
                        <X className="text-red-400 mx-auto" size={24} />
                      )}
                    </td>
                    <td className="text-center py-4">
                      {item.them ? (
                        <CheckCircle className="text-green-400 mx-auto" size={24} />
                      ) : (
                        <X className="text-red-400 mx-auto" size={24} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;