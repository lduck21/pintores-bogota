import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrushDivider from "@/components/BrushDivider";
import WhatsAppButton from "@/components/WhatsAppButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { getLocalidadesPorFase } from "@/data/localidades";

export default function HomePage() {
  const fase1 = getLocalidadesPorFase(1);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-16">
        <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <h1 className="font-display font-medium text-[clamp(2.1rem,4.4vw,3.2rem)] leading-[1.08] max-w-[15ch] mb-5">
              Pintores de confianza, cerca de tu casa
            </h1>
            <p className="text-[1.08rem] text-inksoft max-w-[42ch] mb-7">
              Encuentra un pintor disponible en tu localidad. Cotización
              clara, para interiores y exteriores.
            </p>
            <WhatsAppButton paginaOrigen="home-hero">
              Cotizar por WhatsApp
            </WhatsAppButton>
            <p className="text-[0.85rem] text-inksoft mt-3.5">
              Respuesta en minutos · Servicio en las 20 localidades de
              Bogotá
            </p>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden bg-panel border border-line shadow-[0_12px_30px_rgba(35,32,27,0.06)] flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-[78%] h-[78%]" aria-hidden="true">
              <path
                className="fill-ocre animate-hue motion-reduce:animate-none"
                d="M20 60 Q 40 20, 90 30 T 180 50 Q 160 90, 110 80 T 30 100 Z"
              />
              <path
                className="fill-rojo animate-hue motion-reduce:animate-none opacity-90"
                style={{ animationDelay: "-3s" }}
                d="M30 120 Q 60 90, 120 110 T 190 130 Q 150 170, 90 150 T 20 160 Z"
              />
              <path
                className="fill-verde animate-hue motion-reduce:animate-none opacity-80"
                style={{ animationDelay: "-6s" }}
                d="M50 20 Q 90 50, 150 30 Q 170 60, 130 70 Q 90 40, 60 60 Z"
              />
            </svg>
          </div>
        </div>
      </section>

      <BrushDivider />

      {/* Antes / Después */}
      <section className="pb-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <h2 className="font-display font-medium text-[1.9rem] mb-2">
            Mira la diferencia
          </h2>
          <p className="text-inksoft max-w-[52ch] mb-8">
            Desliza para comparar el antes y el después de un trabajo de
            pintura.
          </p>
          <BeforeAfterSlider
            beforeSrc="/images/antes.jpg"
            afterSrc="/images/despues.jpg"
          />
        </div>
      </section>

      {/* Servicios */}
      <section className="pb-16" id="servicios">
        <div className="max-w-[1120px] mx-auto px-6">
          <h2 className="font-display font-medium text-[1.9rem] mb-2">
            Un pintor para cada trabajo
          </h2>
          <p className="text-inksoft max-w-[52ch] mb-8">
            Sea un cuarto, una fachada o un repintado completo, gestionamos
            la cotización y te asignamos al pintor adecuado para tu zona.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-card border border-line rounded-xl p-6 shadow-[0_8px_20px_rgba(35,32,27,0.05)]">
              <div className="w-[38px] h-[38px] rounded-lg bg-ocre mb-4" />
              <h3 className="font-semibold mb-2">Interiores</h3>
              <p className="text-inksoft text-[0.94rem]">
                Cuartos, salas, cocinas y baños. Acabados mate, satinado o
                vinilo tipo 1 y 2.
              </p>
            </div>
            <div className="bg-card border border-line rounded-xl p-6 shadow-[0_8px_20px_rgba(35,32,27,0.05)]">
              <div className="w-[38px] h-[38px] rounded-lg bg-rojo mb-4" />
              <h3 className="font-semibold mb-2">Fachadas y exteriores</h3>
              <p className="text-inksoft text-[0.94rem]">
                Impermeabilización, estuco y pintura resistente al clima de
                Bogotá.
              </p>
            </div>
            <div className="bg-card border border-line rounded-xl p-6 shadow-[0_8px_20px_rgba(35,32,27,0.05)]">
              <div className="w-[38px] h-[38px] rounded-lg bg-verde mb-4" />
              <h3 className="font-semibold mb-2">Resanes y acabados</h3>
              <p className="text-inksoft text-[0.94rem]">
                Corrección de fisuras menores, humedad superficial y estuco
                previo al pintado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localidades */}
      <section className="pb-16" id="localidades">
        <div className="max-w-[1120px] mx-auto px-6">
          <h2 className="font-display font-medium text-[1.9rem] mb-2">
            Cobertura por localidad
          </h2>
          <p className="text-inksoft max-w-[52ch] mb-8">
            Empezamos por las zonas con más solicitudes; iremos activando el
            resto progresivamente.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
            {fase1.map((loc, i) => (
              <Link
                key={loc.slug}
                href={`/pintores-a-domicilio-${loc.slug}`}
                className="border border-line rounded-[10px] px-4 py-[18px] bg-card shadow-[0_6px_16px_rgba(35,32,27,0.05)] hover:-translate-y-0.5 transition"
              >
                <span className="font-display text-inksoft text-[0.85rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-1.5 mb-1 font-semibold">{loc.nombre}</h4>
                <p className="text-[0.85rem] text-inksoft">
                  Pintores disponibles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="pb-[72px]" id="contacto">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="bg-card border border-line rounded-2xl p-8 md:p-12 grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            <div>
              <h3 className="font-display font-medium text-[1.6rem] mb-3">
                Cuéntanos qué necesitas pintar
              </h3>
              <p className="text-inksoft max-w-[40ch]">
                Escríbenos por WhatsApp con tu localidad y el tipo de
                trabajo. Te confirmamos disponibilidad y precio estimado el
                mismo día.
              </p>
            </div>
            <div>
              <WhatsAppButton paginaOrigen="home-contacto">
                Escribir ahora
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
