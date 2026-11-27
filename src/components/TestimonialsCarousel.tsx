import { useEffect, useRef, useState, type CSSProperties } from "react";
import { testimonials as testimonialList } from "../data/content";
import { Icon } from "./Icons";
import { Stars } from "./common";

const INTERVAL = 4000;

type Testimonial = (typeof testimonialList)[number];

function visibleCount() {
  if (window.matchMedia("(max-width: 700px)").matches) return 1;
  if (window.matchMedia("(max-width: 1100px)").matches) return 2;
  return 3;
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
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
          <QuoteCard key={item.name} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="quote-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="What our clients say"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="services-controls quote-controls">
        <button type="button" onClick={() => step(-1)} aria-label="Previous testimonial">
          <Icon name="arrow" size={18} />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next testimonial">
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
            <div className="services-slide" key={`${item.name}-${slideIndex}`}>
              <QuoteCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuoteCard({ item }: { item: Testimonial }) {
  return (
    <article className="quote-card">
      <Stars />
      <p>“{item.quote}”</p>
      <footer>
        <img src={item.photo} alt="" />
        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </div>
      </footer>
    </article>
  );
}
