import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { Post } from "../data/content";
import { Icon } from "./Icons";
import { TextLink } from "./common";

const INTERVAL = 4000;

function visibleCount() {
  if (window.matchMedia("(max-width: 700px)").matches) return 1;
  if (window.matchMedia("(max-width: 1100px)").matches) return 2;
  return 3;
}

export function BlogCarousel({ posts }: { posts: Post[] }) {
  const count = posts.length;
  const slides = [...posts, ...posts, ...posts];
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
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="blog-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our blog"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="services-controls quote-controls">
        <button type="button" onClick={() => step(-1)} aria-label="Previous article">
          <Icon name="arrow" size={18} />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next article">
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
          {slides.map((post, slideIndex) => (
            <div className="services-slide" key={`${post.slug}-${slideIndex}`}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: Post }) {
  return (
    <article className="media-card blog-card">
      <Link to={`/blog/${post.slug}`}>
        <img src={post.image} alt="" />
      </Link>
      <div>
        <p className="kicker">{post.category}</p>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <TextLink to={`/blog/${post.slug}`}>Learn more</TextLink>
      </div>
    </article>
  );
}
