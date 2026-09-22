import Image from "next/image";
import Link from "next/link";
import { AffiliateCTA } from "@/components/affiliate-cta";
import { FAQ } from "@/components/faq";

const blocks = [
  ["🧩", "Juegos cognitivos", "Ideas de juego para incorporar momentos de atención, pensamiento y participación."],
  ["🎨", "Actividades sensoriales", "Propuestas sencillas para explorar los sentidos mediante actividades cotidianas."],
  ["📅", "Rutinas y ejercicios", "Recursos para organizar pequeños momentos de actividad dentro de la rutina."],
  ["💬", "Consejos emocionales", "Orientaciones prácticas presentadas de forma sencilla y adaptable."]
];

const faqs = [
  ["¿Qué es el producto?", "Es una guía digital práctica con juegos, rutinas, actividades cognitivas y sensoriales, ejercicios diarios y consejos emocionales."],
  ["¿Para quién está pensada?", "La información oficial del producto la presenta como una guía para madres de niños con TEA o TDAH que buscan incorporar actividades en casa."],
  ["¿Necesito materiales difíciles de conseguir?", "Según la información oficial del producto, las actividades están planteadas para realizarse sin materiales difíciles de conseguir."],
  ["¿Cómo recibo la guía?", "Después de completar la compra mediante Hotmart, el acceso se gestiona por la plataforma según las condiciones de la oferta."],
  ["¿Tiene garantía?", "La página de ventas informa una garantía de 7 días. Revisá las condiciones vigentes directamente en el checkout de Hotmart."],
  ["¿Es un tratamiento?", "No. Es un recurso educativo y práctico. No sustituye diagnóstico, tratamiento ni orientación profesional."]
];

export default function ActividadesPage() {
  return (
    <main className="overflow-hidden bg-white text-brand-navy">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-black">
                        <Image
              src="/images/haciendo-ecos-ebook-logo.png"
              alt="Haciendo Ecos"
              width={45}
              height={45}
              className="h-10 w-10 object-contain"
            />
            Haciendo Ecos
          </Link>
          <nav className="hidden gap-7 text-sm font-bold text-slate-600 md:flex">
            <a href="#incluye">Qué incluye</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <AffiliateCTA label="Quiero la guía" />
        </div>
      </header>

      <section className="hero-bg">
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[1fr_.9fr] lg:py-20">
          <div>
            <span className="eyebrow">GUÍA DIGITAL EN ESPAÑOL</span>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl">
              100 actividades para acompañar{" "}
              <span className="text-brand-teal">momentos de aprendizaje desde casa.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Una guía práctica con juegos, rutinas, actividades cognitivas y sensoriales,
              ejercicios diarios y consejos emocionales, presentada de forma sencilla y adaptable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AffiliateCTA label="Quiero mi guía ahora →" />
              <a href="#incluye" className="btn-secondary">Ver qué incluye</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
              <span>✓ Recurso digital</span>
              <span>✓ Actividades para casa</span>
              <span>✓ Materiales sencillos</span>
              <span>✓ Garantía de 7 días*</span>
            </div>
            <p className="mt-3 text-xs text-slate-500">*Según la página de ventas y condiciones vigentes de Hotmart.</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-brand-yellow/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white bg-white p-2 shadow-soft">
              <Image
                src="/images/100-actividades-reference.png"
                alt="Referencia visual de la landing de Haciendo Ecos"
                width={1279}
                height={1269}
                priority
                className="h-auto w-full rounded-[1.8rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-brand-lavender">
        <div className="container-page grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["🧠", "Ideas para la atención"],
            ["💚", "Momentos de conexión"],
            ["💡", "Recursos sencillos"],
            ["🏡", "Para hacer en casa"]
          ].map(([icon, title]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-card">
              <div className="text-3xl">{icon}</div>
              <h2 className="mt-4 text-lg font-black">{title}</h2>
            </div>
          ))}
        </div>
      </section>

      <section id="incluye" className="bg-brand-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">¿QUÉ VAS A ENCONTRAR?</span>
            <h2 className="section-title mt-4">Una guía con diferentes tipos de actividades.</h2>
            <p className="section-copy mx-auto">
              La información oficial del producto destaca estos bloques de contenido.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {blocks.map(([icon, title, text]) => (
              <article key={title} className="rounded-[1.7rem] bg-white p-7 shadow-card">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-mint text-3xl">{icon}</div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="rounded-[2.5rem] bg-brand-navy px-7 py-12 text-white sm:px-12 lg:px-16">
          <span className="text-xs font-black tracking-widest text-brand-yellow">PEQUEÑOS PASOS</span>
          <h2 className="mt-5 max-w-3xl text-3xl font-black sm:text-5xl">
            Tené nuevas ideas a mano para esos momentos en casa.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-200">
            Un único recurso digital para consultar propuestas y elegir la que mejor se adapte al momento.
          </p>
          <AffiliateCTA className="mt-8" label="Quiero ver la guía →" />
        </div>
      </section>

      <section id="preguntas" className="bg-brand-lavender">
        <div className="container-page py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">PREGUNTAS FRECUENTES</span>
            <h2 className="section-title mt-4">Todo claro antes de comprar.</h2>
          </div>
          <FAQ items={faqs.map(([q, a]) => ({ q, a }))} />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-[2rem] border border-brand-coral/20 bg-pink-50 p-8 shadow-card sm:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">COMPRA CON TRANQUILIDAD</span>
              <h2 className="mt-4 text-3xl font-black">Garantía informada de 7 días</h2>
              <p className="mt-3 leading-7 text-slate-600">
                La página de ventas informa una garantía de 7 días. Consultá las condiciones vigentes en Hotmart.
              </p>
            </div>
            <div className="grid h-28 w-28 shrink-0 place-items-center rounded-full border-8 border-white bg-brand-yellow text-center font-black shadow-card">
              7<br />DÍAS
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mint">
        <div className="container-page py-16 text-center">
          <h2 className="text-3xl font-black sm:text-5xl">¿Querés tener la guía a mano?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Consultá la oferta y completá tu compra mediante Hotmart.
          </p>
          <AffiliateCTA className="mt-8" label="Quiero mi guía ahora →" />
          <p className="mt-4 text-xs text-slate-500">Pago y entrega gestionados por Hotmart.</p>
        </div>
      </section>

      <footer className="bg-brand-navy">
        <div className="container-page py-10 text-xs leading-5 text-slate-400">
          <p className="font-black text-white">Haciendo Ecos</p>
          <p className="mt-2">Esta página participa en un programa de afiliados.</p>
          <p className="mt-2">Este recurso es educativo y no sustituye diagnóstico, tratamiento ni orientación profesional.</p>
        </div>
      </footer>
    </main>
  );
}
