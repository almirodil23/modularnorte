import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { STATIC_SEO, SITE_URL, DEFAULT_IMAGE } from "../src/seo/staticSeo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const DIST_DIR = path.join(ROOT, "dist");

const mode = process.argv[2] || "--all";
const writePublic = mode === "--public" || mode === "--all";
const writeDist = mode === "--dist" || mode === "--all";

const { default: blogs } = await import(pathToFileURL(path.join(ROOT, "src/data/blogs/blogs.js")));
const { default: faqs } = await import(pathToFileURL(path.join(ROOT, "src/data/faqs.js")));

function cleanText(value = "") {
  return String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(value, max = 158) {
  const text = cleanText(value);
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absoluteUrl(value) {
  if (!value) return `${SITE_URL}${DEFAULT_IMAGE}`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function fileDate(file) {
  try {
    return fs.statSync(file).mtime.toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

const MONTHS = {
  enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06",
  julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12",
};

function spanishDateToIso(value) {
  const match = String(value || "").trim().toLowerCase().match(/^(\d{1,2})\s+([a-záéíóúñ]+)\s+(\d{4})$/i);
  if (!match) return null;
  const [, day, monthName, year] = match;
  const normalized = monthName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const month = MONTHS[normalized];
  if (!month) return null;
  return `${year}-${month}-${day.padStart(2, "0")}`;
}

function readProjects() {
  const dir = path.join(ROOT, "src/data/modularprojects/data");
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => {
      const file = path.join(dir, name);
      try {
        const data = JSON.parse(fs.readFileSync(file, "utf8"));
        if (!data?.slug || !data?.title) return null;
        return {
          ...data,
          sourceFile: file,
          img: data.cover ? `/proyectos/${data.slug}/${data.cover}` : DEFAULT_IMAGE,
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

const projects = readProjects();

function getStaticSourceFile(route) {
  const routeFiles = {
    "/": "src/pages/Home/Home.jsx",
    "/proyectos": "src/pages/Projects.jsx",
    "/contactar": "src/pages/Contact.jsx",
    "/nosotros": "src/pages/Nosotros.jsx",
    "/conocenos": "src/pages/Conocenos.jsx",
    "/blog": "src/data/blogs/blogs.js",
    "/proceso-constructivo": "src/pages/ProcesoConstructivo.jsx",
    "/preguntas-frecuentes": "src/data/faqs.js",
    "/tour-virtual": "src/data/tourVirtual.js",
    "/politica-privacidad": "src/pages/Policy.jsx",
    "/gracias": "src/components/Gracias.jsx",
  };
  return path.join(ROOT, routeFiles[route] || "src/App.jsx");
}

function breadcrumbSchema(route, label) {
  if (route === "/") return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${route}` },
    ],
  };
}

function fixedRouteMeta(route, seo) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": seo.schemaType || "WebPage",
      name: seo.title,
      description: seo.description,
      url: `${SITE_URL}${route === "/" ? "/" : route}`,
      inLanguage: "es-ES",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ];
  if (route === "/preguntas-frecuentes") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: cleanText(faq.question),
        acceptedAnswer: { "@type": "Answer", text: cleanText(faq.answer) },
      })),
    });
  }
  const breadcrumb = breadcrumbSchema(route, seo.title.split("|")[0].trim());
  if (breadcrumb) schemas.push(breadcrumb);
  return {
    route,
    title: seo.title,
    description: seo.description,
    image: DEFAULT_IMAGE,
    type: "website",
    noindex: Boolean(seo.noindex),
    lastmod: fileDate(getStaticSourceFile(route)),
    schemas,
  };
}

const fixedRoutes = Object.entries(STATIC_SEO).map(([route, seo]) => fixedRouteMeta(route, seo));

const projectRoutes = projects.map((project) => {
  const location = cleanText(project.location);
  const route = `/proyecto/${project.slug}`;
  const description = truncate(project.description || `Proyecto de arquitectura modular ${project.title}${location ? ` en ${location}` : ""} realizado por Modular Norte.`);
  return {
    route,
    title: `${project.title}${location ? ` | ${location}` : ""} | Modular Norte`,
    description,
    image: project.img,
    type: "article",
    noindex: false,
    lastmod: fileDate(project.sourceFile),
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description,
        url: `${SITE_URL}${route}`,
        image: absoluteUrl(project.img),
        about: "Arquitectura modular y construcción industrializada",
        creator: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "es-ES",
        ...(location ? { contentLocation: { "@type": "Place", name: location } } : {}),
      },
      breadcrumbSchema(route, project.title),
    ].filter(Boolean),
  };
});

const blogRoutes = blogs.map((blog) => {
  const route = `/blog/${blog.slug}`;
  const published = spanishDateToIso(blog.date);
  const description = truncate(blog.excerpt);
  return {
    route,
    title: `${blog.title} | Modular Norte`,
    description,
    image: blog.image || DEFAULT_IMAGE,
    type: "article",
    noindex: false,
    lastmod: published || fileDate(path.join(ROOT, "src/data/blogs/blogs.js")),
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description,
        image: absoluteUrl(blog.image),
        url: `${SITE_URL}${route}`,
        mainEntityOfPage: `${SITE_URL}${route}`,
        ...(published ? { datePublished: published, dateModified: published } : {}),
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "es-ES",
      },
      breadcrumbSchema(route, blog.title),
    ].filter(Boolean),
  };
});

const allRoutes = [...fixedRoutes, ...projectRoutes, ...blogRoutes];
const indexableRoutes = allRoutes.filter((item) => !item.noindex);

function sitemapXml() {
  const urls = indexableRoutes
    .map(({ route, lastmod }) => `  <url>\n    <loc>${escapeXml(`${SITE_URL}${route === "/" ? "/" : route}`)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function writeSeoPublicFiles(dir) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "sitemap.xml"), sitemapXml(), "utf8");
  fs.writeFileSync(
    path.join(dir, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    "utf8"
  );
}

function replaceHeadTag(html, regex, replacement) {
  return regex.test(html) ? html.replace(regex, replacement) : html.replace("</head>", `  ${replacement}\n</head>`);
}

function renderRouteHtml(baseHtml, meta) {
  const canonical = `${SITE_URL}${meta.route === "/" ? "/" : meta.route}`;
  const image = absoluteUrl(meta.image);
  const robots = meta.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  let html = baseHtml;

  html = replaceHeadTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
  html = replaceHeadTag(html, /<meta\s+[^>]*name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(meta.description)}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*name=["']robots["'][^>]*>/i, `<meta name="robots" content="${robots}" />`);
  html = replaceHeadTag(html, /<link\s+[^>]*rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${meta.type}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${image}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);
  html = replaceHeadTag(html, /<meta\s+[^>]*name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${image}" />`);

  html = html.replace(/\s*<script type="application\/ld\+json" data-static-route-schema="true">[\s\S]*?<\/script>/g, "");
  const routeSchemas = (meta.schemas || [])
    .map((schema) => `    <script type="application/ld+json" data-static-route-schema="true">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`)
    .join("\n");
  if (routeSchemas) html = html.replace("</head>", `${routeSchemas}\n  </head>`);
  return html;
}

function routeOutputPath(route) {
  if (route === "/") return path.join(DIST_DIR, "index.html");
  return path.join(DIST_DIR, `${route.replace(/^\//, "")}.html`);
}

function writeStaticRouteHtml() {
  const indexPath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.warn("dist/index.html no existe; se omite la generación de HTML SEO estático.");
    return;
  }
  const baseHtml = fs.readFileSync(indexPath, "utf8");
  allRoutes.forEach((meta) => {
    const output = routeOutputPath(meta.route);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, renderRouteHtml(baseHtml, meta), "utf8");
  });

  const notFound = {
    route: "/404",
    title: "Página no encontrada | Modular Norte",
    description: "La página que buscas no existe o ha cambiado de dirección.",
    image: DEFAULT_IMAGE,
    type: "website",
    noindex: true,
    schemas: [],
  };
  fs.writeFileSync(path.join(DIST_DIR, "404.html"), renderRouteHtml(baseHtml, notFound), "utf8");
}

if (writePublic) writeSeoPublicFiles(PUBLIC_DIR);
if (writeDist) {
  writeSeoPublicFiles(DIST_DIR);
  writeStaticRouteHtml();
}

console.log(`SEO generado: ${indexableRoutes.length} URLs indexables (${projects.length} proyectos, ${blogs.length} artículos).`);
