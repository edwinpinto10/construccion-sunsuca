import React from 'react';
import Layout from './components/layout/Layout';
import React from 'react';
import { ArrowRight, Leaf, Droplets, Recycle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  const services = [
    {
      title: "Sembrado Ecológico",
      description: "Implementamos técnicas de agricultura sostenible que respetan el medio ambiente",
      icon: <Leaf className="w-12 h-12 text-green-600" />
    },
    {
      title: "Riego Automático",
      description: "Sistemas inteligentes de irrigación para optimizar el uso del agua",
      icon: <Droplets className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Procesamiento de Residuos",
      description: "Convertimos residuos biológicos en recursos valiosos",
      icon: <Recycle className="w-12 h-12 text-green-700" />
    },
    {
      title: "Capacitaciones",
      description: "Formación especializada en agricultura sostenible",
      icon: <Users className="w-12 h-12 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">SUNSUCA</h1>
          <p className="text-xl text-white mb-8">Innovación en Agricultura Sostenible</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
            Conoce Nuestros Servicios
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            ¿Listo para transformar tu agricultura?
          </h2>
          <p className="text-lg mb-8">
            Únete a la revolución de la agricultura sostenible con SUNSUCA
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
              Agenda una Cita
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full">
              Ver Galería
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

