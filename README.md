# Pintores Bogotá

Sitio web para el proyecto **Pintores Bogotá** (pintoresbogota.com): captación de
clientes por localidad en Bogotá, con contacto directo por WhatsApp y CRM
interno en Supabase.

## 1. Antes de nada: reemplaza las imágenes de marcador

En `public/images/antes.jpg` y `public/images/despues.jpg` hay imágenes
genéricas de marcador de posición. Descarga las fotos reales de Pixabay
(gratis, sin atribución) y reemplázalas **con el mismo nombre de archivo**:

- Antes (pared/superficie sin pintar): elige una de
  - https://pixabay.com/es/photos/textura-yeso-rugoso-multa-yeso-1511759/
  - https://pixabay.com/es/photos/pared-antecedentes-textura-gris-529843/
  - https://pixabay.com/es/photos/textura-pared-estructura-2006031/
- Después (interior recién pintado): elige una de
  - https://pixabay.com/illustrations/room-interior-empty-yellow-room-938755/
  - https://pixabay.com/es/photos/sala-la-atmosfera-naturaleza-2663187/
  - https://pixabay.com/es/photos/interior-indoor-white-wall-open-2596976/

Descarga en tamaño grande, y guarda como `antes.jpg` / `despues.jpg` dentro de
`public/images/`.

## 2. Requisitos

- Node.js 18 o superior
- Cuenta de Supabase (plan gratuito)
- Cuenta de Vercel (plan gratuito)
- Repositorio en GitHub
- Dominio en Namecheap (ya lo tienes: pintoresbogota.com)

## 3. Configurar Supabase

1. Crea un proyecto nuevo en https://supabase.com (plan gratuito).
2. Ve a **SQL Editor > New query**, pega el contenido completo de
   `supabase/schema.sql` y ejecútalo. Esto crea las tablas `localidades`,
   `pintores`, `leads`, `trabajos` con las 19 localidades ya cargadas.
3. Ve a **Project Settings > API** y copia:
   - `Project URL` → variable `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → variable `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → variable `SUPABASE_SERVICE_ROLE_KEY` (¡secreta!,
     nunca la subas a GitHub ni la pongas en variables `NEXT_PUBLIC_*`)

## 4. Configurar variables de entorno

Copia `.env.example` como `.env.local` y completa los valores reales
(número de WhatsApp y credenciales de Supabase del paso anterior).

```bash
cp .env.example .env.local
```

## 5. Correr en local (opcional, para probar antes de publicar)

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## 6. Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio inicial Pintores Bogotá"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/pintores-bogota.git
git push -u origin main
```

## 7. Desplegar en Vercel

1. En https://vercel.com, click en **Add New > Project** e importa el
   repositorio de GitHub que acabas de crear.
2. En **Environment Variables**, agrega las mismas variables de tu
   `.env.local` (WhatsApp + las 3 de Supabase + `NEXT_PUBLIC_SITE_URL`).
3. Click en **Deploy**. En unos minutos tendrás una URL tipo
   `pintores-bogota.vercel.app` funcionando.

## 8. Conectar el dominio de Namecheap

1. En el proyecto de Vercel, ve a **Settings > Domains** y agrega
   `pintoresbogota.com` (y opcionalmente `www.pintoresbogota.com`).
2. Vercel te mostrará los registros DNS que debes crear. Normalmente:
   - Un registro **A** apuntando `@` a la IP que indique Vercel, o
   - Un registro **CNAME** apuntando `www` a `cname.vercel-dns.com`
3. Entra a Namecheap → **Domain List** → tu dominio → **Manage** →
   **Advanced DNS**, y agrega esos registros exactamente como Vercel los
   indique.
4. Espera de 10 minutos a algunas horas para que el DNS se propague.
   Vercel emitirá el certificado HTTPS automáticamente.

## 9. Indexación en Google (SEO)

1. Ve a https://search.google.com/search-console y agrega la propiedad
   `pintoresbogota.com` (verificación por DNS TXT en Namecheap, o por el
   registro que te indique Search Console).
2. Una vez verificado, en **Sitemaps**, envía:
   `https://pintoresbogota.com/sitemap.xml`
   (este sitemap ya se genera automáticamente y prioriza primero las
   localidades de fase 1 — Suba, Usaquén, Engativá, Fontibón, Chapinero).
3. No se usa Google Business Profile en este proyecto, según lo acordado.

## 10. Estructura del proyecto

```
app/
  page.tsx                 → Home
  [slug]/page.tsx           → Subpáginas /pintores-a-domicilio-<localidad>
  api/track-click/route.ts  → Registra cada clic en WhatsApp (server-side)
  sitemap.ts, robots.ts      → SEO técnico
components/
  Header, Footer, WhatsAppButton, BeforeAfterSlider, BrushDivider
data/
  localidades.ts             → Las 19 localidades, su fase y contenido único
lib/
  whatsapp.ts                → Arma el link de WhatsApp con mensaje pre-llenado
  supabaseAdmin.ts            → Cliente de Supabase SOLO para el servidor
supabase/
  schema.sql                 → Ejecutar una vez en Supabase
```

## 11. Próximos pasos (no incluidos todavía)

- **Cotizador interno**: herramienta protegida (login) donde ingresas precio
  del día de pintura, tipo de pintura, m², mano de obra y días estimados,
  para calcular el rango a cotizar. Vive aparte del sitio público — cuando
  quieras, seguimos con esto como una ruta protegida (`/admin`) o un panel
  separado.
- **Localidades de fase 2 y 3**: ya están en `data/localidades.ts` y en el
  sitemap, pero no aparecen todavía en la grilla de la home (que solo
  muestra fase 1). Cuando quieras activarlas visualmente, es un cambio de
  una línea en `app/page.tsx`.
- Reemplazar las imágenes de marcador de posición (paso 1).
