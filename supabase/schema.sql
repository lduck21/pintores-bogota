-- =========================================================
-- Esquema de Supabase para Pintores Bogotá
-- Ejecutar en: Supabase Dashboard > SQL Editor > New query
-- =========================================================

-- ---------------------------------------------------------
-- Tabla: localidades (catálogo fijo, 19 localidades activas)
-- ---------------------------------------------------------
create table if not exists localidades (
  slug text primary key,
  nombre text not null,
  zona text not null,
  fase smallint not null check (fase in (1,2,3)),
  activa boolean not null default true
);

-- ---------------------------------------------------------
-- Tabla: pintores (base de datos del equipo de pintores)
-- ---------------------------------------------------------
create table if not exists pintores (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  telefono text,
  localidades_cubre text[] not null default '{}', -- slugs de localidades
  disponible boolean not null default true,
  calificacion_interna smallint check (calificacion_interna between 1 and 5),
  notas text,
  creado_en timestamptz not null default now()
);

-- ---------------------------------------------------------
-- Tabla: leads (cada clic en WhatsApp + cotizaciones manuales)
-- ---------------------------------------------------------
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  localidad_slug text references localidades(slug),
  pagina_origen text,
  canal text not null default 'whatsapp',
  nombre_contacto text,
  telefono_contacto text,
  tipo_trabajo text,
  metros_aprox numeric,
  estado text not null default 'nuevo'
    check (estado in ('nuevo','cotizado','asignado','cerrado','descartado')),
  pintor_asignado uuid references pintores(id),
  creado_en timestamptz not null default now()
);

-- ---------------------------------------------------------
-- Tabla: trabajos (una vez el lead se convierte en trabajo real)
-- ---------------------------------------------------------
create table if not exists trabajos (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id),
  pintor_id uuid references pintores(id),
  valor_cotizado numeric,
  comision numeric,
  estado_pago text not null default 'pendiente'
    check (estado_pago in ('pendiente','pagado','cancelado')),
  fecha_inicio date,
  fecha_fin_estimada date,
  creado_en timestamptz not null default now()
);

-- =========================================================
-- Seguridad (Row Level Security)
-- El sitio público solo necesita PODER INSERTAR filas de
-- tracking silencioso a través del API route de Next.js, el
-- cual usa la service_role key (bypassa RLS por diseño).
-- Por eso, para las tablas internas del CRM, dejamos RLS
-- activado SIN políticas públicas: solo la service_role key
-- (usada exclusivamente en el servidor) puede leer/escribir.
-- =========================================================
alter table localidades enable row level security;
alter table pintores enable row level security;
alter table leads enable row level security;
alter table trabajos enable row level security;

-- No se crean políticas para el rol "anon" ni "authenticated":
-- esto bloquea cualquier acceso directo desde el navegador,
-- incluso si alguien encuentra la anon key en el código del sitio.

-- ---------------------------------------------------------
-- Datos iniciales de localidades (fase 1, 2 y 3)
-- ---------------------------------------------------------
insert into localidades (slug, nombre, zona, fase) values
  ('suba', 'Suba', 'Norte', 1),
  ('usaquen', 'Usaquén', 'Norte', 1),
  ('engativa', 'Engativá', 'Occidente', 1),
  ('fontibon', 'Fontibón', 'Occidente', 1),
  ('chapinero', 'Chapinero', 'Centro-Norte', 1),
  ('kennedy', 'Kennedy', 'Suroccidente', 2),
  ('teusaquillo', 'Teusaquillo', 'Centro-Occidente', 2),
  ('barrios-unidos', 'Barrios Unidos', 'Centro', 2),
  ('bosa', 'Bosa', 'Suroccidente', 2),
  ('puente-aranda', 'Puente Aranda', 'Centro-Occidente', 2),
  ('san-cristobal', 'San Cristóbal', 'Suroriente', 3),
  ('rafael-uribe-uribe', 'Rafael Uribe Uribe', 'Suroriente', 3),
  ('ciudad-bolivar', 'Ciudad Bolívar', 'Sur', 3),
  ('usme', 'Usme', 'Sur', 3),
  ('tunjuelito', 'Tunjuelito', 'Sur', 3),
  ('santa-fe', 'Santa Fe', 'Centro', 3),
  ('los-martires', 'Los Mártires', 'Centro', 3),
  ('antonio-narino', 'Antonio Nariño', 'Centro-Sur', 3),
  ('la-candelaria', 'La Candelaria', 'Centro', 3)
on conflict (slug) do nothing;
