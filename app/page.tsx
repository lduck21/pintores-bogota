import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SwatchRibbon from "@/components/SwatchRibbon";
import WhatsAppButton from "@/components/WhatsAppButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-8">
        <div className="max-w-[1160px] mx-auto px-7 grid md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <p className="text-[0.85rem] text-inksoft mb-4">
              Pintura residencial en Bogotá
            </p>
            <h1 className="font-display font-medium text-[clamp(2.1rem,4vw,3rem)] leading-[1.14] max-w-[16ch] mb-6">
              Un pintor de confianza no debería ser un golpe de suerte
            </h1>
            <p className="text-[1.08rem] text-inksoft max-w-[44ch] mb-8">
              Gestionamos cada detalle de tu proyecto de pintura — de la
              cotización por escrito a la entrega final — con un solo
              responsable a cargo, de principio a fin.
            </p>
            <WhatsAppButton paginaOrigen="home-hero">
              Solicitar cotización
            </WhatsAppButton>
            <p className="text-[0.85rem] text-inksoft mt-4">
              Cotización por escrito · Un responsable directo, no un
              intermediario
            </p>
          </div>

          <div className="relative aspect-[4/5] rounded overflow-hidden shadow-[0_24px_50px_rgba(32,31,27,0.14)] bg-[linear-gradient(160deg,#E4E0D5_0%,#D7D2C4_55%,#C9C3B2_100%)]">
            <div className="absolute bottom-6 left-6 right-6 flex gap-2.5">
              <div className="flex-1 h-[54px] rounded-sm shadow-[0_8px_18px_rgba(32,31,27,0.18)] bg-musgo" />
              <div className="flex-1 h-[54px] rounded-sm shadow-[0_8px_18px_rgba(32,31,27,0.18)] bg-laton" />
              <div className="flex-1 h-[54px] rounded-sm shadow-[0_8px_18px_rgba(32,31,27,0.18)] bg-terracota" />
              <div className="flex-1 h-[54px] rounded-sm shadow-[0_8px_18px_rgba(32,31,27,0.18)] bg-[#8B8878]" />
            </div>
          </div>
        </div>
      </section>

      <SwatchRibbon />

      {/* Así medimos la calidad de un trabajo bien hecho */}
      <section className="pb-[70px]">
        <div className="max-w-[1160px] mx-auto px-7">
          <h2 className="font-display font-medium text-[1.8rem] mb-3.5">
            Así medimos la calidad de un trabajo bien hecho
          </h2>
          <p className="text-inksoft max-w-[56ch] mb-10">
            Esto es lo que puedes esperar en cada proyecto, sin excepciones.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                t: "Cotización firmada, precio cerrado",
                d: "Precio por escrito antes de empezar. Sin ajustes de última hora.",
              },
              {
                t: "Un responsable, no una cuadrilla anónima",
                d: "Alguien coordina tu proyecto de principio a fin, disponible si necesitas escribir.",
              },
              {
                t: "Garantía por escrito",
                d: "Si algo no quedó como se acordó, lo corregimos sin costo adicional.",
              },
              {
                t: "Equipo verificado",
                d: "Cada persona que entra a tu casa pasa por un proceso de verificación previo.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="bg-card border border-line rounded-lg p-7 flex gap-4"
              >
                <span className="flex-none w-6 h-6 rounded-full bg-musgo/10 text-musgo font-bold flex items-center justify-center text-sm">
                  ＋
                </span>
                <div>
                  <h3 className="font-semibold text-[1.02rem] mb-1.5">
                    {item.t}
                  </h3>
                  <p className="text-inksoft text-[0.94rem]">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Antes / Después */}
      <section className="pb-[70px]">
        <div className="max-w-[1160px] mx-auto px-7">
          <h2 className="font-display font-medium text-[1.8rem] mb-3.5">
            El resultado, de un vistazo
          </h2>
          <p className="text-inksoft max-w-[56ch] mb-10">
            Desliza para comparar el antes y el después de un trabajo de
            pintura.
          </p>
          <BeforeAfterSlider
            beforeSrc="/images/antes.jpg"
            afterSrc="/images/despues.jpg"
          />
        </div>
      </section>

      {/* Proceso */}
      <section className="pb-[70px]" id="proceso">
        <div className="max-w-[1160px] mx-auto px-7">
          <h2 className="font-display font-medium text-[1.8rem] mb-3.5">
            Cómo trabajamos
          </h2>
          <p className="text-inksoft max-w-[56ch] mb-10">
            Tres pasos, sin sorpresas en el camino.
          </p>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                n: "01",
                t: "Visita y cotización",
                d: "Evaluamos el espacio y te entregamos una cotización cerrada por escrito, sin costos ocultos.",
              },
              {
                n: "02",
                t: "Ejecución supervisada",
                d: "Un responsable directo coordina el trabajo de inicio a fin, con fechas confirmadas.",
              },
              {
                n: "03",
                t: "Entrega y garantía",
                d: "Revisamos el resultado contigo antes de dar por cerrado el proyecto, con garantía por escrito.",
              },
            ].map((step) => (
              <div key={step.n}>
                <span className="font-display italic text-[1.6rem] text-laton mb-2.5 block">
                  {step.n}
                </span>
                <h3 className="font-semibold text-[1.05rem] mb-2">
                  {step.t}
                </h3>
                <p className="text-inksoft text-[0.94rem]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="pb-[70px]">
        <div className="max-w-[1160px] mx-auto px-7">
          <div className="bg-ink text-bg rounded-lg p-8 md:p-11 grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            <div>
              <h3 className="font-display font-medium text-[1.4rem] mb-3 text-white">
                Garantía de satisfacción
              </h3>
              <p className="opacity-85 max-w-[42ch]">
                Si algo no quedó como se acordó en la cotización, lo
                corregimos sin costo adicional. Preferimos perder una tarde
                a perder tu confianza.
              </p>
            </div>
            <div>
              <WhatsAppButton
                paginaOrigen="home-garantia"
                className="!bg-laton !shadow-[0_6px_18px_rgba(169,129,46,0.3)]"
              >
                Hablar con nosotros
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="pb-20" id="contacto">
        <div className="max-w-[1160px] mx-auto px-7">
          <div className="bg-card border border-line rounded-lg p-8 md:p-11 grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            <div>
              <h3 className="font-display font-medium text-[1.4rem] mb-2.5">
                Cuéntanos sobre tu proyecto
              </h3>
              <p className="text-inksoft max-w-[40ch]">
                Escríbenos por WhatsApp con tu zona y el tipo de espacio.
                Te confirmamos una visita y cotización.
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
