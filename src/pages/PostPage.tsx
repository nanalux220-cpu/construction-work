import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Prose } from "../components/Prose";
import { PageHero, usePageTitle } from "../components/common";
import { getPost, posts, site } from "../data/content";
import { BlogSidebar } from "./Blog";
import { NotFound } from "./NotFound";

export function PostPage() {
  const { slug } = useParams();
  const post = getPost(slug);
  const [query, setQuery] = useState("");
  usePageTitle(post ? `${post.title} | ${site.name}` : `Not found | ${site.name}`);
  if (!post) return <NotFound />;

  const related = posts.filter((item) => item.slug !== post.slug);
  const filtered = query.trim()
    ? related.filter((item) => item.title.toLowerCase().includes(query.trim().toLowerCase()))
    : related;

  return (
    <>
      <PageHero title={post.title} eyebrow={post.category} image={post.image}>
        <p className="hero-summary">{post.displayDate}</p>
      </PageHero>
      <section className="section">
        <div className="wrap with-sidebar">
          <article className="post-body">
            <img className="post-cover" src={post.image} alt="" />
            <Prose blocks={post.blocks} />
            <div className="post-related">
              <h2>More from the blog</h2>
              <div className="card-grid cols-2">
                {(query.trim() ? filtered : related).map((item) => (
                  <article className="media-card" key={item.slug}>
                    <Link to={`/blog/${item.slug}`}>
                      <img src={item.image} alt="" />
                    </Link>
                    <div>
                      <h3>
                        <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
              {query.trim() && filtered.length === 0 ? <p className="empty">No other articles match that search.</p> : null}
            </div>
          </article>
          <BlogSidebar query={query} onQuery={setQuery} />
        </div>
      </section>
    </>
  );
}
