import { Link, useParams } from "react-router-dom";
import { Prose } from "../components/Prose";
import { CtaBand, PageHero, usePageTitle } from "../components/common";
import { getService, site } from "../data/content";
import { NotFound } from "./NotFound";

export function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);
  usePageTitle(service ? `${service.title} | ${site.name}` : `Not found | ${site.name}`);
  if (!service) return <NotFound />;

  return (
    <>
      <PageHero title={service.title} eyebrow="Our Services" image={service.heroImage} />
      <section className="section">
        <div className="wrap split service-detail">
          <img src={service.contentImage} alt="" />
          <div>
            <Prose blocks={service.blocks} />
            <Link className="btn btn-primary" to="/contact#quote">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
