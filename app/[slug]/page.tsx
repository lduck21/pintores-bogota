import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrushDivider from "@/components/BrushDivider";
import WhatsAppButton from "@/components/WhatsAppButton";
import { localidades, getLocalidadPorSlug } from "@/data/localidades";

const PREFIX = "pintores-a-domicilio-";

function extraerSlugLocalidad(fullSlug: string): string | null {
  if (!fullSlug.startsWith(PREFIX)) return null;
  return fullSlug.slice(PREFIX.length);
}

export function generateStaticParams() {
  return localidades.map((l) => ({ slug: `${PREFIX}${l.slug}` }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const locSlug = extraerSlugLocalidad(params.slug);
  const localidad = locSlug ? getLocalidadPorSlug(locSlug) : undefined;
  if (!localidad) return {};

  const title = `Pintores a domicilio en ${localidad.nombre}, Bogotá`;
  const description = `Pintores disponibles en ${localidad.nombre} (${localidad.zona} de Bogotá) para interiores y exteriores. Cotización clara y respuesta rápida por WhatsApp.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.slug}`,
    },
    openGraph: { title, description },
  };
}

export default function LocalidadPage({
  params,
}: {
  params: { slug: string };
}) {
  const locSlug = extraerSlugLocalidad(params.slug);
  const localidad = locSlug ? getLocalidadPorSlug(locSlug) : undefined;

  if (!localidad) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Pintores Bogotá — ${localidad.nombre}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${localidad.nombre}, Bogotá`,
    },
    description: localidad.intro,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <section className="pt-16 pb-10">
        <div className="max-w-[1120px] mx-auto px-6">
          <p className="text-inksoft text-sm mb-3">
            {localidad.zona} de Bogotá · {localidad.poblacionAprox}
          </p>
          <h1 className="font-display font-medium text-[clamp(2rem,4vw,2.8rem)] leading-[1.1] max-w-[22ch] mb-5">
            Pintores a domicilio en {localidad.nombre}
          </h1>
          <p className="text-[1.05rem] text-inksoft max-w-[60ch] mb-4">
            {localidad.intro}
          </p>
          <p className="text-inksoft mb-8">
            Cubrimos sectores como{" "}
            {localidad.barrios.slice(0, -1).join(", ")} y{" "}
            {localidad.barrios[localidad.barrios.length - 1]}.
          </p>
          <WhatsAppButton
            localidad={localidad.nombre}
            localidadSlug={localidad.slug}
            paginaOrigen={`localidad-${localidad.slug}`}
          >
            Cotizar en {localidad.nombre}
          </WhatsAppButton>
        </div>
      </section>

      <BrushDivider />

      <section className="pb-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <h2 className="font-display font-medium text-[1.6rem] mb-4">
            Cómo trabajamos en {localidad.nombre}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-card border border-line rounded-xl p-6 shadow-[0_8px_20px_rgba(35,32,27,0.05)]">
              <h3 className="font-semibold mb-2">1. Nos escribes</h3>
              <p className="text-inksoft text-[0.94rem]">
                Nos cuentas por WhatsApp qué necesitas pintar en{" "}
                {localidad.nombre} y el tamaño aproximado del espacio.
              </p>
            </div>
            <div className="bg-card border border-line rounded-xl p-6 shadow-[0_8px_20px_rgba(35,32,27,0.05)]">
              <h3 className="font-semibold mb-2">2. Cotizamos</h3>
              <p className="text-inksoft text-[0.94rem]">
                Te damos un precio claro el mismo día, sin visitas
                innecesarias.
              </p>
            </div>
            <div className="bg-card border border-line rounded-xl p-6 shadow-[0_8px_20px_rgba(35,32,27,0.05)]">
              <h3 className="font-semibold mb-2">3. Pintamos</h3>
              <p className="text-inksoft text-[0.94rem]">
                Coordinamos el pintor disponible en tu zona en la fecha que
                te sirva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
