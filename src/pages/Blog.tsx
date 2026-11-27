import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Icon } from "../components/Icons";
import { PageHero, TextLink, usePageTitle } from "../components/common";
import { posts, site } from "../data/content";

export function BlogSidebar({ query, onQuery }: { query: string; onQuery: (value: string) => void }) {
  return (
    <aside className="sidebar">
      <form
        className="side-widget"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="blog-search">Search</label>
        <div className="search-row">
          <input
            id="blog-search"
            type="search"
            value={query}
            placeholder="Search articles"
            onChange={(event) => onQuery(event.target.value)}
          />
          <Icon name="search" size={18} />
        </div>
      </form>
      <div className="side-widget">
        <h2>Categories</h2>
        <ul>
          <li>
            <button type="button" onClick={() => onQuery("")}>
              Our Blog <span>{posts.length}</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="side-widget">
        <h2>Recent Posts</h2>
        <ul className="recent-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-widget">
        <h2>Archives</h2>
        <ul>
          <li>
            <button type="button" onClick={() => onQuery("")}>
              September 2025 <span>{posts.length}</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export function Blog() {
  usePageTitle(`Our Blog | ${site.name}`);
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  const update = (value: string) => {
    setQuery(value);
    if (value.trim()) setParams({ q: value });
    else setParams({});
  };

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle) ||
        post.blocks.some((block) => (block.type === "ul" ? block.items.join(" ") : block.text).toLowerCase().includes(needle)),
    );
  }, [query]);

  return (
    <>
      <PageHero title="Our Blog" image="/images/bg-5.jpg" />
      <section className="section">
        <div className="wrap with-sidebar">
          <div>
            {visible.length === 0 ? (
              <p className="empty">No articles match “{query.trim()}”.</p>
            ) : (
              <div className="blog-list">
                {visible.map((post) => (
                  <article className="media-card blog-row" key={post.slug}>
                    <Link to={`/blog/${post.slug}`}>
                      <img src={post.image} alt="" />
                    </Link>
                    <div>
                      <p className="kicker">
                        {post.category} · {post.displayDate}
                      </p>
                      <h2>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p>{post.excerpt}</p>
                      <TextLink to={`/blog/${post.slug}`}>Learn more</TextLink>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
          <BlogSidebar query={query} onQuery={update} />
        </div>
      </section>
    </>
  );
}
