import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { RichTitle } from "../components/Prose";
import { ServicesCarousel } from "../components/ServicesCarousel";
import { BlogCarousel } from "../components/BlogCarousel";
import { ProjectsCarousel } from "../components/ProjectsCarousel";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { CtaBand, SectionHeading, StatFigure, usePageTitle } from "../components/common";
import {
  heroSlides,
  posts,
  services,
  showcaseRows,
  site,
  stats,
  testimonials,
} from "../data/content";

const homeServiceOrder = ["construction", "design", "renovation", "engineering"];

export function Home() {
  usePageTitle(
    site.name,
    `${site.name} — architectural designer and engineering & construction works in Kumasi, Ghana.`,
  );
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const orderedServices = homeServiceOrder
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service) => service !== undefined);
  const showcaseItems = showcaseRows.flat();

  return (
    <>
      <section className="home-hero" id="hero" aria-label="Intro">
        <div className="hero-slides">
          {heroSlides.map((src, index) => (
            <img key={src} src={src} alt="" className={index === slide ? "is-active" : ""} />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="wrap hero-copy">
          <h1>
            Building with Precision.
            <br />
            Designing with Vision.
          </h1>
          <p>{site.heroSub}</p>
          <div className="btn-row center">
            <Link className="btn btn-primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn btn-outline" to="/contact#quote">
              Get a Quote
            </Link>
          </div>
          <div className="hero-dots" role="tablist" aria-label="Hero slides">
            {heroSlides.map((src, index) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-label={`Slide ${index + 1}`}
                aria-selected={index === slide}
                className={index === slide ? "is-active" : ""}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="feature-bar">
        <article>
          <div className="feature-icon">
            <img src="/images/team-3.png" alt="" />
          </div>
          <div>
            <h2>Skilled Professionals</h2>
            <p>
              Our certified architects, engineers, and builders bring decades of experience, delivering trusted
              expertise from design to completion.
            </p>
          </div>
        </article>
        <article className="is-orange">
          <div className="feature-icon">
            <img src="/images/works-2.png" alt="" />
          </div>
          <div>
            <h2>Superior Craftsmanship</h2>
            <p>
              Every structure we create is built with precision, premium materials, and attention to detail—ensuring
              durability, beauty, and long-lasting value.
            </p>
          </div>
        </article>
        <article>
          <div className="feature-icon">
            <img src="/images/call-2.png" alt="" />
          </div>
          <div>
            <h2>Always Available</h2>
            <p>{site.availability}</p>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="wrap split">
          <img src="/images/Team.jpg" alt="Construction team reviewing plans on site" />
          <div className="split-copy">
            <p className="eyebrow">
              <span>Time has changed</span>
            </p>
            <h2>
              <RichTitle text="Transforming Spaces, {{Building Futures}}" />
            </h2>
            <p>{site.about}</p>
            <p>
              {site.name} is an {site.category.toLowerCase()} practice in {site.location}.
            </p>
            <div className="info-pills">
              <div>
                <span className="pill-icon">
                  <Icon name="phone" size={18} />
                </span>
                <div>
                  <strong>Contact Us</strong>
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
              </div>
              <div>
                <span className="pill-icon">
                  <Icon name="mail" size={18} />
                </span>
                <div>
                  <strong>Our Email</strong>
                  <a href={site.emailHref}>{site.email}</a>
                </div>
              </div>
            </div>
            <Link className="btn btn-primary" to="/contact#quote">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-pane dark" style={{ backgroundImage: "url(/images/bg-1.jpg)" }}>
          {stats
            .filter((item) => item.tone === "dark")
            .map((item) => (
              <StatFigure key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
        </div>
        <div className="stats-pane orange" style={{ backgroundImage: "url(/images/bg-7.jpg)" }}>
          {stats
            .filter((item) => item.tone === "orange")
            .map((item) => (
              <StatFigure key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our work"
            title="Innovative Projects Showcase"
            text="Explore our most innovative architectural and construction achievements"
          />
          <ProjectsCarousel items={showcaseItems} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive construction and design solutions"
            text="Explore our most innovative architectural and construction achievements"
            tone="light"
          />
          <ServicesCarousel services={orderedServices} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split reverse">
          <img src="/images/sustainable-works.jpg" alt="House with a planted roof and outdoor workspace" />
          <div className="split-copy">
            <span className="watermark">ArchLine</span>
            <h2>
              <RichTitle text="Environmentally Responsible {{Building Practices}}" />
            </h2>
            <p>
              Our commitment to sustainable design integrates eco-friendly materials, energy efficiency, and innovative
              green technologies into every project.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/blog/how-sustainable-construction-is-shaping-the-future-of-architecture">
                Sustainability report
              </Link>
              <Link className="btn btn-ghost" to="/services/design">
                Learn More <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            text="Hear from businesses and individuals who have experienced our exceptional service"
          />
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our Blog"
            title="Innovative Projects Showcase"
            text="Explore our most innovative architectural and construction achievements"
          />
          <BlogCarousel posts={posts} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
