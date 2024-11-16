import React from 'react';
import { Sprout, Droplet, Leaf, Recycle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: 'Sembrado Ecológico',
      description: 'Implementamos técnicas de agricultura sostenible que respetan el medio ambiente.'
    },
    {
      icon: <Droplet className="h-12 w-12 text-green-600" />,
      title: 'Riego Automático',
      description: 'Sistemas inteligentes de riego que optimizan el uso del agua.'
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: 'Cuidado Ambiental',
      description: 'Prácticas agrícolas que preservan la biodiversidad y los recursos naturales.'
    },
    {
      icon: <Recycle className="h-12 w-12 text-green-600" />,
      title: 'Gestión de Residuos',
      description: 'Procesamiento eficiente de residuos biológicos para su aprovechamiento.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Agricultura</span>
                <span className="block text-green-600">Inteligente y Sostenible</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                En SUNSUCA transformamos la agricultura tradicional con tecnología 
                de punta y prácticas sostenibles para un futuro más verde.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Conoce Nuestros Servicios
                </button>
                <button className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
            <p className="mt-4 text-lg text-gray-600">
              Soluciones integrales para la agricultura moderna
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Tecnología Avanzada',
                description: 'Utilizamos las últimas tecnologías en agricultura de precisión.'
              },
              {
                title: 'Sostenibilidad',
                description: 'Comprometidos con prácticas agrícolas sostenibles y respetuosas.'
              },
              {
                title: 'Experiencia',
                description: 'Años de experiencia en el sector agrícola y ambiental.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:py-20 md:px-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para transformar tu agricultura?
              </h2>
              <p className="text-lg mb-8">
                Contáctanos hoy y descubre cómo podemos ayudarte a implementar
                soluciones agrícolas sostenibles.
              </p>
              <button className="px-8 py-3 bg-white text-green-600 rounded-md hover:bg-gray-100">
                Programa una consulta
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;