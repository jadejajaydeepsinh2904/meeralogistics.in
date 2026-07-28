import WhatsAppIcon from "./WhatsAppIcon";

export default function SeoPageShell({ label, title, intro, schema, children }) {
  return (
    <main className="seo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav className="seo-nav">
        <a href="/" className="seo-brand">
          <img src="/meera-logo.png" alt="Meera Logistics logo" />
          MEERA LOGISTICS
        </a>
        <a href="/" className="seo-home-link">← મુખ્ય વેબસાઇટ</a>
      </nav>

      <header className="seo-hero">
        <div className="seo-hero-label">{label}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>

      {children}

      <footer className="seo-footer">
        Meera Logistics • Jamnagar, Gujarat • 9558959579
      </footer>
    </main>
  );
}

export function ContactCta({ message }) {
  return (
    <section className="seo-cta">
      <h2>Rate અને Availability માટે સંપર્ક કરો</h2>
      <p>{message}</p>
      <div className="seo-btns">
        <a href="tel:9558959579" className="seo-btn seo-btn-call">📞 9558959579</a>
        <a
          href="https://wa.me/919558959579"
          target="_blank"
          rel="noopener noreferrer"
          className="seo-btn"
        >
          <WhatsAppIcon /> WhatsApp Enquiry
        </a>
      </div>
    </section>
  );
}
