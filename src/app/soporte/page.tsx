import React from 'react';
import ServiceTemplate from '@/components/SharedComponent/ServiceTemplate';

export const metadata = {
  title: 'Soporte Técnico y Mantenimiento | EffortLess',
  description: 'Mantenemos tu infraestructura digital segura y funcionando al 100%.',
};

export default function SoporteService() {
  return (
    <ServiceTemplate
      title='Soporte Técnico y Mantenimiento'
      description='El desarrollo es solo el comienzo. Mantenemos tus sistemas y aplicaciones web seguros, actualizados y rápidos, para que tu foco continúe estando en hacer crecer el negocio.'
      includes={[
        'Monitoreo ininterrumpido del rendimiento y tiempo de respuesta',
        'Implementación proactiva de parches de seguridad y actualizaciones de librerías',
        'Planeación y ejecución de copias de seguridad programadas',
        'Refactorización y optimización continua del código existente',
        'Resolución de incidencias con acuerdo de nivel de servicio (SLA) garantizado'
      ]}
      benefits={[
        'Tranquilidad de saber que tu plataforma nunca se queda obsoleta',
        'Prevención anticipada de caídas inesperadas o pérdida de datos',
        'Atención directa y prioritaria por parte del equipo técnico',
        'Ahorro a largo plazo al evitar costosas reestructuraciones integrales'
      ]}
    />
  );
}
