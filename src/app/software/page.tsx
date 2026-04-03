import React from 'react';
import ServiceTemplate from '@/components/SharedComponent/ServiceTemplate';

export const metadata = {
  title: 'Desarrollo de Software y Apps | EffortLess',
  description: 'Soluciones de software y aplicaciones web/móviles a medida.',
};

export default function SoftwareService() {
  return (
    <ServiceTemplate
      title='Desarrollo de Software y Apps'
      description='Desarrollamos aplicaciones web y móviles personalizadas diseñadas desde cero para resolver problemas operativos específicos de tu negocio, con arquitecturas seguras y altamente escalables.'
      includes={[
        'Arquitectura de software escalable desplegada en la nube',
        'Bases de datos optimizadas y seguras (SQL y NoSQL)',
        'Diseño UI/UX completamente a medida',
        'Desarrollo de APIs RESTful o GraphQL',
        'Fase rigurosa de control de calidad (QA) y Testing'
      ]}
      benefits={[
        'Automatiza flujos de trabajo cerrados y tareas complejas',
        'Disponibilidad total en dispositivos de escritorio y móviles',
        'Propiedad total sobre tu solución tecnológica (sin licencias limitantes)',
        'Adaptación exacta a tus reglas y procesos de negocio'
      ]}
    />
  );
}
