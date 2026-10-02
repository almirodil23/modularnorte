# SEO — Modular Norte

## Qué se ha añadido

- URLs canónicas en español: `/proyectos/`, `/proyecto/:slug`, `/blog/` y `/blog/:slug`.
- Redirecciones 301 desde las URLs antiguas (`/projects`, `/producto/...`, `/blogs...`, `/privacy`).
- `<title>`, meta description, canonical, Open Graph y Twitter Cards específicos por ruta.
- Datos estructurados JSON-LD para empresa, web, breadcrumbs, FAQ, proyectos y artículos del blog.
- `robots.txt` y `sitemap.xml` generados automáticamente.
- HTML SEO específico para cada URL durante el build. El `<head>`, el H1 y el contenido principal de blogs y proyectos ya llegan en la primera respuesta, incluso antes de ejecutar React.
- 404 real y `noindex` para páginas inexistentes y páginas que no interesa indexar (`/gracias`, privacidad).
- Imagen Open Graph real en `public/images/og-modular-norte.jpg` y logo de schema válido.
- Precarga de la imagen principal de la home para ayudar al LCP.

## Build

```bash
npm install
npm run build
```

`npm run build` ejecuta automáticamente:

1. generación de `public/sitemap.xml`;
2. build de Vite;
3. generación de HTML SEO por cada ruta dentro de `dist`;
4. copia final de `sitemap.xml` y `robots.txt` a `dist`.

También puedes regenerar manualmente los archivos SEO con:

```bash
npm run seo
```

Para comprobar que todas las URLs del sitemap tienen HTML, canonical y robots correctos:

```bash
npm run build
npm run seo:check
```

## Google Search Console

Después de desplegar el contenido de `dist` en `https://modularnorte.com`:

1. Comprueba que abre `https://modularnorte.com/robots.txt`.
2. Comprueba que abre `https://modularnorte.com/sitemap.xml`.
3. En Google Search Console entra en **Sitemaps**.
4. Añade `sitemap.xml`.
5. Usa **Inspección de URL** para probar `https://modularnorte.com/proyectos/`, `https://modularnorte.com/blog/` y varias páginas de detalle.
6. Si la prueba en vivo es correcta, solicita la indexación de las páginas prioritarias y pulsa **Validar corrección** en los informes de redirección y canonical.

El sitemap actual contiene 68 URLs indexables: 48 proyectos, 11 artículos y 9 páginas principales.

## Apache / Plesk

El proyecto utiliza `public/.htaccess`. Vite lo copia a `dist/.htaccess`. Es importante que Apache tenga `mod_rewrite` activo y permita `.htaccess` (`AllowOverride`).
