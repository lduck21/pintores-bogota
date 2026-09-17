export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573143231456";

/**
 * Construye un enlace de WhatsApp con mensaje pre-llenado.
 * Si se pasa una localidad, la incluye en el mensaje para dar contexto
 * inmediato de dónde viene el lead.
 */
export function buildWhatsAppLink(localidad?: string) {
  const base = `Hola, quiero cotizar pintura a domicilio`;
  const texto = localidad ? `${base} en ${localidad}` : base;
  const encoded = encodeURIComponent(texto);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
