import "./seo-pages.css";

export const metadata = {
  metadataBase: new URL("https://www.meeralogistics.in"),

  title:
    "Transport, Logistics & Material Supply in Jamnagar | Meera Logistics",

  description:
    "Meera Logistics provides transport, logistics, truck booking, tipper, dumper and construction or industrial material supply across Gujarat.",

  keywords:
    [
      "Gujarat transport service",
      "Jamnagar transport service",
      "truck booking Gujarat",
      "tipper service Gujarat",
      "dumper transport Gujarat",
      "return load Gujarat",
      "Meera Logistics",
    ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Transport, Logistics & Material Supply in Jamnagar | Meera Logistics",

    description:
      "Transport, material supply, truck, tipper, dumper and return load service across Gujarat.",

    url: "https://www.meeralogistics.in",

    siteName: "Meera Logistics",

    locale: "gu_IN",

    type: "website",

    images: [
      {
        url: "/fleet/meera-logistics-tata-tipper.webp",
        width: 1400,
        height: 1400,
        alt: "Meera Logistics transport and material supply service Gujarat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Transport, Logistics & Material Supply in Jamnagar | Meera Logistics",
    description:
      "Transport, material supply, truck, tipper, dumper and return load service across Gujarat.",
    images: ["/fleet/meera-logistics-tata-tipper.webp"],
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",

    "@type": ["LocalBusiness", "MovingCompany"],

    "@id": "https://www.meeralogistics.in/#business",

    name: "Meera Logistics",

    url: "https://www.meeralogistics.in",

    logo: "https://www.meeralogistics.in/meera-logo.png",

    image: "https://www.meeralogistics.in/meera-logo.png",

    telephone: "+919558959579",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Jamnagar",

      addressRegion: "Gujarat",

      addressCountry: "IN",
    },

    areaServed: {
      "@type": "State",
      name: "Gujarat",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919558959579",
      contactType: "customer service",
      areaServed: "IN-GJ",
      availableLanguage: ["Gujarati", "Hindi"],
    },

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transport and Material Supply Services",
      itemListElement: [
        "Transport Service",
        "Logistics Service",
        "Truck Booking",
        "Tipper Service",
        "Dumper Service",
        "Return Load",
        "Construction Material Supply",
        "Industrial Material Supply",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: "Gujarat",
        },
      })),
    },

    description:
      "Gujarat transport, logistics, truck booking, tipper, dumper, return load and material supply service.",
  };

  return (
    <html lang="gu">
      <head>
        <meta
          name="google-site-verification"
          content="oGdIqTmPMvtFoAetZ-5FvavYCWKHxNX9Ooq22Oh3p4A"
        />

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
