import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./BlogSection.css";
import blogs from "../data/blogs/blogs";

function ImageCredits({ caption, sourceUrl, licenseUrl }) {
  if (!caption && !sourceUrl && !licenseUrl) {
    return null;
  }

  return (
    <figcaption>
      {caption}

      {sourceUrl && (
        <>
          {" "}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fuente
          </a>
        </>
      )}

      {licenseUrl && (
        <>
          {" · "}
          <a
            href={licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Licencia
          </a>
        </>
      )}
    </figcaption>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
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
    });

    return () => cancelAnimationFrame(frame);
  }, [slug]);

  const blog = blogs.find((item) => item.slug === slug);

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
        <Link
          to="/blog/"
          className="blog-detail__back"
        >
          ← VOLVER AL BLOG
        </Link>

        <header className="blog-detail__header">
          <div className="blog-detail__meta">
            <span>{blog.date}</span>
            <span>{blog.category}</span>
          </div>

          <h1>{blog.title}</h1>

          {blog.excerpt && (
            <p className="blog-detail__intro">
              {blog.excerpt}
            </p>
          )}
        </header>

        {blog.image && (
          <figure className="blog-detail__hero">
            <img
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              fetchPriority="high"
              decoding="async"
            />

            <ImageCredits
              caption={blog.imageCaption}
              sourceUrl={blog.imageSourceUrl}
              licenseUrl={blog.imageLicenseUrl}
            />
          </figure>
        )}

        <article className="blog-detail__content">
          {blog.content?.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2 key={index}>
                    {block.text}
                  </h2>
                );

              case "paragraph":
                return (
                  <p key={index}>
                    {block.text}
                  </p>
                );

              case "list":
                return (
                  <ul key={index}>
                    {block.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote key={index}>
                    {block.text}
                  </blockquote>
                );

              case "image":
                // La portada ya se muestra antes del artículo.
                if (block.src === blog.image) {
                  return null;
                }

                return (
                  <figure key={index}>
                    <img
                      src={block.src}
                      alt={block.alt || ""}
                      loading="lazy"
                      decoding="async"
                    />

                    <ImageCredits
                      caption={block.caption}
                      sourceUrl={block.sourceUrl}
                      licenseUrl={block.licenseUrl}
                    />
                  </figure>
                );

              case "table":
                return (
                  <div
                    key={index}
                    className="blog-detail__table-wrap"
                    role="region"
                    aria-label={block.caption || "Tabla comparativa"}
                    tabIndex={0}
                  >
                    <table>
                      {block.caption && (
                        <caption>{block.caption}</caption>
                      )}

                      <thead>
                        <tr>
                          {block.headers?.map((header, headerIndex) => (
                            <th
                              key={headerIndex}
                              scope="col"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {block.rows?.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              default:
                return null;
            }
          })}
        </article>

        <div className="blog-detail__cta">
          <h2>¿TIENES UN PROYECTO EN MENTE?</h2>

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