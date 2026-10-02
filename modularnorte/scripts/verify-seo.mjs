import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, "../dist");
const SITEMAP = path.join(DIST_DIR, "sitemap.xml");

function outputPath(pathname) {
  if (pathname === "/") return path.join(DIST_DIR, "index.html");
  if (pathname.endsWith("/")) {
    return path.join(DIST_DIR, pathname.slice(1), "index.html");
  }
  return path.join(DIST_DIR, `${pathname.slice(1)}.html`);
}

if (!fs.existsSync(SITEMAP)) {
  throw new Error("No existe dist/sitemap.xml. Ejecuta npm run build primero.");
}

const xml = fs.readFileSync(SITEMAP, "utf8");
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const errors = [];

if (urls.length !== new Set(urls).size) {
  errors.push("El sitemap contiene URLs duplicadas.");
}

for (const url of urls) {
  const pathname = new URL(url).pathname;
  const file = outputPath(pathname);

  if (!fs.existsSync(file)) {
    errors.push(`Falta HTML para ${pathname}: ${path.relative(DIST_DIR, file)}`);
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  const canonicals = [...html.matchAll(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/gi)];

  if (canonicals.length !== 1) {
    errors.push(`${pathname} contiene ${canonicals.length} canonicals.`);
  } else if (canonicals[0][1] !== url) {
    errors.push(`${pathname} declara ${canonicals[0][1]} en vez de ${url}.`);
  }

  if (!/<meta\s+name=["']robots["']\s+content=["']index, follow, max-image-preview:large["']/i.test(html)) {
    errors.push(`${pathname} no permite indexación.`);
  }

  if (
    (pathname.startsWith("/blog/") || pathname.startsWith("/proyecto/")) &&
    !/<div\s+id=["']root["'][^>]*>[\s\S]*<h1[\s>]/i.test(html)
  ) {
    errors.push(`${pathname} no contiene un H1 estático dentro de #root.`);
  }
}

for (const expected of [
  "https://modularnorte.com/blog/",
  "https://modularnorte.com/proyectos/",
]) {
  if (!urls.includes(expected)) errors.push(`Falta la URL canónica ${expected}.`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`SEO verificado: ${urls.length} URLs únicas con HTML, canonical y robots correctos.`);
}
