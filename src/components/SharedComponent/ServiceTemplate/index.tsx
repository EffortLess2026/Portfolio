import React from 'react';
import Link from 'next/link';

interface ServiceTemplateProps {
  title: string;
  description: string;
  includes: string[];
  benefits: string[];
}

const ServiceTemplate = ({ title, description, includes, benefits }: ServiceTemplateProps) => {
  return (
    <section className='pt-32 pb-20 bg-white dark:bg-darkmode text-midnight_text dark:text-white min-h-screen'>
      <div className='container mx-auto max-w-6xl px-4 lg:px-8'>
        {/* Breadcrumb / Back Link */}
        <div className='mb-8'>
          <Link href='/' className='text-sm text-grey hover:text-primary transition-colors inline-flex items-center gap-2'>
            <span>←</span> Volver al inicio
          </Link>
        </div>

        {/* Hero Section */}
        <div className='text-center mb-16' data-aos='fade-up' data-aos-duration='800'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-primary text-sm tracking-wide uppercase'>
              Servicio Destacado
            </span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold mb-6 text-midnight_text dark:text-white leading-tight'>{title}</h1>
          <p className='text-lg md:text-xl text-grey dark:text-white/70 max-w-3xl mx-auto'>
            {description}
          </p>
        </div>

        {/* Features Content */}
        <div className='grid md:grid-cols-2 gap-10 md:gap-16 mb-20'>
          {/* Includes Column */}
          <div className='bg-gray-50 dark:bg-[#1A1A1A] p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5' data-aos='fade-right' data-aos-duration='1000'>
            <h3 className='text-2xl font-bold mb-8 text-midnight_text dark:text-white border-b border-gray-200 dark:border-white/10 pb-4'>
              ¿Qué incluye?
            </h3>
            <ul className='space-y-5'>
              {includes.map((item, idx) => (
                <li key={idx} className='flex gap-4 items-start'>
                  <span className='w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0'></span>
                  <span className='text-lg text-grey dark:text-white/80'>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Column */}
          <div className='bg-blue-50/50 dark:bg-[#151b2b] p-8 md:p-10 rounded-2xl shadow-sm border border-blue-100 dark:border-primary/20' data-aos='fade-left' data-aos-duration='1000'>
            <h3 className='text-2xl font-bold mb-8 text-midnight_text dark:text-white border-b border-blue-200 dark:border-primary/20 pb-4'>
              Beneficios para tu negocio
            </h3>
            <ul className='space-y-5'>
              {benefits.map((item, idx) => (
                <li key={idx} className='flex gap-4 items-start'>
                  <span className='text-success flex-shrink-0 text-xl font-bold'>✓</span>
                  <span className='text-lg text-grey dark:text-white/80'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center' data-aos='zoom-in' data-aos-duration='800'>
          <h4 className='text-2xl font-bold mb-6 text-midnight_text dark:text-white'>¿Listo para llevar tu proyecto al siguiente nivel?</h4>
          <Link
            href='/#contact'
            className='inline-flex items-center gap-2 py-4 px-10 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg'>
            Solicitar cotización
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceTemplate;
