import { Link, useParams } from "react-router-dom";
import { Gallery, usePageTitle } from "../components/common";
import { categoryLabel, getProject, projects, site } from "../data/content";
import { NotFound } from "./NotFound";

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  usePageTitle(project ? `${project.title} | ${site.name}` : `Not found | ${site.name}`);
  if (!project) return <NotFound />;

  const related = projects.filter((item) => item.category === project.category && item.slug !== project.slug);

  return (
    <>
      <section className="page-hero project-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="page-hero-overlay" />
        <div className="wrap page-hero-inner">
          <p className="eyebrow on-dark">
            <span>{categoryLabel(project.category)}</span>
          </p>
          <h1>{project.title}</h1>
          <p className="hero-summary">{project.summary}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap project-layout">
          <Gallery images={project.gallery} alt={project.title} />
          <div className="project-facts">
            <h2>Key Highlights</h2>
            <ul>
              <li>
                <strong>Duration:</strong> {project.duration}
              </li>
              <li>
                <strong>Budget:</strong> {project.budget}
              </li>
              <li>
                <strong>Client Goals:</strong> {project.goals}
              </li>
              <li>
                <strong>Solutions Provided:</strong> {project.solutions}
              </li>
            </ul>
            <Link className="btn btn-primary" to={`/projects?category=${project.category}`}>
              Back to {categoryLabel(project.category)}
            </Link>
          </div>
        </div>
      </section>
      {related.length > 0 ? (
        <section className="section section-paper">
          <div className="wrap">
            <h2 className="related-title">Related projects</h2>
            <div className="card-grid cols-2">
              {related.map((item) => (
                <article className="media-card" key={item.slug}>
                  <Link to={`/projects/${item.slug}`}>
                    <img src={item.image} alt="" />
                  </Link>
                  <div>
                    <h3>
                      <Link to={`/projects/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
