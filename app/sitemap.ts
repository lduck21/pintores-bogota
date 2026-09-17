import type { MetadataRoute } from "next";
import { localidades } from "@/data/localidades";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pintoresbogota.com";

// Prioridad SEO más alta para las localidades de fase 1 (mayor
// población + poder adquisitivo), luego fase 2, luego fase 3.
const prioridadPorFase: Record<number, number> = {
  1: 0.9,
  2: 0.7,
  3: 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const paginasLocalidad: MetadataRoute.Sitemap = localidades.map((l) => ({
    url: `${siteUrl}/pintores-a-domicilio-${l.slug}`,
    changeFrequency: "weekly",
    priority: prioridadPorFase[l.fase] ?? 0.5,
  }));

  return [...home, ...paginasLocalidad];
}
