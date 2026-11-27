import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CtaBand, PageHero, TextLink, usePageTitle } from "../components/common";
import { categoryLabel, projectCategories, projects, site, type ProjectCategory } from "../data/content";

export function Projects() {
  usePageTitle(`Projects | ${site.name}`);
  const [params, setParams] = useSearchParams();
  const selected = params.get("category");
  const active: ProjectCategory | "all" =
    selected && projectCategories.some((item) => item.id === selected) ? (selected as ProjectCategory) : "all";

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  const choose = (id: ProjectCategory | "all") => {
    if (id === "all") setParams({});
    else setParams({ category: id });
  };

  return (
    <>
      <PageHero title="Building Excellence, One Structure at a Time" image="/images/bg-5.jpg" />
      <section className="section">
        <div className="wrap">
          <p className="intro">
            At ArchLine Construction Company, every project is a story of vision, precision, and craftsmanship. From
            modern homes and innovative commercial spaces to large-scale engineering works and transformative
            renovations, our portfolio reflects our dedication to quality and innovation. Explore our project gallery to
            see how we bring ideas to life—on time, on budget, and built to last.
          </p>
          <div className="filters" role="tablist" aria-label="Project categories">
            <button type="button" role="tab" aria-selected={active === "all"} className={active === "all" ? "is-active" : ""} onClick={() => choose("all")}>
              All Projects
            </button>
            {projectCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active === category.id}
                className={active === category.id ? "is-active" : ""}
                onClick={() => choose(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="card-grid cols-2 project-grid">
            {visible.map((project) => (
              <article className="media-card project-card" key={project.slug}>
                <Link to={`/projects/${project.slug}`}>
                  <img src={project.image} alt="" />
                </Link>
                <div>
                  <p className="kicker">{categoryLabel(project.category)}</p>
                  <h2>
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                  </h2>
                  <p>{project.summary}</p>
                  <TextLink to={`/projects/${project.slug}`}>View project</TextLink>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 ? <p className="empty">No projects in this category yet.</p> : null}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
