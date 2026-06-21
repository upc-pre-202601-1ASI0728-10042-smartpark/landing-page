export type Locale = "es" | "en";

export const content = {
  es: {
    nav: {
      features: "Funcionalidades",
      pricing: "Planes",
      contact: "Contacto",
      cta: "Solicitar demo",
      login: "Acceder al panel",
    },
    hero: {
      title:
        "SmartPark — Gestión inteligente de estacionamientos con gemelo digital 3D",
      subtitle:
        "La plataforma SaaS que transforma la gestión operativa de estacionamientos en centros comerciales.",
      ctaPrimary: "Solicitar demo",
      ctaSecondary: "Descargar app",
      visualLabel: "Vista del gemelo digital 3D",
    },
    video: {
      title: "Conoce SmartPark en acción",
      subtitle:
        "Un recorrido por el gemelo digital 3D, el panel del operador y las alertas de humo geolocalizadas en tiempo real.",
    },
    problem: {
      title: "¿Qué problema resuelve?",
      items: [
        {
          title: "Fragmentación tecnológica",
          description:
            "Sistemas de sensores, cámaras y gestión desconectados que dificultan una visión unificada del estacionamiento.",
        },
        {
          title: "Falta de contexto espacial en alertas",
          description:
            "Alertas sin ubicación precisa en el mapa 3D, lo que retrasa la respuesta operativa ante incidentes.",
        },
      ],
    },
    operators: {
      title: "Para operadores de centros comerciales",
      subtitle:
        "Herramientas pensadas para equipos de facility management y seguridad.",
      items: [
        {
          title: "Visualización en tiempo real",
          description:
            "Mapa 3D interactivo con ocupación, sensores y estado de cada nivel.",
        },
        {
          title: "Resolución rápida",
          description:
            "Alertas geolocalizadas para atender incidentes en segundos, no minutos.",
        },
        {
          title: "Monitoreo de equipos",
          description:
            "Estado de cámaras, sensores y barreras desde un solo panel.",
        },
        {
          title: "Ahorro en iluminación",
          description:
            "Automatización según ocupación para reducir consumo energético.",
        },
      ],
    },
    drivers: {
      title: "Para conductores frecuentes",
      subtitle:
        "Experiencia móvil que reduce fricción al estacionar en centros comerciales.",
      items: [
        {
          title: "Disponibilidad en tiempo real",
          description:
            "Consulta plazas libres por nivel antes de ingresar al estacionamiento.",
        },
        {
          title: "Registro de ubicación (QR)",
          description:
            "Guarda tu plaza con un escaneo y recupera tu vehículo sin perder tiempo.",
        },
        {
          title: "Costo acumulado",
          description:
            "Seguimiento transparente del tiempo y tarifa mientras estacionas.",
        },
        {
          title: "Alertas push de seguridad",
          description:
            "Notificaciones ante eventos relevantes en la zona donde dejaste tu auto.",
        },
      ],
    },
    pricing: {
      title: "Planes y precios",
      subtitle:
        "Escala según el tamaño de tu centro comercial. Todos incluyen soporte y actualizaciones.",
      popular: "Más popular",
      perMonth: "/mes",
      plans: [
        {
          name: "Basic",
          price: "499",
          features: [
            "Gemelo digital 3D (1 nivel)",
            "Dashboard operativo",
            "Hasta 500 plazas",
            "Soporte por email",
          ],
          cta: "Empezar con Basic",
        },
        {
          name: "Professional",
          price: "999",
          highlighted: true,
          features: [
            "Gemelo digital 3D (multi-nivel)",
            "Alertas geolocalizadas",
            "App para conductores",
            "Integración API",
            "Soporte prioritario",
          ],
          cta: "Elegir Professional",
        },
        {
          name: "Enterprise",
          price: "1,999",
          features: [
            "Implementación dedicada",
            "Multi-sede",
            "SLA personalizado",
            "Capacitación in situ",
            "Account manager",
          ],
          cta: "Contactar ventas",
        },
      ],
    },
    contact: {
      title: "¿Interesado en SmartPark?",
      subtitle:
        "Cuéntanos sobre tu centro comercial y te contactaremos con una demo personalizada.",
      name: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa / Centro comercial",
      message: "Mensaje",
      submit: "Enviar mensaje",
      success: "¡Gracias! Te responderemos pronto.",
    },
    footer: {
      tagline:
        "Gemelo digital 3D para la gestión inteligente de estacionamientos.",
      product: "Producto",
      legal: "Legal",
      contact: "Contacto",
      links: {
        features: "Funcionalidades",
        pricing: "Planes",
        demo: "Solicitar demo",
        privacy: "Privacidad",
        terms: "Términos",
      },
      email: "contacto@smartpark.app",
      phone: "+51 999 000 000",
      rights: "© 2026 SmartPark. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      features: "Features",
      pricing: "Plans",
      contact: "Contact",
      cta: "Request demo",
      login: "Operator panel",
    },
    hero: {
      title:
        "SmartPark — Intelligent parking management with a 3D digital twin",
      subtitle:
        "The SaaS platform that transforms operational parking management in shopping centers.",
      ctaPrimary: "Request demo",
      ctaSecondary: "Download app",
      visualLabel: "3D digital twin preview",
    },
    video: {
      title: "See SmartPark in action",
      subtitle:
        "A walkthrough of the 3D digital twin, the operator dashboard and the real-time geolocated smoke alerts.",
    },
    problem: {
      title: "What problem does it solve?",
      items: [
        {
          title: "Technology fragmentation",
          description:
            "Disconnected sensor, camera, and management systems that prevent a unified view of the facility.",
        },
        {
          title: "Lack of spatial context in alerts",
          description:
            "Alerts without precise 3D map location, slowing operational response to incidents.",
        },
      ],
    },
    operators: {
      title: "For shopping center operators",
      subtitle:
        "Tools designed for facility management and security teams.",
      items: [
        {
          title: "Real-time visualization",
          description:
            "Interactive 3D map with occupancy, sensors, and status per level.",
        },
        {
          title: "Fast resolution",
          description:
            "Geolocated alerts to handle incidents in seconds, not minutes.",
        },
        {
          title: "Equipment monitoring",
          description:
            "Camera, sensor, and barrier status from a single panel.",
        },
        {
          title: "Lighting savings",
          description:
            "Occupancy-based automation to reduce energy consumption.",
        },
      ],
    },
    drivers: {
      title: "For frequent drivers",
      subtitle:
        "Mobile experience that reduces friction when parking at malls.",
      items: [
        {
          title: "Real-time availability",
          description:
            "Check free spots per level before entering the parking lot.",
        },
        {
          title: "Location registration (QR)",
          description:
            "Save your spot with a scan and find your vehicle quickly.",
        },
        {
          title: "Accumulated cost",
          description:
            "Transparent tracking of time and rate while you park.",
        },
        {
          title: "Security push alerts",
          description:
            "Notifications for relevant events near where you parked.",
        },
      ],
    },
    pricing: {
      title: "Plans & pricing",
      subtitle:
        "Scale to your mall size. All plans include support and updates.",
      popular: "Most popular",
      perMonth: "/mo",
      plans: [
        {
          name: "Basic",
          price: "499",
          features: [
            "3D digital twin (1 level)",
            "Operations dashboard",
            "Up to 500 spots",
            "Email support",
          ],
          cta: "Start with Basic",
        },
        {
          name: "Professional",
          price: "999",
          highlighted: true,
          features: [
            "3D digital twin (multi-level)",
            "Geolocated alerts",
            "Driver app",
            "API integration",
            "Priority support",
          ],
          cta: "Choose Professional",
        },
        {
          name: "Enterprise",
          price: "1,999",
          features: [
            "Dedicated implementation",
            "Multi-site",
            "Custom SLA",
            "On-site training",
            "Account manager",
          ],
          cta: "Contact sales",
        },
      ],
    },
    contact: {
      title: "Interested in SmartPark?",
      subtitle:
        "Tell us about your mall and we will reach out with a personalized demo.",
      name: "Full name",
      email: "Email address",
      company: "Company / Shopping center",
      message: "Message",
      submit: "Send message",
      success: "Thank you! We will get back to you soon.",
    },
    footer: {
      tagline:
        "3D digital twin for intelligent parking management.",
      product: "Product",
      legal: "Legal",
      contact: "Contact",
      links: {
        features: "Features",
        pricing: "Plans",
        demo: "Request demo",
        privacy: "Privacy",
        terms: "Terms",
      },
      email: "contacto@smartpark.app",
      phone: "+51 999 000 000",
      rights: "© 2026 SmartPark. All rights reserved.",
    },
  },
} as const;

export type Content = (typeof content)[Locale];
