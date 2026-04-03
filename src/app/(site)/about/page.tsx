
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | Venus",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="Transformamos ideas en soluciones digitales reales"
        description="Somos un equipo enfocado en desarrollo de software, automatización y soluciones con Zoho para optimizar negocios."
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* Quiénes somos */}
      <section className="bg-white dark:bg-darkmode py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="md:w-3/4 mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6">
              Quiénes somos
            </h2>
            <p className="text-gray dark:text-white/70 text-lg">
              Somos una empresa tecnológica apasionada por crear valor a través de la digitalización. 
              Ayudamos a las empresas a escalar, mejorar sus procesos y aumentar su eficiencia 
              implementando soluciones a la medida con un enfoque analítico y una fuerte base técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="bg-section dark:bg-darklight py-16" id="services">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4">
              Qué hacemos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-darkmode p-8 rounded-lg shadow-service text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-3xl">
                💻
              </div>
              <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-4">
                Desarrollo de Software
              </h3>
              <p className="text-gray dark:text-white/70">
                Creamos aplicaciones web y plataformas robustas, escalables y adaptadas a las necesidades específicas de tu negocio.
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkmode p-8 rounded-lg shadow-service text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-3xl">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-4">
                Automatización
              </h3>
              <p className="text-gray dark:text-white/70">
                Optimizamos tus flujos de trabajo repetitivos para que tu equipo se concentre en tareas de mayor valor.
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkmode p-8 rounded-lg shadow-service text-center" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-3xl">
                📊
              </div>
              <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-4">
                Soluciones con Zoho
              </h3>
              <p className="text-gray dark:text-white/70">
                Implementamos y personalizamos el ecosistema Zoho para centralizar y potenciar la gestión de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro enfoque */}
      <section className="bg-white dark:bg-darkmode py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="md:w-3/4 mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6">
              Nuestro enfoque
            </h2>
            <p className="text-gray dark:text-white/70 text-lg">
              Nos diferenciamos por entender tu negocio antes de escribir una línea de código. 
              No solo desarrollamos por desarrollar; analizamos tus operaciones, detectamos cuellos de botella 
              y aplicamos la automatización y la estructuración de datos como los pilares para el crecimiento sostenible de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <Counter isColorMode={true} />

      {/* CTA Final */}
      <section className="bg-section dark:bg-darklight py-20 text-center">
        <div className="container mx-auto max-w-4xl px-4" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl md:text-5xl font-bold text-midnight_text dark:text-white mb-8">
            ¿Tienes una idea o proceso que quieres optimizar?
          </h2>
          <Link 
            href="/#contact" 
            className="inline-block bg-primary text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Agenda una asesoría
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
