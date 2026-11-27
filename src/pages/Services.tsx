import { CtaBand, PageHero, TextLink, usePageTitle } from "../components/common";
import { services, site } from "../data/content";

const order = ["construction", "design", "renovation", "engineering"];

export function Services() {
  usePageTitle(`Our Services | ${site.name}`, `Services offered by ${site.name} in Kumasi, Ghana.`);
  const cards = order
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service) => service !== undefined);

  return (
    <>
      <PageHero title="Our Services" image="/images/bg-8.jpg" />
      <section className="section">
        <div className="wrap service-grid">
          {cards.map((service) => (
            <article className="service-panel" key={service.slug} id={service.slug}>
              <img src={service.image} alt="" />
              <div>
                <h2>{service.homeTitle}</h2>
                <p className="lead-line">{service.cardLead}</p>
                <p>{service.cardBody}</p>
                <TextLink to={`/services/${service.slug}`}>Learn More</TextLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
