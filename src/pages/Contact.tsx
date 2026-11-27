import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Icon } from "../components/Icons";
import { PageHero, usePageTitle } from "../components/common";
import { site, team } from "../data/content";

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const empty: Fields = { firstName: "", lastName: "", email: "", phone: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  usePageTitle(`Contact Us | ${site.name}`, `Contact ${site.name} in Kumasi. ${site.phone}. ${site.hours}.`);
  const [params] = useSearchParams();
  const starter = useMemo(() => {
    const teamSlug = params.get("team");
    const member = team.find((item) => item.slug === teamSlug);
    const service = params.get("service");
    if (member) return { ...empty, message: `I'd like to connect with ${member.name}, ${member.role}.` };
    if (service) return { ...empty, message: `I'm interested in ${service}.` };
    return empty;
  }, [params]);

  const [fields, setFields] = useState<Fields>(starter);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError("");
  };

  const validate = (value: Fields) => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!value.firstName.trim()) next.firstName = "First name is required.";
    if (!value.lastName.trim()) next.lastName = "Last name is required.";
    if (!value.email.trim()) next.email = "Email address is required.";
    else if (!emailPattern.test(value.email.trim())) next.email = "Enter a valid email address.";
    const digits = value.phone.replace(/\D/g, "");
    if (value.phone.trim() && digits.length < 7) next.phone = "Enter a valid phone number.";
    if (value.message.length > 180) next.message = "Message must be 180 characters or fewer.";
    return next;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setFormError("Error: Your form is not valid, please fix the errors!");
      return;
    }
    setSubmitting(true);
    setFormError("");
    window.setTimeout(() => {
      const entry = {
        ...fields,
        submittedAt: new Date().toISOString(),
      };
      const existing = JSON.parse(sessionStorage.getItem("fransare-quotes") || "[]") as unknown[];
      existing.push(entry);
      sessionStorage.setItem("fransare-quotes", JSON.stringify(existing));
      setSubmitting(false);
      setDone(true);
    }, 700);
  };

  return (
    <>
      <PageHero title="Contact Us" image="/images/bg-1.jpg" />
      <section className="section" id="quote">
        <div className="wrap contact-grid">
          <div>
            <h2>Send Us a Messsage</h2>
            <hr />
            {done ? (
              <div className="thanks" role="status">
                <h3>Thank you for contacting us, we will be in touch shortly.</h3>
                <p>
                  Your note for {site.name} is saved in this browser. Call {site.phone} if you would like to follow up
                  today. We are open {site.hours}.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setDone(false);
                    setFields(empty);
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="quote-form" onSubmit={onSubmit} noValidate>
                {formError ? (
                  <p className="form-banner" role="alert">
                    {formError}
                  </p>
                ) : null}
                <div className="name-row">
                  <Field
                    id="first-name"
                    label="First Name"
                    required
                    value={fields.firstName}
                    error={errors.firstName}
                    onChange={(value) => set("firstName", value)}
                  />
                  <Field
                    id="last-name"
                    label="Last Name"
                    required
                    value={fields.lastName}
                    error={errors.lastName}
                    onChange={(value) => set("lastName", value)}
                  />
                </div>
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  required
                  value={fields.email}
                  error={errors.email}
                  autoComplete="email"
                  onChange={(value) => set("email", value)}
                />
                <Field
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={fields.phone}
                  error={errors.phone}
                  autoComplete="tel"
                  onChange={(value) => set("phone", value)}
                />
                <div className={`field ${errors.message ? "is-invalid" : ""}`}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    maxLength={180}
                    rows={5}
                    value={fields.message}
                    onChange={(event) => set("message", event.target.value)}
                  />
                  <div className="field-meta">
                    {errors.message ? <span className="field-error">{errors.message}</span> : <span />}
                    <span>
                      {fields.message.length}/180
                    </span>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
          <div className="contact-aside">
            <h2>Get In Touch</h2>
            <hr />
            <p>
              Have a project in mind? Our team is here to answer your questions. Whether you need building design,
              construction, renovation, or engineering works, {site.name} is just a message away.
            </p>
            <div className="contact-bits">
              <div>
                <span className="pill-icon">
                  <Icon name="phone" size={18} />
                </span>
                <div>
                  <strong>Contact Us</strong>
                  <a href={site.phoneHref}>{site.phone}</a>
                  <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp {site.whatsapp}
                  </a>
                </div>
              </div>
              <div>
                <span className="pill-icon">
                  <Icon name="mail" size={18} />
                </span>
                <div>
                  <strong>Our Email</strong>
                  <a href={site.emailHref}>{site.email}</a>
                </div>
              </div>
              <div>
                <span className="pill-icon">
                  <Icon name="pin" size={18} />
                </span>
                <div>
                  <strong>Our Address</strong>
                  <span>{site.address}</span>
                </div>
              </div>
              <div>
                <span className="pill-icon">
                  <Icon name="star" size={18} />
                </span>
                <div>
                  <strong>Hours</strong>
                  <span>{site.hours}</span>
                  <span>{site.hoursNote}</span>
                </div>
              </div>
            </div>
            <a className="map-card" href={site.mapsHref} target="_blank" rel="noreferrer">
              <span className="map-pin">
                <Icon name="pin" size={28} />
              </span>
              <span>
                <strong>{site.name}</strong>
                <em>{site.location}</em>
                Open in Google Maps
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className={`field ${error ? "is-invalid" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      ) : null}
    </div>
  );
}
