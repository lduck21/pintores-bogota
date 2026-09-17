import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pintoresbogota.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pintores Bogotá — Pintores a domicilio en tu localidad",
    template: "%s | Pintores Bogotá",
  },
  description:
    "Encuentra un pintor disponible en tu localidad de Bogotá. Cotización clara para interiores y exteriores, con respuesta rápida por WhatsApp.",
  openGraph: {
    title: "Pintores Bogotá",
    description:
      "Pintores de confianza cerca de tu casa, en las localidades de Bogotá.",
    url: siteUrl,
    siteName: "Pintores Bogotá",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pintores Bogotá",
    url: siteUrl,
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    description:
      "Servicio de pintores a domicilio para interiores y exteriores en las localidades de Bogotá.",
  };

  return (
    <html lang="es" data-theme="light">
      <body className={`${fraunces.variable} ${workSans.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
