import React from 'react';
import ServiceTemplate from '@/components/SharedComponent/ServiceTemplate';

export const metadata = {
  title: 'Automatización con Zoho | EffortLess',
  description: 'Implementación y automatización de procesos empresariales con el ecosistema Zoho.',
};

export default function ZohoService() {
  return (
    <ServiceTemplate
      title='Automatización con Zoho'
      description='Implementamos el poderoso ecosistema de Zoho para transformar la manera en que operas. Centraliza tus ventas, organiza tus proyectos y automatiza flujos de trabajo repetitivos con integraciones expertas.'
      includes={[
        'Implementación y personalización de Zoho CRM',
        'Automatización de flujos de trabajo con Zoho Flow',
        'Gestión integral de proyectos mediante Zoho Projects',
        'Desarrollo de formularios avanzados con Zoho Forms',
        'Integración bidireccional con aplicaciones de terceros'
      ]}
      benefits={[
        'Ahorro masivo de tiempo en gestión documental y operaciones manuales',
        'Alineación y transparencia total entre equipos de ventas, soporte y administración',
        'Base de datos centralizada y segura de todos tus clientes',
        'Reportes en tiempo real para tomar decisiones más inteligentes'
      ]}
    />
  );
}
