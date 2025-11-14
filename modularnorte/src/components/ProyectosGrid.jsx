

export function ProyectosGrid() {
const proyectos = [
{ titulo: 'Project 180', img: '/recurso/articulo/portada_project_180_aspe.jpg', link: 'producto/117/project-180' },
{ titulo: 'Project 140', img: '/recurso/articulo/1_3.jpg', link: 'producto/57/project-140' },
{ titulo: 'Project 170', img: '/recurso/articulo/image0_mdp.jpeg', link: 'producto/116/project-170' },
{ titulo: 'Project 120', img: '/recurso/articulo/56a257a1_5e51_4fd6_a468_af2b54d3b0a6.jpg', link: 'producto/115/project-120' }
]


return (
<div className="container-fluid listado_proyectos">
<div className="row">
{proyectos.map((p, index) => (
<div key={index} className="col-lg-3 col-md-6 miniatura_proyecto" style={{ backgroundImage: `url(${p.img})` }}>
<a href={p.link}>
<div className="texto">
<h4>{p.titulo}</h4>
</div>
</a>
</div>
))}
</div>
</div>
)
}