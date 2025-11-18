// Carga todos los JSON de la carpeta ./data
const modules = import.meta.glob('./data/*.json', { eager: true });

let projects = Object.values(modules).map((m) => {
  const p = m.default;

  // Carpeta pública de imágenes
  const folder = `/projects/${p.slug}`;

  return {
    ...p,
    img: p.cover ? `${folder}/${p.cover}` : null,
    gallery: p.gallery?.map((g) => `${folder}/${g}`) || []
  };
});

export default projects;
