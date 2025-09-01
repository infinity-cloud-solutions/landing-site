import React from 'react';
import { Star, TrendingUp, Users, ShoppingCart, Calendar } from 'lucide-react';

const SocialProofSection = () => {
  const customerArchetypes = [
    {
      type: "Dueños de Tiendas/Retail",
      icon: ShoppingCart,
      testimonial: {
        text: "Antes perdía 3 horas diarias actualizando inventario manualmente. Ahora el sistema lo hace automáticamente y tengo reportes en tiempo real. Mis ventas subieron 45% porque nunca me quedo sin stock.",
        name: "Carmen R.",
        business: "Boutique de Ropa, Guadalajara"
      }
    },
    {
      type: "Profesionales de Servicios",
      icon: Calendar,
      testimonial: {
        text: "El sistema de citas automático cambió mi vida. Los clientes reservan 24/7, reciben recordatorios automáticos, y yo me enfoco solo en dar el mejor servicio. Zero cancelaciones de último minuto.",
        name: "Dr. Luis M.",
        business: "Clínica Dental, Ciudad de México"
      }
    },
    {
      type: "Restauranteros",
      icon: Users,
      testimonial: {
        text: "La app de pedidos y el chatbot de WhatsApp manejan el 70% de nuestros pedidos sin errores. Redujimos personal y aumentamos ganancias 35%. Mis clientes están más contentos que nunca.",
        name: "Sofia T.",
        business: "Restaurante Familiar, Monterrey"
      }
    },
    {
      type: "Distribuidores/Mayoristas",
      icon: TrendingUp,
      testimonial: {
        text: "Los reportes automáticos me dan insights que nunca tuve. Sé exactamente qué productos rotan más, cuándo reordenar, y dónde están mis mejores oportunidades. Crecimos 60% en 6 meses.",
        name: "Javier L.",
        business: "Distribuidora, Puebla"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empresarios Como Tú Ya Están Viviendo Estos Resultados
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Descubre cómo otros empresarios mexicanos transformaron sus negocios con automatización personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {customerArchetypes.map((archetype, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <archetype.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">{archetype.type}</h3>
              </div>

              <div className="bg-white bg-opacity-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-gray-200 italic mb-4">
                  "{archetype.testimonial.text}"
                </blockquote>
                <div className="border-t border-white border-opacity-20 pt-4">
                  <p className="font-semibold text-orange-300">{archetype.testimonial.name}</p>
                  <p className="text-sm text-gray-300">{archetype.testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-2xl font-bold text-orange-400 mb-1">127+</h4>
              <p className="text-blue-200 text-sm">Empresas Automatizadas</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-400 mb-1">98%</h4>
              <p className="text-blue-200 text-sm">Satisfacción</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-purple-400 mb-1">300%</h4>
              <p className="text-blue-200 text-sm">ROI Promedio</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-pink-400 mb-1">20h</h4>
              <p className="text-blue-200 text-sm">Ahorradas/Semana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;