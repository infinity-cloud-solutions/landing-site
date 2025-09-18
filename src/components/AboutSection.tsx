import React from 'react';
import { Users, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conoce al equipo detrás de tu éxito
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Somos un equipo de desarrolladores mexicanos especializados en automatización AI para pequeñas y medianas empresas. Entendemos perfectamente los retos únicos que enfrentas como empresario en México.
              </p>
              
              <p className="text-lg text-gray-700">
                <strong>Nuestra misión es simple:</strong> Liberar a empresarios exitosos de las tareas manuales repetitivas para que puedan enfocarse en lo que realmente importa - hacer crecer su negocio y disfrutar de los frutos de su trabajo.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900">127+</h4>
                  <p className="text-gray-600 text-sm">Empresas transformadas</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="text-orange-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900">98%</h4>
                  <p className="text-gray-600 text-sm">Satisfacción cliente</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900">5+</h4>
                  <p className="text-gray-600 text-sm">Años experiencia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipo de AutomaticoAI trabajando en soluciones personalizadas"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Nuestros valores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">🎯 Resultados primero</h4>
              <p className="text-gray-600 text-sm">No cobramos hasta que veas resultados medibles en tu negocio</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">🤝 Transparencia total</h4>
              <p className="text-gray-600 text-sm">Sabes exactamente qué hacemos, cuándo y por qué en cada paso</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">💡 Innovación práctica</h4>
              <p className="text-gray-600 text-sm">Tecnología de punta aplicada a problemas reales de empresarios mexicanos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;