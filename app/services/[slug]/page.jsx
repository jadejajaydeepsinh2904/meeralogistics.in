import { notFound } from "next/navigation";
import SeoPageShell, { ContactCta } from "../../../components/SeoPageShell";
import { getService, locations, servicePages } from "../../../lib/seo-data";

export function generateStaticParams() {
  return servicePages.map(([slug]) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  const [slug, name, , description] = service;
  const title = `${name} in Jamnagar & Gujarat | Meera Logistics`;
  const metaDescription = `${description} Meera Logistics serves Jamnagar and major Gujarat routes. Call 9558959579.`;

  return {
    title,
    description: metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description: metaDescription,
      url: `https://www.meeralogistics.in/services/${slug}`,
      images: ["/fleet/meera-logistics-tata-tipper.webp"],
    },
  };
}

export default function ServicePage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();
  const [slug, name, gujarati, description] = service;
  const url = `https://www.meeralogistics.in/services/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name} in Jamnagar and Gujarat`,
    description,
    url,
    areaServed: { "@type": "State", name: "Gujarat" },
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.meeralogistics.in/#business",
      name: "Meera Logistics",
      telephone: "+919558959579",
    },
  };

  return (
    <SeoPageShell
      label="MEERA LOGISTICS SERVICE"
      title={`${gujarati} | ${name} in Gujarat`}
      intro={`${description} Jamnagarથી Gujaratના મુખ્ય શહેરો, ports અને industrial areas માટે service support.`}
      schema={schema}
    >
      <div className="seo-wrap">
        <section className="seo-content">
          <h2>{name} by Meera Logistics</h2>
          <p>{description}</p>
          <p>
            Booking માટે loading point, unloading point, material, quantity,
            truck type અને preferred date જણાવો. Route અને availability પ્રમાણે
            estimated rate તથા vehicle arrangementની માહિતી મળશે.
          </p>
        </section>

        <section className="seo-grid">
          <article className="seo-card">
            <h3>📍 Route Based Service</h3>
            <p>Pickup અને delivery location પ્રમાણે Gujarat route coordination.</p>
          </article>
          <article className="seo-card">
            <h3>🚛 Vehicle Options</h3>
            <p>Truck, tipper, dumper, body truck અને trailer requirement support.</p>
          </article>
          <article className="seo-card">
            <h3>📲 Direct Support</h3>
            <p>Call અથવા WhatsAppથી enquiry અને booking coordination.</p>
          </article>
        </section>

        <div className="seo-links">
          {locations.map(({ slug: citySlug, name: cityName }) => (
            <a key={citySlug} href={`/transport-service/${citySlug}`}>
              {name} in {cityName}
            </a>
          ))}
        </div>

        <ContactCta message={`${name} માટે તમારી route અને material details મોકલો.`} />
      </div>
    </SeoPageShell>
  );
}
