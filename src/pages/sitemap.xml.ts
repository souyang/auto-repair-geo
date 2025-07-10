import { getCollection } from "astro:content";
import { SITE } from "../config/site";

export async function GET() {
  const services = await getCollection("services");
  const vehicles = await getCollection("vehicles");
  const locations = await getCollection("locations");

  const pages = [
    // Main pages
    { url: "/", priority: 1.0, changefreq: "weekly" },
    { url: "/services", priority: 0.9, changefreq: "weekly" },
    { url: "/vehicles", priority: 0.9, changefreq: "weekly" },
    { url: "/service-area", priority: 0.8, changefreq: "monthly" },
    { url: "/appointments", priority: 0.9, changefreq: "monthly" },
    { url: "/specials", priority: 0.7, changefreq: "weekly" },
    { url: "/reviews", priority: 0.8, changefreq: "weekly" },
    { url: "/about", priority: 0.7, changefreq: "monthly" },
    { url: "/contact", priority: 0.8, changefreq: "monthly" },
    { url: "/faq", priority: 0.7, changefreq: "monthly" },

    // Content pages
    { url: "/check-engine-light", priority: 0.8, changefreq: "monthly" },
    { url: "/dealer-vs-independent", priority: 0.8, changefreq: "monthly" },
    {
      url: "/best-auto-repair-mountain-view",
      priority: 0.8,
      changefreq: "monthly",
    },
    {
      url: "/vehicles/toyota-common-problems",
      priority: 0.7,
      changefreq: "monthly",
    },

    // API and AI pages
    { url: "/for-ai", priority: 0.6, changefreq: "monthly" },
    { url: "/api/summary", priority: 0.5, changefreq: "daily" },

    // Service pages
    ...services.map((service) => ({
      url: `/services/${service.data.category}/${service.slug}`,
      priority: 0.8,
      changefreq: "monthly",
    })),

    // Vehicle pages
    ...vehicles.map((vehicle) => ({
      url: `/vehicles/${vehicle.slug}`,
      priority: 0.7,
      changefreq: "monthly",
    })),

    // Location pages
    ...locations.map((location) => ({
      url: `/service-area/${location.slug}`,
      priority: 0.7,
      changefreq: "monthly",
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE.url}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
