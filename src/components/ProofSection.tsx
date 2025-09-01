import React from 'react';
import { Star, Award, TrendingUp, Clock } from 'lucide-react';

const ProofSection = () => {
  const testimonials = [
    {
      text: "En 3 semanas automatizamos todo el inventario. Ahora trabajo 15 horas menos y vendemos 40% más.",
      name: "Carlos M.",
      business: "Tienda de Electrónicos"
    },
    {
      text: "El chatbot responde el 80% de preguntas de WhatsApp. Mis clientes están más contentos y yo duermo mejor.",
      name: "María L.",
      business: "Consultorio Dental"
    },
    {
      text: "La app de pedidos cambió nuestro restaurante. Cero errores, menos personal, más ganancias.",
      name: "Roberto S.",
      business: "Restaurante Familiar"
    },
    {
      text: "Sistema de citas automático = +60% reservaciones sin contratar a nadie más.",
      name: "Ana P.",
      business: "Salón de Belleza"
    },
    {
      text: "Automatización de reportes me da datos en tiempo real. Tomo mejores decisiones cada día.",
      name: "Miguel T.",
      business: "Distribuidora"
    }
  ];

  const mediaLogos = [
    "Entrepreneur México",
    "Forbes México", 
    "Expansión",
    "El Financiero"
  ];

  return (
    <section id="casos-exito" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados Reales de Empresarios Como Tú
          </h2>
          <p className="text-lg text-gray-600">
            No prometemos milagros. Te mostramos resultados verificables.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Mentions */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Reconocidos Por:</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Award className="text-gray-600" size={20} />
                <span className="text-gray-600 font-semibold">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h4 className="text-3xl font-bold text-blue-600 mb-2">127+</h4>
            <p className="text-gray-600">Empresas Automatizadas</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold text-2xl">%</span>
            </div>
            <h4 className="text-3xl font-bold text-green-600 mb-2">300%</h4>
            <p className="text-gray-600">ROI Promedio</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-purple-600" size={32} />
            </div>
            <h4 className="text-3xl font-bold text-purple-600 mb-2">20h</h4>
            <p className="text-gray-600">Ahorradas por Semana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;