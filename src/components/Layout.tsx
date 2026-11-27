import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  footerServices,
  quickLinks,
  services,
  site,
  socials,
} from "../data/content";
import { Icon } from "./Icons";
import { ScrollToTop } from "./common";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us", end: false },
  { to: "/services", label: "Services", end: false, children: true },
  { to: "/projects", label: "Projects", end: false },
  { to: "/blog", label: "Blog", end: false },
  { to: "/contact", label: "Contact", end: false },
];

function Brand({ variant, onActivate }: { variant: "color" | "white"; onActivate: () => void }) {
  const { pathname } = useLocation();
  return (
    <Link
      to="/"
      className={`brand brand-${variant}`}
      aria-label={site.name}
      onClick={(event) => {
        onActivate();
        if (pathname === "/") {
          event.preventDefault();
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        }
      }}
    >
      <img src="/images/fransare-logo.png" alt={site.name} />
    </Link>
  );
}

export function Layout() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Brand variant="color" onActivate={() => setOpen(false)} />
          <nav className="desktop-nav" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div className="nav-item has-sub" key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                  >
                    {item.label}
                    <Icon name="chevron" size={14} />
                  </NavLink>
                  <div className="dropdown">
                    {services.map((service) => (
                      <NavLink key={service.slug} to={`/services/${service.slug}`}>
                        {service.navLabel}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="header-actions">
            <Link className="btn btn-primary header-cta" to="/contact#quote">
              Get a Quote
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-nav ${open ? "is-open" : ""}`} id="mobile-nav" hidden={!open}>
        <div className="mobile-nav-panel">
          <Brand variant="color" onActivate={() => setOpen(false)} />
          <nav aria-label="Mobile">
            {nav.map((item) =>
              item.children ? (
                <div key={item.to} className="mobile-services">
                  <button type="button" onClick={() => setServicesOpen((value) => !value)} aria-expanded={servicesOpen}>
                    Services
                    <Icon name="chevron" size={16} />
                  </button>
                  {servicesOpen ? (
                    <div className="mobile-sub">
                      <Link to="/services">All services</Link>
                      {services.map((service) => (
                        <Link key={service.slug} to={`/services/${service.slug}`}>
                          {service.navLabel}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link className="btn btn-primary" to="/contact#quote">
            Get a Quote
          </Link>
          <ul className="social-row mobile-social" aria-label="Social links">
            {socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon name={item.icon} size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Brand variant="white" onActivate={() => setOpen(false)} />
            <p>{site.footerBlurb}</p>
          </div>
          <div>
            <h2>About</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Our Services</h2>
            <ul>
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Social Links</h2>
            <ul>
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap">
            <p>
              © {year} {site.name} | Designed by{" "}
              <a href={site.designer.href} target="_blank" rel="noopener noreferrer">
                {site.designer.name}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
