"use client";

import type { ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface Props {
  localidad?: string;
  localidadSlug?: string;
  paginaOrigen?: string;
  children: ReactNode;
  className?: string;
}

export default function WhatsAppButton({
  localidad,
  localidadSlug,
  paginaOrigen,
  children,
  className = "",
}: Props) {
  const href = buildWhatsAppLink(localidad);

  function handleClick() {
    // Fire-and-forget: no bloquea ni retrasa la apertura de WhatsApp.
    try {
      fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          localidad_slug: localidadSlug,
          pagina_origen: paginaOrigen,
        }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // Ignorar: el tracking nunca debe afectar la experiencia del usuario.
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-2.5 bg-musgo text-white px-6 py-3.5 rounded font-semibold text-base shadow-[0_6px_18px_rgba(63,79,58,0.25)] hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(63,79,58,0.3)] transition ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49h-.56c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44s1.04 2.83 1.19 3.02c.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
        <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.86.5 3.63 1.44 5.19L2 22l4.94-1.42A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2zm0 18.06c-1.7 0-3.32-.46-4.72-1.32l-.34-.2-2.93.84.85-2.85-.22-.35a8.03 8.03 0 0 1-1.29-4.36c0-4.44 3.62-8.06 8.07-8.06 4.44 0 8.06 3.62 8.06 8.06 0 4.45-3.62 8.24-7.88 8.24z" />
      </svg>
      {children}
    </a>
  );
}
