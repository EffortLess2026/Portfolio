import React from 'react';
import ServiceTemplate from '@/components/SharedComponent/ServiceTemplate';

export const metadata = {
  title: 'IA y Aprendizaje Automático | EffortLess',
  description: 'Soluciones de Inteligencia Artificial para optimizar decisiones y servicios.',
};

export default function IaService() {
  return (
    <ServiceTemplate
      title='IA y Aprendizaje Automático'
      description='Incorpora el poder de la Inteligencia Artificial a tu empresa. Diseñamos sistemas inteligentes capaces de aprender de tus datos para predecir comportamientos, automatizar atención al cliente y generar valor.'
      includes={[
        'Implementación de Chatbots Inteligentes y Agentes Conversacionales',
        'Desarrollo de modelos de recomendación de productos',
        'Sistemas avanzados de extracción de datos (Web Scraping / Data Mining)',
        'Integración personalizada con APIs modernas (OpenAI, Anthropic)',
        'Entrenamiento de modelos con datos propios de la empresa'
      ]}
      benefits={[
        'Atención automatizada 24/7 sin multiplicar el costo de nómina',
        'Extracción de insights valiosos y análisis profundo de tendencias',
        'Reducción drástica de costos operativos por automatización',
        'Innovación tecnológica que te posiciona por delante de la competencia'
      ]}
    />
  );
}
