import { Link, useParams } from "react-router-dom";

import "./BlogSection.css";
import blogs from "../data/blogs/blogs";
import { useEffect } from "react";

export default function BlogDetail() {
  const { slug } = useParams();
  useEffect(() => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const scrollableElements = document.querySelectorAll(
      "[data-scroll-container], .page-wrapper, .main-content, main"
    );

    scrollableElements.forEach((element) => {
      if (element.scrollHeight > element.clientHeight) {
        element.scrollTop = 0;
      }
    });
  };

  requestAnimationFrame(scrollToTop);
}, [slug]);

  const blog = blogs.find(
    (blog) => blog.slug === slug
  );

  if (!blog) {
    return (
      <main className="blog-detail-not-found">
        <h1>Artículo no encontrado</h1>

        <Link to="/blog/">
          VOLVER AL BLOG
        </Link>
      </main>
    );
  }

  return (
    <main className="blog-detail">

      <div className="blog-detail__container">

        {/* VOLVER */}
        <Link
          to="/blog/"
          className="blog-detail__back"
        >
          ← VOLVER AL BLOG
        </Link>

        {/* CABECERA */}
        <header className="blog-detail__header">

          <div className="blog-detail__meta">
            <span>{blog.date}</span>

            <span>{blog.category}</span>
          </div>

          <h1>
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="blog-detail__intro">
              {blog.excerpt}
            </p>
          )}

        </header>

        {/* IMAGEN PRINCIPAL */}
        {blog.image && (
          <div className="blog-detail__hero">
            <img
              src={blog.image}
              alt={blog.title}
            />
          </div>
        )}

        {/* CONTENIDO */}
        <article className="blog-detail__content">

          {blog.content?.map((block, index) => {

            if (block.type === "heading") {
              return (
                <h2 key={index}>
                  {block.text}
                </h2>
              );
            }

            if (block.type === "paragraph") {
              return (
                <p key={index}>
                  {block.text}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "quote") {
              return (
                <blockquote key={index}>
                  {block.text}
                </blockquote>
              );
            }

            if (block.type === "image") {
              return (
                <figure key={index}>
                  <img
                    src={block.src}
                    alt={block.alt || ""}
                  />

                  {block.caption && (
                    <figcaption>
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return null;
          })}

        </article>

        {/* CTA */}
        <div className="blog-detail__cta">

          <h2>
            ¿TIENES UN PROYECTO EN MENTE?
          </h2>

          <p>
            Cuéntanos qué necesitas y estudiaremos
            contigo las posibilidades de tu proyecto.
          </p>

          <Link
            to="/contactar"
            className="blog-detail__cta-button"
          >
            CONTÁCTANOS
          </Link>

        </div>

      </div>

    </main>
  );
}
