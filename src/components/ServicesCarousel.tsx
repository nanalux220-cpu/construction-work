import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Service } from "../data/content";
import { Icon } from "./Icons";
import { TextLink } from "./common";

const INTERVAL = 4000;

function visibleCount() {
  if (window.matchMedia("(max-width: 700px)").matches) return 1;
  if (window.matchMedia("(max-width: 1100px)").matches) return 2;
  return 4;
}

export function ServicesCarousel({ services }: { services: Service[] }) {
  const count = services.length;
  const slides = [...services, ...services, ...services];
  const [index, setIndex] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(() => (typeof window === "undefined" ? 4 : visibleCount()));
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
      <div className="card-grid cols-4">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="services-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="services-controls">
        <button type="button" onClick={() => step(-1)} aria-label="Previous service">
          <Icon name="arrow" size={18} />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next service">
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
          {slides.map((service, slideIndex) => (
            <div className="services-slide" key={`${service.slug}-${slideIndex}`}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="media-card">
      <img src={service.image} alt="" />
      <div>
        <h3>{service.homeTitle}</h3>
        <p>{service.homeSummary}</p>
        <TextLink to={`/services/${service.slug}`}>Learn More</TextLink>
      </div>
    </article>
  );
}
