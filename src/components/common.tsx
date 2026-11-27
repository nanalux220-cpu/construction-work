import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icons";
import { site } from "../data/content";

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (!description) return;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", description);
  }, [title, description]);
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

export function PageHero({
  title,
  image,
  eyebrow,
  children,
}: {
  title: string;
  image: string;
  eyebrow?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-overlay" />
      <div className="wrap page-hero-inner">
        {eyebrow ? <p className="eyebrow on-dark">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark",
  watermark,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  watermark?: string;
}) {
  return (
    <div className={`section-heading align-${align} tone-${tone}`}>
      {watermark ? <span className="watermark">{watermark}</span> : null}
      {eyebrow ? (
        <p className={`eyebrow ${tone === "light" ? "on-dark" : ""}`}>
          <span>{eyebrow}</span>
        </p>
      ) : null}
      <h2>{title}</h2>
      {text ? <p className="lede">{text}</p> : null}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band" style={{ backgroundImage: "url(/images/bg-6.jpg)" }}>
      <div className="cta-overlay" />
      <div className="wrap cta-inner">
        <SectionHeading
          eyebrow="Our Services"
          title="Ready to bring your vision to life?"
          text={`Start your journey with ${site.short} and transform your space with expert design and construction services`}
          tone="light"
        />
        <div className="btn-row center">
          <Link className="btn btn-primary" to="/contact#quote">
            Get A Quote
          </Link>
          <Link className="btn btn-outline" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link className="text-link" to={to}>
      <span>{children}</span>
      <Icon name="arrow" size={16} />
    </Link>
  );
}

export function Stars() {
  return (
    <div className="stars" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }, (_, index) => (
        <Icon key={index} name="star" size={16} />
      ))}
    </div>
  );
}

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div
      className="gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gallery-frame">
        {images.map((src, imageIndex) => (
          <img
            key={src}
            src={src}
            alt={imageIndex === index ? alt : ""}
            className={imageIndex === index ? "is-active" : ""}
          />
        ))}
        {count > 1 ? (
          <>
            <button type="button" className="gallery-nav prev" onClick={() => go(index - 1)} aria-label="Previous image">
              <Icon name="arrow" size={18} />
            </button>
            <button type="button" className="gallery-nav next" onClick={() => go(index + 1)} aria-label="Next image">
              <Icon name="arrow" size={18} />
            </button>
          </>
        ) : null}
      </div>
      {count > 1 ? (
        <div className="gallery-thumbs" role="tablist" aria-label="Project images">
          {images.map((src, imageIndex) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={imageIndex === index}
              className={imageIndex === index ? "is-active" : ""}
              onClick={() => setIndex(imageIndex)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function StatFigure({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="stat">
      <strong>
        {value}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
