import { createClient } from "@supabase/supabase-js";

// SOLO se importa desde código de servidor (API routes). Nunca desde
// componentes de cliente: la service_role key tiene acceso total a la
// base de datos y jamás debe llegar al navegador.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const supabaseAdmin =
  supabaseUrl && serviceRoleKey
    ? createClient(supabaseUrl, serviceRoleKey, {
        auth: { persistSession: false },
      })
    : null;
