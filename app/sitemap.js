import { locations, materials, servicePages } from "../lib/seo-data";

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://www.meeralogistics.in/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...locations.map(({ slug }) => ({
      url: `https://www.meeralogistics.in/transport-service/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
    ...servicePages.map(([slug]) => ({
      url: `https://www.meeralogistics.in/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
    ...materials.map(([slug]) => ({
      url: `https://www.meeralogistics.in/material-supply/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
