import { notFound } from "next/navigation";
import SeoPageShell, { ContactCta } from "../../../components/SeoPageShell";
import { getMaterial, locations, materials } from "../../../lib/seo-data";

export function generateStaticParams() {
  return materials.map(([slug]) => ({ slug }));
}

export function generateMetadata({ params }) {
  const material = getMaterial(params.slug);
  if (!material) return {};
  const [slug, gujarati, name, image, description] = material;
  const title = `${name} Supplier & Transport in Gujarat | Meera Logistics`;
  const metaDescription = `${description} ${name} supply and transport in Jamnagar and across Gujarat. Call Meera Logistics: 9558959579.`;

  return {
    title,
    description: metaDescription,
    alternates: { canonical: `/material-supply/${slug}` },
    openGraph: {
      title,
      description: metaDescription,
      url: `https://www.meeralogistics.in/material-supply/${slug}`,
      images: [`/materials/${image}`],
    },
  };
}

export default function MaterialPage({ params }) {
  const material = getMaterial(params.slug);
  if (!material) notFound();

  const [slug, gujarati, name, image, description] = material;
  const url = `https://www.meeralogistics.in/material-supply/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name} Supply and Transport in Gujarat`,
    description,
    url,
    image: `https://www.meeralogistics.in/materials/${image}`,
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
      label="MATERIAL SUPPLY & TRANSPORT"
      title={`${gujarati} (${name}) Supply & Transport`}
      intro={`${name} ગુજરાતમાં કોઈપણ જગ્યાએ જોઈએ તો Meera Logisticsનો સંપર્ક કરો—material supplyથી લઈને તમારા સ્થળ સુધી transport support ઉપલબ્ધ છે.`}
      schema={schema}
    >
      <div className="seo-wrap">
        <img
          src={`/materials/${image}`}
          alt={`Meera Logistics ${name} supplier and transport Gujarat`}
          className="seo-material-photo"
        />

        <section className="seo-content">
          <h2>{name} Supplier and Transport Service in Gujarat</h2>
          <p>{description}</p>
          <p>
            Quantity, quality specification, loading point, unloading point અને
            delivery schedule share કર્યા પછી material availability, suitable
            truck type અને estimated transport rate confirm કરવામાં આવશે.
          </p>
          <p>
            Jamnagarથી Gujaratના industrial city, construction site, factory,
            warehouse અને commercial location સુધી requirement પ્રમાણે supply
            તથા delivery coordination ઉપલબ્ધ છે.
          </p>
        </section>

        <div className="seo-links">
          {locations.map(({ slug: citySlug, name: cityName }) => (
            <a key={citySlug} href={`/transport-service/${citySlug}`}>
              {name} in {cityName}
            </a>
          ))}
        </div>

        <ContactCta
          message={`${name}ની quantity, delivery location અને required date WhatsApp પર મોકલો.`}
        />
      </div>
    </SeoPageShell>
  );
}
