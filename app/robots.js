export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://www.meeralogistics.in/sitemap.xml",
    host: "https://www.meeralogistics.in",
  };
}
