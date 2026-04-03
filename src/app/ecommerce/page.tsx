import React from 'react';
import ServiceTemplate from '@/components/SharedComponent/ServiceTemplate';

export const metadata = {
  title: 'Soluciones E-commerce | EffortLess',
  description: 'Desarrollo de tiendas en línea con pasarelas de pago y gestión integral.',
};

export default function EcommerceService() {
  return (
    <ServiceTemplate
      title='Soluciones E-commerce'
      description='Construimos tiendas virtuales seguras, rápidas y escalables con funciones avanzadas para que empieces a vender online y gestiones tu inventario y pedidos desde una sola plataforma unificada.'
      includes={[
        'Pasarelas de pago seguras (Stripe, PayPal, MercadoPago)',
        'Gestor intuitivo de catálogo e inventario',
        'Panel de administración de pedidos y envíos',
        'Creación de cupones, promociones y descuentos',
        'Cuentas de usuario y seguimiento de compras'
      ]}
      benefits={[
        'Vende tus productos 24 horas al día, los 7 días de la semana',
        'Expande tu alcance comercial sin fronteras geográficas',
        'Gestión simplificada de ventas que ahorra tiempo operativo',
        'Optimización de la fidelización y experiencia de compra'
      ]}
    />
  );
}
