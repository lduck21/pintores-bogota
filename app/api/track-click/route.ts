import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// Registra cada clic en el botón de WhatsApp: localidad de origen,
// página desde la que se hizo clic y momento. No pide nada al visitante;
// es 100% silencioso y solo alimenta el panel interno de leads.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { localidad_slug, pagina_origen } = body as {
      localidad_slug?: string;
      pagina_origen?: string;
    };

    if (!supabaseAdmin) {
      // Supabase no configurado todavía (ej. en desarrollo local sin .env).
      // No rompemos la experiencia del usuario por esto.
      return NextResponse.json({ ok: true, tracked: false });
    }

    await supabaseAdmin.from("leads").insert({
      localidad_slug: localidad_slug || null,
      pagina_origen: pagina_origen || null,
      canal: "whatsapp",
      estado: "nuevo",
    });

    return NextResponse.json({ ok: true, tracked: true });
  } catch (err) {
    // Nunca dejamos que un fallo de tracking rompa el clic del usuario.
    return NextResponse.json({ ok: true, tracked: false });
  }
}
