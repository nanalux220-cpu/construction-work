import { Link } from "react-router-dom";
import { RichTitle } from "../components/Prose";
import { CtaBand, PageHero, usePageTitle } from "../components/common";
import { site, team } from "../data/content";

export function About() {
  usePageTitle(`About Us | ${site.name}`, `${site.name} — ${site.category} in ${site.location}.`);

  return (
    <>
      <PageHero title="About Us" image="/images/bg-8.jpg" />
      <section className="section">
        <div className="wrap split">
          <img src="/images/Team-1.jpg" alt="Architects and engineers collaborating over drawings" />
          <div className="split-copy">
            <p className="eyebrow">
              <span>Time has changed</span>
            </p>
            <h2>
              <RichTitle text="Transforming Spaces, {{Building Futures}}" />
            </h2>
            <p>{site.about}</p>
            <p>
              <em>
                <strong>
                  {site.category} — {site.location}.
                </strong>
              </em>
            </p>
            <p>{site.address}</p>
            <Link className="btn btn-primary" to="/contact#quote">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <section className="section team-section" style={{ backgroundImage: "url(/images/Team.jpg)" }}>
        <div className="team-overlay" />
        <div className="wrap team-inner">
          <div className="section-heading align-center tone-light">
            <p className="eyebrow on-dark">
              <span>Our Team</span>
            </p>
            <h2>A dedicated team turning vision into reality, one project at a time.</h2>
            <p className="lede">
              At ArchLine, our people are our greatest strength. Behind every successful project is a team of
              passionate professionals—architects, engineers, project managers, and skilled craftsmen—working together
              to bring ideas to life. With decades of combined experience, we blend creativity, precision, and
              dedication to deliver projects that stand the test of time. From the first sketch to the final build, our
              team is committed to excellence, innovation, and client satisfaction.
            </p>
          </div>
          <div className="card-grid cols-4">
            {team.map((member) => (
              <article className="media-card" key={member.slug}>
                <img src={member.image} alt="" />
                <div>
                  <h3>{member.name}</h3>
                  <p>
                    <em>
                      <strong>{member.role}</strong>
                    </em>
                    <br />
                    {member.bio}
                  </p>
                  <Link className="text-link" to={`/contact?team=${member.slug}`}>
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
