import { Link } from "react-router-dom";
import "./BlogSection.css";
import blogs from "../data/blogs/blogs";

export default function Blog() {
  const featuredBlog = blogs.find((blog) => blog.featured) || blogs[0];

  const secondaryBlogs = blogs
    .filter((blog) => blog.id !== featuredBlog.id)
    .slice(0, 2);

  const remainingBlogs = blogs
    .filter((blog) => blog.id !== featuredBlog.id)
    .slice(2);

  return (
    <section className="mn-blog">
      <div className="mn-blog__container">

        {/* CABECERA */}
        <header className="mn-blog__header">
          <h1>BLOG</h1>

          <p>
            INSPIRACIÓN, IDEAS Y CONSEJOS
            <br />
            PARA TU PRÓXIMO HOGAR.
          </p>

          <div className="mn-blog__header-line" />
        </header>

        {/* BLOQUE PRINCIPAL */}
        <div className="mn-blog__hero-grid">

          {/* DESTACADO */}
          <BlogCard
            blog={featuredBlog}
            featured
          />

          {/* DOS SECUNDARIOS */}
          <div className="mn-blog__secondary">
            {secondaryBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>

        </div>

        {/* RESTO DE ARTÍCULOS */}
        <div className="mn-blog__articles">
          {remainingBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              grid
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function BlogCard({ blog, featured = false, grid = false }) {
  return (
    <article
      className={[
        "mn-blog-card",
        featured ? "mn-blog-card--featured" : "",
        grid ? "mn-blog-card--grid" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        to={`/blogs/${blog.slug}`}
        className="mn-blog-card__image"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading={featured ? "eager" : "lazy"}
        />
      </Link>

      <div className="mn-blog-card__content">
        <div className="mn-blog-card__meta">
          <span>{blog.date}</span>
          <span>{blog.category}</span>
        </div>

        <h2>
          <Link to={`/blogs/${blog.slug}`}>
            {blog.title}
          </Link>
        </h2>

        <p className="mn-blog-card__excerpt">
          {blog.excerpt}
        </p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="mn-blog-card__button"
        >
          LEER MÁS
        </Link>
      </div>
    </article>
  );
}