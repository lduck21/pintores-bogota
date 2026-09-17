import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Cliente de solo-inserción para el navegador. La anon key en Supabase
// solo permite lo que las políticas RLS autoricen (ver supabase/schema.sql:
// únicamente INSERT en la tabla "leads" está permitido desde el cliente).
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
