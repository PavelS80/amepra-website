import type { MetadataRoute } from "next";

const base = "https://www.amepra.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/o-nas", "/sluzby", "/akce", "/reference", "/kontakt"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
