import Link from "next/link";
import Image from "next/image";

const AFFILIATE_URL =
  "https://go.hotmart.com/Y107709098E?ap=fdb4";

const guides = [
  {
    icon: "🕯️",
    title: "Guía Completa de Velas Artesanales",
    description:
      "Aprendé las bases para crear velas artesanales, conocer materiales y trabajar diferentes técnicas y presentaciones.",
    items: [
      "Tipos de ceras y cómo elegirlas",
      "Temperaturas correctas de trabajo",
      "Fragancias, colorantes y aditivos",
      "Pabilos y recipientes",
      "Velas aromáticas y decorativas",
      "Wax melts y tabletas aromáticas",
      "Velas temáticas y estacionales",
      "Ideas de productos rentables para vender",
    ],
  },
  {
    icon: "🧼",
    title: "Guía de Jabones Artesanales",
    description:
      "Una guía práctica para aprender la técnica Melt & Pour y comenzar a crear jabones artesanales.",
    items: [
      "Técnica Melt & Pour",
      "Elaboración de jabones",
      "Recetas paso a paso",
      "Colorantes y fragancias",
      "Exfoliantes",
      "Packaging",
      "Líneas Relax, Spa y Premium",
      "Ideas para vender tus productos",
    ],
  },
  {
    icon: "🛁",
    title: "Guía de Bombas y Sales de Baño",
    description:
      "Todo lo necesario para comenzar a crear bombas y sales de baño con diferentes combinaciones y presentaciones.",
    items: [
      "Fórmula base",
      "Técnica completa",
      "12 recetas exclusivas",
      "Guía de colores",
      "Fragancias",
      "Moldes",
      "Estrategias de packaging",
      "Ideas para ventas",
      "Guía adicional con 5 recetas de sales de baño",
    ],
  },
];

const bonuses = [
  {
    icon: "🎁",
    title: "Plan de acción de 30 días",
    text: "Material para ayudarte a organizar tus primeros pasos y comenzar a trabajar sobre tu proyecto artesanal.",
  },
  {
    icon: "🎁",
    title: "Marketing para artesanas",
    text: "Contenido orientado a presentar y promocionar tus productos artesanales.",
  },
  {
    icon: "🎁",
    title: "Cómo encontrar proveedores",
    text: "Material para ayudarte a investigar y encontrar proveedores para tus productos.",
  },
  {
    icon: "🎁",
    title: "Velas en gel",
    text: "Contenido adicional relacionado con la elaboración de velas en gel.",
  },
  {
    icon: "🎁",
    title: "Velas navideñas",
    text: "Ideas y material relacionado con velas para una temática estacional.",
  },
  {
    icon: "🎁",
    title: "Bitácora de formulación",
    text: "Material para organizar y registrar tus formulaciones y procesos.",
  },
  {
    icon: "🎁",
    title: "Certificado de finalización",
    text: "Certificado incluido como parte de los materiales adicionales del pack.",
  },
];

const benefits = [
  "Aprender 4 categorías diferentes de productos artesanales.",
  "Crear tus propios productos desde cero.",
  "Conocer materiales, herramientas y procesos.",
  "Experimentar con diferentes diseños, aromas y presentaciones.",
  "Ampliar la variedad de productos de tu catálogo.",
  "Tener una base para comenzar a desarrollar un emprendimiento.",
];

const faqs = [
  {
    question: "¿Qué incluye el Pack Artesanal Completo?",
    answer:
      "Incluye tres guías principales: Velas Artesanales, Jabones Artesanales y Bombas y Sales de Baño. Además, la propuesta incluye diferentes materiales adicionales y bonos.",
  },
  {
    question: "¿Qué voy a aprender con la guía de velas?",
    answer:
      "La guía incluye contenidos sobre tipos de ceras, temperaturas de trabajo, fragancias, colorantes, aditivos, pabilos, recipientes, velas aromáticas, decorativas, wax melts, tabletas aromáticas y otras propuestas.",
  },
  {
    question: "¿Qué contiene la guía de jabones?",
    answer:
      "Incluye la técnica Melt & Pour, recetas paso a paso, colorantes, fragancias, exfoliantes, packaging y propuestas de líneas Relax, Spa y Premium.",
  },
  {
    question: "¿Qué contiene la guía de bombas y sales de baño?",
    answer:
      "Incluye una fórmula base, la técnica completa, 12 recetas exclusivas, guía de colores, fragancias, moldes, packaging, estrategias de ventas y una guía adicional con 5 recetas de sales de baño.",
  },
  {
    question: "¿El pack sirve para comenzar un emprendimiento?",
    answer:
      "El material está presentado también como una base para desarrollar un emprendimiento artesanal, conocer productos, crear un catálogo y explorar distintas opciones de venta.",
  },
  {
    question: "¿Necesito aprender todo de una vez?",
    answer:
      "No. La propuesta permite comenzar con una técnica, practicar y posteriormente incorporar nuevas opciones al catálogo.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-cream text-slate-800">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-brand-cream/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-black text-brand-teal"
          >
            ← Haciendo Ecos
          </Link>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#F4C430] px-5 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D9A900] sm:inline-flex"
          >
            Ver el Pack →
          </a>
        </div>
      </header>

      {/* =====================================================
    HERO
====================================================== */}
<section className="overflow-hidden">
  <div className="container-page py-12 sm:py-16 lg:py-20">
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

      {/* TEXTO */}
      <div className="text-center lg:text-left">
        <span className="eyebrow">
          🕯️ MANUALIDADES · EMPRENDIMIENTO · CREATIVIDAD
        </span>

        <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
          Pack Artesanal
          <span className="block text-brand-teal">
            Completo
          </span>
        </h1>

        <p className="mt-6 text-xl font-bold leading-8 text-slate-700">
          Velas + Jabones Artesanales + Bombas y Sales de Baño.
        </p>

        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          Tres guías prácticas y completas para aprender diferentes
          técnicas artesanales, crear tus propios productos y explorar
          nuevas posibilidades para tu catálogo o emprendimiento.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-[#F4C430] px-8 py-4 font-black text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-[#D9A900]"
          >
            Quiero conocer el Pack →
          </a>

          <a
            href="#contenido"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-brand-teal px-8 py-4 font-black text-brand-teal transition hover:bg-brand-teal hover:text-white"
          >
            Ver qué incluye
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            🕯️ Velas
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            🧼 Jabones
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            🛁 Bombas y sales
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            🎁 Bonos
          </span>
        </div>
      </div>

      {/* IMAGEN DEL PRODUCTO */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[520px]">

          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-[#F4C430]/20 blur-2xl" />

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft">
            <Image
              src="/images/pack-artesanal.png"
              alt="Pack Artesanal Completo - Velas, Jabones, Bombas y Sales de Baño"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section
        id="contenido"
        className="border-y border-slate-200 bg-white"
      >
        <div className="container-page py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              SOBRE EL PRODUCTO
            </span>

            <h2 className="mt-4 text-3xl font-black text-brand-navy sm:text-4xl">
              Todo en un solo pack
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Con el Pack Artesanal Completo vas a acceder a tres guías
              prácticas para aprender a elaborar diferentes productos
              artesanales y ampliar tus posibilidades creativas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-[2rem] border border-slate-200 bg-brand-cream p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="text-5xl">
                  {guide.icon}
                </div>

                <h3 className="mt-5 text-2xl font-black text-brand-navy">
                  {guide.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {guide.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {guide.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-6 text-slate-700"
                    >
                      <span className="font-black text-brand-teal">
                        ✓
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          APRENDER PASO A PASO
      ====================================================== */}
      <section className="bg-brand-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">
                APRENDER · PRACTICAR · CREAR
              </span>

              <h2 className="mt-4 text-3xl font-black text-brand-navy sm:text-4xl">
                No necesitás aprenderlo todo de una vez
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Podés comenzar con una técnica, practicar tus primeros
                productos y después incorporar nuevas opciones a tu catálogo.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                El pack reúne diferentes categorías para que puedas explorar
                distintos materiales, procesos, aromas, diseños y
                presentaciones.
              </p>
            </div>

            <div className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-soft sm:p-10">
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4C430] font-black text-slate-900">
                    1
                  </div>

                  <div>
                    <h3 className="font-black">
                      Elegí una técnica
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Comenzá por velas, jabones o bombas y sales de baño.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4C430] font-black text-slate-900">
                    2
                  </div>

                  <div>
                    <h3 className="font-black">
                      Practicá
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Conocé materiales y procesos y empezá a crear.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4C430] font-black text-slate-900">
                    3
                  </div>

                  <div>
                    <h3 className="font-black">
                      Ampliá tu catálogo
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Incorporá nuevas categorías y productos a medida que
                      avances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFICIOS
      ====================================================== */}
      <section className="bg-white">
        <div className="container-page py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              ¿QUÉ PODÉS LOGRAR?
            </span>

            <h2 className="mt-4 text-3xl font-black text-brand-navy sm:text-4xl">
              Más posibilidades para crear
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              El pack está pensado para ampliar tus conocimientos y darte
              diferentes caminos para experimentar con productos artesanales.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-2xl border border-yellow-200 bg-brand-cream p-5"
              >
                <span className="text-xl text-brand-teal">
                  ✓
                </span>

                <p className="font-semibold leading-6 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BONOS
      ====================================================== */}
      <section className="bg-brand-navy text-white">
        <div className="container-page py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-brand-yellow">
              🎁 MATERIAL ADICIONAL
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Además de las tres guías
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              La propuesta incluye materiales adicionales para acompañar el
              aprendizaje y ayudarte a desarrollar tus ideas.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {bonuses.map((bonus) => (
              <article
                key={bonus.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-3xl">
                  {bonus.icon}
                </div>

                <h3 className="mt-4 font-black">
                  {bonus.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {bonus.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EMPRENDIMIENTO
      ====================================================== */}
      <section className="bg-[#E8F4F1]">
        <div className="container-page py-16 text-center lg:py-20">
          <div className="text-5xl">
            🛍️✨
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black text-brand-navy sm:text-4xl">
            Convertí tus conocimientos en nuevas posibilidades
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Además de aprender técnicas artesanales, el contenido puede servir
            como punto de partida para desarrollar productos, crear un catálogo
            y explorar una idea de emprendimiento desde casa.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <div className="text-3xl">🎨</div>
              <p className="mt-3 font-black">
                Creá
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <div className="text-3xl">📦</div>
              <p className="mt-3 font-black">
                Armá tu catálogo
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <div className="text-3xl">🛍️</div>
              <p className="mt-3 font-black">
                Explorá ventas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#F4C430]">
        <div className="container-page py-16 text-center lg:py-20">
          <p className="font-black uppercase tracking-[0.18em] text-slate-700">
            PACK ARTESANAL COMPLETO
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black text-slate-900 sm:text-5xl">
            Tres guías para comenzar a crear tus propios productos
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-800">
            Conocé la propuesta completa, el contenido incluido y las
            condiciones de compra en la página oficial del producto.
          </p>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-slate-900 px-9 py-4 text-base font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
          >
            Ver Pack Artesanal  →
          </a>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-slate-700">
            Haciendo Ecos puede recibir una comisión si realizás una compra
            mediante este enlace de afiliado.
          </p>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-brand-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              PREGUNTAS FRECUENTES
            </span>

            <h2 className="mt-4 text-3xl font-black text-brand-navy sm:text-4xl">
              Antes de conocer el Pack
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-black text-brand-navy">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.question}</span>

                    <span className="text-2xl font-normal text-brand-teal transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL
      ====================================================== */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container-page py-10 text-center">
          <Link
            href="/"
            className="font-black text-brand-teal"
          >
            HACIENDO ECOS
          </Link>

          <p className="mt-2 text-sm font-semibold text-slate-500">
            Ebooks que generan cambios.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-5 text-slate-500">
            Haciendo Ecos participa como afiliado del producto y puede recibir
            una comisión por compras realizadas mediante enlaces de afiliado.
            La compra y entrega del producto se realizan en la plataforma
            correspondiente.
          </p>

          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Haciendo Ecos
          </p>
        </div>
      </footer>
    </main>
  );
}