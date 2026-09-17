"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Antes de pintar",
  afterAlt = "Después de pintar",
}: Props) {
  const [value, setValue] = useState(50);

  return (
    <div>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(35,32,27,0.08)] select-none bg-panel">
        {/* Después: capa de fondo completa */}
        <div className="absolute inset-0">
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1120px"
            className="object-cover"
            priority
          />
          <span className="absolute bottom-4 right-4 text-xs font-semibold text-white bg-ink/55 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Después
          </span>
        </div>

        {/* Antes: capa recortada por el slider */}
        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-white"
          style={{ width: `${value}%` }}
        >
          <div className="relative h-full" style={{ width: "min(1120px, 100vw)" }}>
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              sizes="(max-width: 768px) 100vw, 1120px"
              className="object-cover"
            />
          </div>
          <span className="absolute bottom-4 left-4 text-xs font-semibold text-white bg-ink/55 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Antes
          </span>
        </div>

        {/* Manija visual */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{ left: `${value}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-white shadow-lg absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center text-ink text-sm">
            ↔
          </div>
        </div>

        {/* Input real (invisible, controla el slider) */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Comparar antes y después"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      <p className="text-center text-inksoft text-sm mt-3">
        Arrastra el círculo para comparar el antes y el después
      </p>
    </div>
  );
}
