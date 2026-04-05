import { getImgPath } from "@/utils/image";

// Elementos del Menú de Navegación
export const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Producto", href: "#product" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Proceso", href: "#process" },
    { name: "Contacto", href: "#contact" },
];

// Métricas de Contador/Estadísticas
export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "10+",
        description: "Años combinados de experiencia en desarrollo de software e ingeniería de sistemas",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "1+",
        description: "Proyectos completados exitosamente en diversas industrias y tecnologías",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "30+",
        description: "Tecnologías y frameworks que dominamos incluyendo React, Next.js, Node.js y herramientas de IA/ML",
    },
];

// Progreso/Habilidades (mantenido para compatibilidad)
export const Progress = [
    { title: 'Desarrollo Full-Stack', Progress: 95 },
    { title: 'Diseño UX/UI', Progress: 88 },
    { title: 'IA y Aprendizaje Automático', Progress: 85 }
];

// Servicios Ofrecidos (Expandido a 6)
export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Landing Pages y Sitios Web',
        description: 'Landing pages y sitios web corporativos personalizados de alta conversión, construidos con tecnologías modernas como Next.js, React y Tailwind CSS para un rendimiento y experiencia de usuario óptimos.',
        category: 'web',
        href: '/landing-pages'
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Soluciones E-commerce',
        description: 'Desarrollo completo de tiendas en línea con integración de pagos seguros, gestión de inventario, funcionalidad de carrito de compras e interfaces amigables adaptadas a las necesidades de tu negocio.',
        category: 'web',
        href: '/ecommerce'
    },
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Automatización con Zoho',
        description: 'Implementamos y automatizamos procesos empresariales con Zoho (CRM, Projects, Recruit, Flow, Forms), integrando aplicaciones y optimizando flujos de trabajo.',
        category: 'design',
        href: '/zoho'
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Desarrollo de Software y Apps',
        description: 'Soluciones de software personalizadas y aplicaciones móviles adaptadas a los requisitos de tu negocio. Desde el concepto hasta el despliegue, construimos aplicaciones escalables y mantenibles usando las mejores prácticas de la industria.',
        category: 'development',
        href: '/software'
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'IA y Aprendizaje Automático',
        description: 'Soluciones inteligentes aprovechando tecnologías de inteligencia artificial y aprendizaje automático. Desarrollamos modelos predictivos, sistemas de procesamiento de lenguaje natural y herramientas de toma de decisiones automatizadas.',
        category: 'ai',
        href: '/ia'
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Soporte Técnico y Mantenimiento',
        description: 'Soporte continuo, actualizaciones, corrección de errores y mantenimiento para mantener tus sistemas funcionando sin problemas. Proporcionamos asistencia técnica receptiva y monitoreo proactivo para prevenir problemas.',
        category: 'support',
        href: '/soporte'
    },
];

// Datos de Presentación del Producto
export const productData = {
    name: "Sweet Shop Pro",
    tagline: "La solución e-commerce completa para tu pastelería o repostería",
    description: "La Receta Secreta es nuestra plataforma e-commerce especializada diseñada específicamente para tiendas de pastelería y repostería. Gestiona tu catálogo de productos, pedidos personalizados, entregas y pagos en una sola plataforma intuitiva y fácil de usar.",
    features: [
        {
            icon: getImgPath('/images/services/ux-design-product_1.svg'),
            title: "Catálogo de Productos Personalizable",
            description: "Muestra tus pasteles, postres y productos con galerías de imágenes, descripciones detalladas, ingredientes y opciones de personalización"
        },
        {
            icon: getImgPath('/images/services/ux-design-product_2.svg'),
            title: "Gestión de Pedidos Personalizados",
            description: "Permite a tus clientes personalizar pasteles con sabores, tamaños, decoraciones y mensajes especiales para ocasiones únicas"
        },
        {
            icon: getImgPath('/images/services/perfomance-optimization.svg'),
            title: "Sistema de Entregas y Recogida",
            description: "Coordina entregas a domicilio o recogida en tienda con calendario de disponibilidad, zonas de entrega y seguimiento en tiempo real"
        },
        {
            icon: getImgPath('/images/services/ux-design-product_2.svg'),
            title: "Pagos Seguros Integrados",
            description: "Acepta pagos en línea de forma segura con múltiples métodos de pago y genera facturas automáticas para cada pedido"
        }
    ],
    images: [
        {
            src: getImgPath('/images/work-progress/progress-work.png'),
            alt: "Panel de La Receta Secreta",
            type: 'screenshot'
        }
    ],
    demoLink: "#contact",
    learnMoreLink: "#product"
};

// Miembros del Equipo
export const teamMembers = [
    {
        name: "Stephen Alarcon",
        role: "Desarrollador Full-Stack y Especialista en IA",
        image: getImgPath('/images/hero/hero-profile-1.jpg'),
        bio: "Ingeniero de sistemas con más de 4 años de experiencia en desarrollo full-stack e inteligencia artificial. Apasionado por construir soluciones escalables e implementar modelos de aprendizaje automático.",
        expertise: ["React", "Node.js", "Python", "TensorFlow", "AWS", "PostgreSQL"],
        socialLinks: [
            {
                platform: "LinkedIn",
                url: "#",
                icon: getImgPath('/images/footer/linkedin.svg')
            }
        ]
    },
    {
        name: "Jordan Chen",
        role: "Desarrollador Frontend y Diseñador UX",
        image: getImgPath('/images/hero/hero-profile-2.jpg'),
        bio: "Ingeniero de sistemas con más de 4 años de experiencia especializado en desarrollo frontend y diseño de experiencia de usuario. Enfocado en crear aplicaciones web hermosas, accesibles y de alto rendimiento.",
        expertise: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Diseño UI/UX", "Diseño Responsivo"],
        socialLinks: [
            {
                platform: "LinkedIn",
                url: "#",
                icon: getImgPath('/images/footer/linkedin.svg')
            }
        ]
    }
];

// Tech Stack organized by categories
export const techStack = [
    {
        category: "Frontend",
        technologies: [
            { name: "React", icon: getImgPath('/images/documentation/Categories=React.svg'), proficiency: 'expert' },
            { name: "Next.js", icon: getImgPath('/images/documentation/Categories=Nextjs.svg'), proficiency: 'expert' },
            { name: "TypeScript", icon: getImgPath('/images/documentation/Categories=Typescript.svg'), proficiency: 'expert' },
            { name: "Tailwind CSS", icon: getImgPath('/images/documentation/Categories=Tailwind.svg'), proficiency: 'expert' }
        ]
    },
    {
        category: "Backend",
        technologies: [
            { name: "Node.js", proficiency: 'expert' },
            { name: "Python", proficiency: 'expert' },
            { name: "PostgreSQL", proficiency: 'advanced' },
            { name: "MongoDB", proficiency: 'advanced' }
        ]
    },
    {
        category: "AI & Machine Learning",
        technologies: [
            { name: "TensorFlow", proficiency: 'advanced' },
            { name: "PyTorch", proficiency: 'advanced' },
            { name: "OpenAI API", proficiency: 'expert' },
            { name: "Scikit-learn", proficiency: 'advanced' }
        ]
    },
    {
        category: "DevOps & Cloud",
        technologies: [
            { name: "AWS", proficiency: 'advanced' },
            { name: "Docker", proficiency: 'advanced' },
            { name: "Git", proficiency: 'expert' },
            { name: "CI/CD", proficiency: 'advanced' }
        ]
    }
];

// Fases del Proceso/Flujo de Trabajo
export const processPhases = [
    {
        number: 1,
        title: "Descubrimiento y Consulta",
        description: "Comenzamos entendiendo tus objetivos de negocio, audiencia objetivo y requisitos del proyecto. A través de discusiones detalladas, identificamos desafíos y oportunidades para crear una estrategia de solución personalizada.",
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        duration: "1-2 semanas"
    },
    {
        number: 2,
        title: "Diseño y Planificación",
        description: "Nuestro equipo crea wireframes, mockups y planes de arquitectura técnica. Definimos el alcance del proyecto, cronograma e hitos mientras aseguramos la alineación con tu visión y presupuesto.",
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        duration: "2-3 semanas"
    },
    {
        number: 3,
        title: "Desarrollo e Implementación",
        description: "Construimos tu solución usando metodologías ágiles con revisiones regulares y actualizaciones de progreso. Nuestro enfoque iterativo permite flexibilidad y asegura que el producto final cumpla con tus expectativas.",
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        duration: "4-12 semanas"
    },
    {
        number: 4,
        title: "Pruebas y Aseguramiento de Calidad",
        description: "Pruebas rigurosas en dispositivos, navegadores y escenarios aseguran que tu solución esté libre de errores, sea segura y funcione de manera óptima. Realizamos pruebas de aceptación de usuario para validar la funcionalidad.",
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        duration: "1-2 semanas"
    },
    {
        number: 5,
        title: "Despliegue y Lanzamiento",
        description: "Manejamos el proceso completo de despliegue, incluyendo configuración del servidor, configuración de dominio y procedimientos de puesta en marcha. Después del lanzamiento, monitoreamos el rendimiento y proporcionamos soporte inmediato.",
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        duration: "1 semana"
    },
    {
        number: 6,
        title: "Soporte y Mantenimiento",
        description: "Nuestra relación no termina en el lanzamiento. Ofrecemos soporte técnico continuo, actualizaciones regulares, parches de seguridad y mejoras de características para asegurar que tu solución continúe entregando valor.",
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        duration: "Continuo"
    }
];

// Proyectos del Portafolio
export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'La Receta Secreta',
        title: 'La Receta Secreta',
        slug: 'la-receta-secreta',
        type: 'E-commerce',
        shortDescription: 'Plataforma especializada para pastelerías y reposterías con gestión de catálogos y pedidos.',
        url: 'https://develop.d1ne3k4j7n1vp9.amplifyapp.com/',
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'EverFit',
        title: 'EverFit',
        slug: 'everfit',
        type: 'Landing Page',
        shortDescription: 'Diseño moderno de alta conversión para servicios de bienestar y fitness.',
        url: 'https://effortless2026.github.io/EverFit/',
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'AETHER PARFUMS',
        title: 'AETHER PARFUMS',
        slug: 'aether-parfums',
        type: 'E-commerce',
        shortDescription: 'Tienda de lujo minimalista con catálogo interactivo y experiencia premium de fragancias.',
        url: 'https://effortless2026.github.io/Aether-Parfums/',
    }
];