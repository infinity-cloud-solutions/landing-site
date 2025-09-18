import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  onContactClick: () => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto cuesta realmente automatizar mi negocio?",
      answer: "El costo varía según tus necesidades específicas, pero la mayoría de nuestros clientes recuperan su inversión en 2-3 meses. Lo importante es que cada peso invertido se traduce en múltiples pesos ahorrados y ganados."
    },
    {
      question: "¿Qué pasa si no entiendo nada de tecnología?",
      answer: "Perfecto - nuestros mejores clientes tampoco sabían de tecnología al principio. Nosotros nos encargamos de toda la parte técnica y te capacitamos de forma súper sencilla para usar tu nueva automatización. Si sabes usar WhatsApp, puedes manejar nuestras soluciones."
    },
    {
      question: "¿En cuánto tiempo veré resultados reales?",
      answer: "Los primeros ahorros de tiempo los ves en la primera semana. El sistema completo funciona en 2-4 semanas máximo. Y el ROI completo lo experimentas típicamente en 60-90 días. No te hacemos esperar meses para ver beneficios."
    },
    {
      question: "¿Qué pasa si mi negocio es muy específico o único?",
      answer: "¡Mejor! Nos especializamos en casos únicos. No vendemos soluciones genéricas - cada sistema lo construimos desde cero para tu negocio específico. Entre más único seas, más ventaja competitiva tendrás con una automatización personalizada."
    },
    {
      question: "¿Ofrecen soporte después de entregar la solución?",
      answer: "Soporte técnico está disponible con costo extra dependiendo el nivel de soporte. No te abandonamos después de entregar - estamos contigo para ajustes, mejoras, preguntas y nuevas necesidades. Tu éxito es nuestro éxito a largo plazo."
    },
    {
      question: "¿Cómo sé que esto no es otra promesa vacía?",
      answer: "Simple: la consulta es 100% gratuita y sin compromiso. Analizamos tu negocio, te mostramos exactamente qué automatizar y cómo, y te daremos una estrategia completa. Si no ves valor inmediato, no hay presión de continuar."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas que otros empresarios nos hacen
          </h2>
          <p className="text-lg text-gray-600">
            Respuestas honestas a las dudas más comunes sobre automatización
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 pt-4 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">¿Tienes otra pregunta específica sobre tu negocio?</p>
          <button onClick={onContactClick} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Contáctanos para consulta gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;