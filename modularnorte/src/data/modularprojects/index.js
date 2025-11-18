const modules = import.meta.glob('./json/*.json', { eager: true });

let projects = Object.values(modules).map((m) => {
  const p = m.default;

  // Carpeta pública donde estarán las imágenes
  const folder = `/projects/${p.slug}`;

  return {
    ...p,
    img: `${folder}/${p.cover.replace("/projects/" + p.slug + "/", "")}`,
    gallery: p.gallery.map((g) =>
      `${folder}/${g.replace("/projects/" + p.slug + "/", "")}`
    ),
  };
});

export default projects;
