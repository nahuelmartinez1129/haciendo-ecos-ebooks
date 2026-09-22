# Haciendo Ecos — Catálogo + Landings

Proyecto principal de Haciendo Ecos.

## Arquitectura actual

- `/` → catálogo general de Haciendo Ecos.
- `/productos/100-actividades-ninos` → primera landing completa.
- `/productos/mascota-sana` → placeholder listo para reemplazar.
- `/productos/pack-artesanal` → placeholder listo para reemplazar.

La idea es que las tres ofertas vivan dentro del mismo proyecto y dominio.

## Stack

- Next.js 15.5.20
- React 19
- TypeScript
- Tailwind CSS
- Meta Pixel opcional
- Meta Conversions API opcional

## Ejecutar

```bash
npm install
npm run dev
```

Luego:

`http://localhost:3000`

## Variables

Copiar `.env.example` como `.env.local`.

La primera landing ya usa el Hotlink de US$7,99:

`https://go.hotmart.com/S107706910X?ap=f0f3`

## Próximas landings

Los placeholders de Mascota Sana y Pack Artesanal están incluidos para que después podamos reemplazarlos sin cambiar la arquitectura.

Antes de construirlas hay que revisar sus páginas de venta, contenido, checkout, bonos y reglas de afiliación.
