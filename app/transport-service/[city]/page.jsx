import { notFound } from "next/navigation";
import SeoPageShell, { ContactCta } from "../../../components/SeoPageShell";
import { getLocation, locations, servicePages } from "../../../lib/seo-data";

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ city: slug }));
}

export function generateMetadata({ params }) {
  const location = getLocation(params.city);
  if (!location) return {};

  const title = `Transport & Logistics Service in ${location.name} | Meera Logistics`;
  const description = `Truck booking, tipper, dumper, full-load transport and material supply service in ${location.name}, Gujarat. Call Meera Logistics: 9558959579.`;

  return {
    title,
    description,
    alternates: { canonical: `/transport-service/${location.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.meeralogistics.in/transport-service/${location.slug}`,
      images: ["/fleet/meera-logistics-tata-tipper.webp"],
    },
  };
}

export default function LocationPage({ params }) {
  const location = getLocation(params.city);
  if (!location) notFound();

  const url = `https://www.meeralogistics.in/transport-service/${location.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Transport and Logistics Service in ${location.name}`,
    url,
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: { "@type": "State", name: "Gujarat" },
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.meeralogistics.in/#business",
      name: "Meera Logistics",
      telephone: "+919558959579",
    },
    serviceType: [
      "Truck Booking",
      "Tipper Service",
      "Dumper Transport",
      "Full Truck Load",
      "Material Supply",
      "Return Load",
    ],
  };

  return (
    <SeoPageShell
      label={`${location.icon} GUJARAT SERVICE AREA`}
      title={`Transport & Logistics Service in ${location.name}`}
      intro={`Meera Logistics દ્વારા ${location.gujarati} અને આસપાસના routes માટે Truck Booking, Tipper, Dumper, Full Load Transport અને Material Supply support.`}
      schema={schema}
    >
      <div className="seo-wrap">
        <section className="seo-content">
          <h2>Meera Logistics – {location.name} Transport Support</h2>
          <p>
            {location.focus}. Loading point, unloading point, material,
            quantity અને required vehicle પ્રમાણે suitable transport
            arrangement માટે અમારી ટીમનો સંપર્ક કરી શકાય છે.
          </p>
          <p>
            મુખ્ય service coverage: {location.route}. Vehicle availability,
            route condition, material type અને delivery schedule પ્રમાણે rate
            confirm કરવામાં આવે છે.
          </p>
        </section>

        <section className="seo-grid">
          <article className="seo-card">
            <h3>🚛 Truck Booking</h3>
            <p>Industrial, commercial અને general goods માટે full-load truck booking.</p>
          </article>
          <article className="seo-card">
            <h3>⛏️ Tipper & Dumper</h3>
            <p>Kapchi, sand, soil, minerals અને bulk material માટે vehicle support.</p>
          </article>
          <article className="seo-card">
            <h3>📦 Material Supply</h3>
            <p>Construction અને industrial materialનું વેચાણ તથા site delivery.</p>
          </article>
        </section>

        <div className="seo-links">
          {servicePages.map(([slug, name]) => (
            <a key={slug} href={`/services/${slug}`}>{name}</a>
          ))}
        </div>

        <ContactCta
          message={`${location.name}માં loading, unloading, material અને truck type WhatsApp પર મોકલો.`}
        />
      </div>
    </SeoPageShell>
  );
}
