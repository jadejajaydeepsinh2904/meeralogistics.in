export const metadata = {
  title:
    "Meera Logistics | Gujarat Transport Service | Truck, Tipper & Return Load",

  description:
    "Meera Logistics provides Gujarat transport service, Jamnagar truck booking, tipper service, dumper transport and return load service across Gujarat.",

  keywords:
    "Gujarat transport service, Jamnagar transport, truck booking Gujarat, tipper service Gujarat, dumper transport, return load Gujarat, logistics company Gujarat, Meera Logistics",

  openGraph: {
    title: "Meera Logistics - Gujarat Transport Service",

    description:
      "Truck, Tipper, Dumper and Return Load service across Gujarat.",

    url: "https://www.meeralogistics.in",

    siteName: "Meera Logistics",

    locale: "gu_IN",

    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: "Meera Logistics",

    url: "https://www.meeralogistics.in",

    telephone: "+919558959579",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Jamnagar",

      addressRegion: "Gujarat",

      addressCountry: "IN",
    },

    areaServed: "Gujarat",

    description:
      "Gujarat transport service for truck booking, tipper service, dumper transport and return load.",
  };

  return (
    <html lang="gu">
      <head>
        <meta
          name="google-site-verification"
          content="oGdIqTmPMvtFoAetZ-5FvavYCWKHxNX9Ooq22Oh3p4A"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta charSet="UTF-8" />

        <link rel="icon" href="/meera-logo.png" />

        <meta name="theme-color" content="#071a4f" />
      </head>

      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}
      </body>
    </html>
  );
}
