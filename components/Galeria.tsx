import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { galeria } from "@/data/galeria";

export default function Galeria() {
  return (
    <section className="pb-[70px]" id="galeria">
      <div className="max-w-[1160px] mx-auto px-7">
        <h2 className="font-display font-medium text-[1.8rem] mb-3.5">
          Trabajos recientes
        </h2>
        <p className="text-inksoft max-w-[56ch] mb-10">
          Desliza cada imagen para ver el antes y el después.
        </p>
        <div className="space-y-14">
          {galeria.map((proyecto) => (
            <div key={proyecto.id}>
              <h3 className="font-semibold text-[1.02rem] mb-3">
                {proyecto.titulo}
              </h3>
              <BeforeAfterSlider
                beforeSrc={proyecto.beforeSrc}
                afterSrc={proyecto.afterSrc}
                beforeAlt={`${proyecto.titulo} — antes`}
                afterAlt={`${proyecto.titulo} — después`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
