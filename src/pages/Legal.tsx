import { PageHero, usePageTitle } from "../components/common";
import { site } from "../data/content";

export function Privacy() {
  usePageTitle(`Privacy Policy | ${site.name}`);
  return (
    <>
      <PageHero title="Privacy Policy" image="/images/bg-5.jpg" />
      <section className="section">
        <div className="wrap prose legal">
          <p>
            {site.name} is an architectural designer and engineering and construction practice at {site.address}. You
            can reach the business at {site.phone}, {site.hours}.
          </p>
          <h2>Who we are</h2>
          <p>
            This website presents {site.name}. The email address shown on the site ({site.email}) is a theme
            placeholder until the business publishes its own address.
          </p>
          <h2>Information you send</h2>
          <p>
            The contact form asks for your first name, last name, email address, an optional phone number, and an
            optional message of up to 180 characters. Submitting the form stores that note in this browser only
            (session storage). It is not sent to a server.
          </p>
          <h2>How that information is used</h2>
          <p>
            Use the form to draft an enquiry. To actually reach the business, call {site.phone} or send a WhatsApp
            message to the same number, or visit the office during opening hours.
          </p>
          <h2>Cookies</h2>
          <p>
            This site does not set tracking cookies. Your browser may keep the form draft in session storage until you
            close the tab.
          </p>
          <h2>Maps</h2>
          <p>
            The contact page links to Google Maps for the published address. If you open that map, Google handles the
            visit under its own privacy policy.
          </p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  usePageTitle(`Terms & Conditions | ${site.name}`);
  return (
    <>
      <PageHero title="Terms & Conditions" image="/images/bg-5.jpg" />
      <section className="section">
        <div className="wrap prose legal">
          <p>
            These terms cover use of this website for {site.name}, {site.address}. The business is open {site.hours}.
          </p>
          <h2>Using the site</h2>
          <p>
            The pages describe services the business offers: building designs, building construction, sales of land and
            houses, electrical engineering works, maintenance and renovation works, civil engineering works,
            construction of pavement works, painting works, and plumbing works.
          </p>
          <h2>Quotes</h2>
          <p>
            A message sent through the contact form, or a conversation by phone, is an enquiry. It is not a contract
            and it is not a fixed price. Work starts only when you and {site.short} agree the scope.
          </p>
          <h2>Portfolio, stories, and photos</h2>
          <p>
            Project galleries, client quotes, team profiles, statistics, and articles on this site are the starter
            presentation from the website theme. They are not a record of completed FRANSARE 40 jobs unless the
            business replaces them.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms: call <a href={site.phoneHref}>{site.phone}</a> or visit the office opposite
            the AAMUSTED west gate, Tanoso–Apatrapa Junction, Kumasi.
          </p>
        </div>
      </section>
    </>
  );
}
