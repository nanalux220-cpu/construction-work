import { Link } from "react-router-dom";
import { usePageTitle } from "../components/common";
import { site } from "../data/content";

export function NotFound() {
  usePageTitle(`Page not found | ${site.name}`);
  return (
    <section className="section not-found">
      <div className="wrap">
        <p className="eyebrow">
          <span>404</span>
        </p>
        <h1>That page is not on this site.</h1>
        <p>The address may have changed. Head back to the homepage or send a message.</p>
        <div className="btn-row">
          <Link className="btn btn-primary" to="/">
            Back home
          </Link>
          <Link className="btn btn-ghost" to="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
