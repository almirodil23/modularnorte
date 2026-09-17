export const SITE_URL = "https://modularnorte.com";
export const SITE_NAME = "Modular Norte";
export const DEFAULT_IMAGE = "/images/og-modular-norte.jpg";

// Estas dos rutas son directorios reales en el build final. Apache las sirve
// con barra final, por lo que sitemap, canonical, enlaces internos y datos
// estructurados deben apuntar siempre a la misma variante.
export const TRAILING_SLASH_ROUTES = new Set(["/blog", "/proyectos"]);

export function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function canonicalPathname(pathname) {
  const normalized = normalizePathname(pathname);
  return TRAILING_SLASH_ROUTES.has(normalized) ? `${normalized}/` : normalized;
}

export function canonicalUrl(pathname) {
  return new URL(canonicalPathname(pathname), SITE_URL).href;
}

export const STATIC_SEO = {
  "/": {
    title: "Casas Modulares en A Coruña y Galicia | Modular Norte",
    description:
      "Diseño y construcción llave en mano de casas modulares en A Coruña y Galicia. Viviendas de madera personalizadas, eficientes y adaptadas a cada terreno.",
    schemaType: "WebPage",
  },
  "/proyectos": {
    title: "Proyectos de Casas Modulares | Modular Norte",
    description:
      "Descubre proyectos reales de viviendas, ampliaciones y arquitectura modular construidos por Modular Norte en Galicia y otras zonas de España.",
    schemaType: "CollectionPage",
  },
  "/contactar": {
    title: "Contacto y Presupuesto de Casa Modular | Modular Norte",
    description:
      "Cuéntanos tu proyecto de vivienda modular. Solicita información y presupuesto a Modular Norte en A Coruña para construir en Galicia y norte de España.",
    schemaType: "ContactPage",
  },
  "/nosotros": {
    title: "Sobre Modular Norte | Arquitectura Modular en Galicia",
    description:
      "Conoce a Modular Norte, especialistas en construcción industrializada con estructura de madera y viviendas modulares llave en mano desde A Coruña.",
    schemaType: "AboutPage",
  },
  "/conocenos": {
    title: "Conócenos | Modular Norte A Coruña",
    description:
      "Descubre el equipo, el sistema constructivo y la filosofía de Modular Norte: diseño, eficiencia energética y construcción modular de madera.",
    schemaType: "AboutPage",
  },
  "/blog": {
    title: "Blog de Casas Modulares y Construcción en Galicia | Modular Norte",
    description:
      "Guías, precios, normativa, terrenos, eficiencia energética y consejos sobre casas modulares y construcción con madera en Galicia.",
    schemaType: "Blog",
  },
  "/proceso-constructivo": {
    title: "Proceso Constructivo de una Casa Modular | Modular Norte",
    description:
      "Conoce paso a paso cómo construimos una vivienda modular: cimentación, estructura de madera, aislamiento, instalaciones y acabados.",
    schemaType: "WebPage",
  },
  "/preguntas-frecuentes": {
    title: "Preguntas Frecuentes sobre Casas Modulares | Modular Norte",
    description:
      "Resolvemos dudas sobre precios, hipotecas, estructura de madera, aislamiento, fuego, garantías, plazos y construcción de casas modulares.",
    schemaType: "FAQPage",
  },
  "/tour-virtual": {
    title: "Tour Virtual de Viviendas Modulares | Modular Norte",
    description:
      "Visita viviendas modulares de Modular Norte mediante nuestros recorridos virtuales y descubre espacios, acabados y soluciones de diseño.",
    schemaType: "CollectionPage",
  },
  "/politica-privacidad": {
    title: "Política de Privacidad | Modular Norte",
    description: "Política de privacidad y protección de datos de Modular Norte.",
    schemaType: "WebPage",
    noindex: true,
  },
  "/gracias": {
    title: "Gracias por contactar | Modular Norte",
    description: "Hemos recibido tu solicitud de contacto.",
    schemaType: "WebPage",
    noindex: true,
  },
};
