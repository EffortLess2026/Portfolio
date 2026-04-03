import React from 'react';
import ServiceTemplate from '@/components/SharedComponent/ServiceTemplate';

export const metadata = {
  title: 'Landing Pages y Sitios Web | EffortLess',
  description: 'Creamos sitios web y landing pages corporativas de alta conversión.',
};

export default function LandingPagesService() {
  return (
    <ServiceTemplate
      title='Landing Pages y Sitios Web'
      description='Creamos sitios web y landing pages corporativas diseñadas específicamente para maximizar la conversión y ofrecer una experiencia de usuario excepcional. Utilizamos tecnologías modernas para asegurar un rendimiento óptimo.'
      includes={[
        'Diseño 100% responsivo y adaptativo',
        'Optimización avanzada SEO On-Page',
        'Integración completa de analíticas (Google Analytics/Tag Manager)',
        'Configuración de dominio y hosting',
        'Formularios de contacto y captura de leads'
      ]}
      benefits={[
        'Aumenta significativamente tu tasa de conversión',
        'Mejora la imagen corporativa y genera confianza',
        'Tiempos de carga ultra-rápidos que retienen usuarios',
        'Presencia digital profesional 24/7'
      ]}
    />
  );
}
