import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import blogs from "../data/blogs/blogs";
import projects from "../data/modularprojects";
import faqs from "../data/faqs";

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_IMAGE,
  STATIC_SEO,
  canonicalPathname,
  canonicalUrl,
  normalizePathname,
} from "./staticSeo";


const SPANISH_MONTHS = {
  enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06",
  julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12",
};

function spanishDateToIso(value) {
  const match = String(value || "").trim().toLowerCase().match(/^(\d{1,2})\s+([a-záéíóúñ]+)\s+(\d{4})$/i);
  if (!match) return null;
  const [, day, monthName, year] = match;
  const normalized = monthName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const month = SPANISH_MONTHS[normalized];
  return month ? `${year}-${month}-${day.padStart(2, "0")}` : null;
}

const LEGACY_CANONICALS = {
  "/projects": "/proyectos/",
  "/blogs": "/blog/",
  "/privacy": "/politica-privacidad",
};

function cleanText(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value, max = 158) {
  const text = cleanText(value);
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

function absoluteUrl(value) {
  if (!value) return `${SITE_URL}${DEFAULT_IMAGE}`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function breadcrumbSchema(path, label) {
  if (path === "/") return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: canonicalUrl(path),
      },
    ],
  };
}

function getSeo(pathname) {
  const path = normalizePathname(pathname);

  if (STATIC_SEO[path]) {
    const base = STATIC_SEO[path];
    const canonicalPath = canonicalPathname(path);
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": base.schemaType || "WebPage",
        name: base.title,
        description: base.description,
        url: canonicalUrl(canonicalPath),
        inLanguage: "es-ES",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    ];

    if (path === "/preguntas-frecuentes") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: cleanText(faq.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: cleanText(faq.answer),
          },
        })),
      });
    }

    const breadcrumb = breadcrumbSchema(canonicalPath, base.title.split("|")[0].trim());
    if (breadcrumb) schemas.push(breadcrumb);

    return {
      ...base,
      path: canonicalPath,
      image: DEFAULT_IMAGE,
      type: "website",
      schemas,
    };
  }

  const projectMatch = path.match(/^\/proyecto\/([^/]+)$/);
  if (projectMatch) {
    const project = projects.find((item) => item.slug === projectMatch[1]);
    if (project) {
      const location = cleanText(project.location);
      const description = truncate(
        project.description ||
          `Proyecto de arquitectura modular ${project.title}${location ? ` en ${location}` : ""} realizado por Modular Norte.`
      );
      const title = `${project.title}${location ? ` | ${location}` : ""} | Modular Norte`;
      const canonicalPath = `/proyecto/${project.slug}`;
      return {
        title,
        description,
        path: canonicalPath,
        image: project.img || DEFAULT_IMAGE,
        type: "article",
        schemas: [
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description,
            url: canonicalUrl(canonicalPath),
            image: absoluteUrl(project.img),
            about: "Arquitectura modular y construcción industrializada",
            creator: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "es-ES",
            ...(location
              ? {
                  contentLocation: {
                    "@type": "Place",
                    name: location,
                  },
                }
              : {}),
          },
          breadcrumbSchema(canonicalPath, project.title),
        ].filter(Boolean),
      };
    }
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const blog = blogs.find((item) => item.slug === blogMatch[1]);
    if (blog) {
      const canonicalPath = `/blog/${blog.slug}`;
      const description = truncate(blog.excerpt);
      const published = spanishDateToIso(blog.date);
      return {
        title: `${blog.title} | Modular Norte`,
        description,
        path: canonicalPath,
        image: blog.image || DEFAULT_IMAGE,
        type: "article",
        schemas: [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description,
            image: absoluteUrl(blog.image),
            url: canonicalUrl(canonicalPath),
            mainEntityOfPage: canonicalUrl(canonicalPath),
            ...(published ? { datePublished: published, dateModified: published } : {}),
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "es-ES",
          },
          breadcrumbSchema(canonicalPath, blog.title),
        ].filter(Boolean),
      };
    }
  }

  // URLs antiguas: canonical hacia la nueva URL hasta que se produzca la redirección.
  if (LEGACY_CANONICALS[path]) {
    const canonicalPath = canonicalPathname(LEGACY_CANONICALS[path]);
    return {
      ...(STATIC_SEO[normalizePathname(canonicalPath)] || STATIC_SEO["/"]),
      path: canonicalPath,
      image: DEFAULT_IMAGE,
      noindex: true,
      schemas: [],
    };
  }

  const legacyProjectMatch = path.match(/^\/producto\/([^/]+)$/);
  if (legacyProjectMatch) {
    const canonicalPath = `/proyecto/${legacyProjectMatch[1]}`;
    const seo = getSeo(canonicalPath);
    return { ...seo, path: canonicalPath, noindex: true };
  }

  const legacyBlogMatch = path.match(/^\/blogs\/([^/]+)$/);
  if (legacyBlogMatch) {
    const canonicalPath = `/blog/${legacyBlogMatch[1]}`;
    const seo = getSeo(canonicalPath);
    return { ...seo, path: canonicalPath, noindex: true };
  }

  return {
    title: "Página no encontrada | Modular Norte",
    description: "La página que buscas no existe o ha cambiado de dirección.",
    path,
    image: DEFAULT_IMAGE,
    type: "website",
    noindex: true,
    schemas: [],
  };
}

function upsertMeta(selector, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function SeoManager() {
  const { pathname } = useLocation();
  const seo = useMemo(() => getSeo(pathname), [pathname]);

  useEffect(() => {
    const canonical = canonicalUrl(seo.path);
    const image = absoluteUrl(seo.image);
    const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

    document.title = seo.title;
    document.documentElement.lang = "es";

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: seo.type || "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    document.querySelectorAll('script[data-route-schema="true"]').forEach((node) => node.remove());
    (seo.schemas || []).forEach((schema) => {
      if (!schema) return;
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.routeSchema = "true";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [seo]);

  return null;
}
