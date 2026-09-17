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
    default: "Pintores Bogotá — Pintura residencial con garantía",
    template: "%s | Pintores Bogotá",
  },
  description:
    "Pintura residencial en Bogotá con cotización por escrito, un responsable directo y garantía sobre el trabajo entregado.",
  openGraph: {
    title: "Pintores Bogotá",
    description:
      "Un pintor de confianza no debería ser un golpe de suerte. Cotización por escrito y un responsable directo, de principio a fin.",
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
      "Servicio de pintura residencial en Bogotá, con cotización por escrito, un responsable directo y garantía sobre el trabajo entregado.",
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
