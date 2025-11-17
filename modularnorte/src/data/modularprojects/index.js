const modules = import.meta.glob('./data/*.json', { eager: true });

let projects = Object.values(modules).map((mod) => {
  const p = mod.default;

  const folder = `/src/data/modularprojects/images/${p.slug}`;

  // Limpia ruta → solo el nombre del archivo
  const cleanName = (path) => path.split('/').pop();

  return {
    ...p,
    img: p.cover ? `${folder}/${cleanName(p.cover)}` : null,
    gallery: p.gallery ? p.gallery.map(g => `${folder}/${cleanName(g)}`) : []
  };
});

export default projects;
