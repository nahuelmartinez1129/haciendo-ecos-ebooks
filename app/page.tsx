import Link from "next/link";
import Image from "next/image";
const products = [
  {
    href: "/productos/100-actividades-ninos",
    emoji: "🧒",
    category: "Familia y aprendizaje",
    title: "100 Actividades para Niños",
    description:
      "Una guía digital con juegos, rutinas, actividades cognitivas y sensoriales para realizar desde casa.",
    status: "Disponible",
    tone: "mint"
  },
  {
  href: "/productos/mascota-sana",
  emoji: "🐶",
  category: "Mascotas",
  title: "Mascota Sana",
  description:
    "250 recetas para perros y gatos, snacks, premios, menús semanales y 7 materiales adicionales.",
  status: "Disponible",
  tone: "yellow"
},
{
  href: "/productos/pack-artesanal",
  emoji: "🕯️",
  category: "Manualidades y emprendimiento",
  title: "Pack Artesanal Completo",
  description:
    "Velas, jabones, bombas y sales de baño, con 3 guías prácticas y materiales adicionales.",
  status: "Disponible",
  tone: "lavender"
}
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
  src="/images/haciendo-ecos-ebook-logo.png"
  alt="Haciendo Ecos"
  width={45}
  height={45}
  className="h-10 w-10 object-contain"
/>
            <div>
              <div className="font-black leading-none text-brand-navy">Haciendo Ecos</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-brand-teal">
                Ebooks que generan cambios
              </div>
            </div>
          </Link>

          <a href="#productos" className="btn-primary hidden sm:inline-flex">
            Ver productos
          </a>
        </div>
      </header>

      <section className="catalog-hero">
        <div className="container-page py-20 text-center sm:py-28">
          <span className="eyebrow">RECURSOS DIGITALES</span>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">
            Ideas que podés convertir en{" "}
            <span className="text-brand-teal">nuevos momentos.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            En Haciendo Ecos reunimos guías y recursos digitales prácticos para aprender,
            crear y acompañar la vida cotidiana.
          </p>
          <a href="#productos" className="btn-primary mt-9">
            Explorar catálogo →
          </a>
        </div>
      </section>

      <section id="productos" className="bg-brand-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">NUESTRO CATÁLOGO</span>
            <h2 className="section-title mt-4">Encontrá un recurso para lo que estás buscando.</h2>
            <p className="section-copy">
              Cada producto tiene su propia página con información de la oferta y acceso al
              checkout correspondiente.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className={`product-card ${product.tone === "mint" ? "product-mint" : product.tone === "yellow" ? "product-yellow" : "product-lavender"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{product.emoji}</span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-black text-brand-navy">
                    {product.status}
                  </span>
                </div>
                <div className="mt-8">
                  <p className="text-xs font-black uppercase tracking-widest text-brand-teal">
                    {product.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-brand-navy">{product.title}</h3>
                  <p className="mt-3 min-h-[96px] text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>
                </div>
                {product.status === "Disponible" ? (
                  <Link href={product.href} className="btn-primary mt-7 w-full">
                    Ver producto →
                  </Link>
                ) : (
                  <span className="mt-7 inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 text-sm font-black text-slate-500">
                    Landing en preparación
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="rounded-[2.5rem] bg-brand-navy px-7 py-12 text-white sm:px-12 lg:px-16">
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black tracking-widest text-brand-yellow">
            HACIENDO ECOS
          </span>
          <h2 className="mt-6 max-w-3xl text-3xl font-black sm:text-5xl">
            Un catálogo que va creciendo con vos.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-200">
            Empezamos con una selección pequeña y clara. Cada nueva guía tendrá su propia landing,
            información y acceso al producto.
          </p>
        </div>
      </section>

      <footer className="bg-brand-navy">
        <div className="container-page py-10 text-sm text-slate-400">
          <p className="font-black text-white">Haciendo Ecos</p>
          <p className="mt-2">Ebooks que generan cambios.</p>
          <p className="mt-5 max-w-2xl text-xs leading-5">
            Haciendo Ecos puede recibir una comisión cuando una compra se realiza mediante un
            enlace de afiliado. El precio para el comprador no aumenta por utilizar nuestros enlaces.
          </p>
        </div>
      </footer>
    </main>
  );
}
