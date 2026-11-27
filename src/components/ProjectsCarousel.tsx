import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { ShowcaseItem } from "../data/content";
import { Icon } from "./Icons";
import { TextLink } from "./common";

const INTERVAL = 4000;

function visibleCount() {
  if (window.matchMedia("(max-width: 700px)").matches) return 1;
  if (window.matchMedia("(max-width: 1100px)").matches) return 2;
  return 3;
}

export function ProjectsCarousel({ items }: { items: ShowcaseItem[] }) {
  const count = items.length;
  const slides = [...items, ...items, ...items];
  const [index, setIndex] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(() => (typeof window === "undefined" ? 3 : visibleCount()));
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const update = () => setVisible(visibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  useEffect(() => {
    if (animate) return;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  const settle = () => {
    if (index >= count * 2) {
      setAnimate(false);
      setIndex(index - count);
    } else if (index < count) {
      setAnimate(false);
      setIndex(index + count);
    }
  };

  const step = (direction: number) => {
    setAnimate(true);
    setIndex((current) => current + direction);
  };

  if (reduce) {
    return (
      <div className="card-grid cols-3">
        {items.map((item) => (
          <ProjectCard key={item.image + item.to} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="projects-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Innovative projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="services-controls quote-controls">
        <button type="button" onClick={() => step(-1)} aria-label="Previous project">
          <Icon name="arrow" size={18} />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next project">
          <Icon name="arrow" size={18} />
        </button>
      </div>
      <div className="services-viewport">
        <div
          ref={trackRef}
          className={`services-track ${animate ? "" : "is-instant"}`}
          style={
            {
              "--count": slides.length,
              "--visible": visible,
              "--index": index,
            } as CSSProperties
          }
          onTransitionEnd={(event) => {
            if (event.target === trackRef.current && event.propertyName === "transform") settle();
          }}
        >
          {slides.map((item, slideIndex) => (
            <div className="services-slide" key={`${item.image}-${item.to}-${slideIndex}`}>
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ item }: { item: ShowcaseItem }) {
  if (item.kind === "feature") {
    return (
      <article className="feature-card" style={{ backgroundImage: `url(${item.image})` }}>
        <div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <TextLink to={item.to}>Explore</TextLink>
        </div>
      </article>
    );
  }

  return (
    <article className="media-card">
      <img src={item.image} alt="" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <TextLink to={item.to}>Explore</TextLink>
      </div>
    </article>
  );
}
