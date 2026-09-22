import Image from "next/image";
import Link from "next/link";

const AFFILIATE_URL = "https://go.hotmart.com/I107708702P?dp=1";

const features = [
  {
    icon: "🐶",
    title: "Recetas para perros",
    text: "Ideas de recetas caseras para variar las opciones de alimentación y premios.",
  },
  {
    icon: "🐱",
    title: "Recetas para gatos",
    text: "Preparaciones y propuestas pensadas también para compartir con tus gatos.",
  },
  {
    icon: "🦴",
    title: "Snacks y premios",
    text: "Ideas para preparar snacks, premios y antojitos caseros para tus mascotas.",
  },
  {
    icon: "📅",
    title: "Menús semanales",
    text: "Material para ayudarte a organizar mejor las comidas durante la semana.",
  },
  {
    icon: "🛒",
    title: "Organización de compras",
    text: "Listas y material práctico para organizar ingredientes, compras y porciones.",
  },
  {
    icon: "💡",
    title: "Consejos prácticos",
    text: "Ideas para comenzar a preparar recetas y acompañar el cuidado cotidiano.",
  },
];

const bonuses = [
  {
    number: "1",
    title: "Guía de transición segura",
    text: "Material orientativo para acompañar una transición de croquetas a comida casera.",
  },
  {
    number: "2",
    title: "Mascotas mañosas",
    text: "Trucos e ideas para probar nuevas comidas con mascotas que suelen rechazarlas.",
  },
  {
    number: "3",
    title: "Calculadora nutricional orientativa",
    text: "Herramienta orientativa para perros y gatos incluida entre los materiales adicionales.",
  },
  {
    number: "4",
    title: "Guía práctica de prevención",
    text: "Material sobre señales relacionadas con 20 enfermedades comunes mencionadas en el producto.",
  },
  {
    number: "5",
    title: "Obesidad en perros",
    text: "Información sobre señales, riesgos y hábitos relacionados con el cuidado del peso.",
  },
  {
    number: "6",
    title: "Obesidad en gatos",
    text: "Material sobre señales, riesgos y hábitos relacionados con el cuidado del peso.",
  },
  {
    number: "7",
    title: "Certificado de Dueño Ejemplar",
    text: "Certificado incluido como parte de los materiales adicionales del producto.",
  },
];

const reasons = [
  "Quieres consentir a tu mascota con recetas hechas en casa.",
  "Buscas ideas para variar su alimentación y sus snacks.",
  "Te interesa organizar mejor sus comidas.",
  "Quieres conocer nuevas recetas para perros y gatos.",
  "Buscas material práctico relacionado con cuidado y bienestar.",
  "Te interesa explorar una posible idea de emprendimiento desde casa.",
];

const faqs = [
  {
    question: "¿Qué incluye Mascota Sana?",
    answer:
      "El producto incluye 250 recetas para perros y gatos, además de materiales complementarios, recetas, snacks, premios, menús y consejos incluidos en la propuesta.",
  },
  {
    question: "¿Es para perros y gatos?",
    answer:
      "Sí. El producto está presentado como un recetario para perros y gatos e incluye contenido dirigido a ambas especies.",
  },
  {
    question: "¿Incluye bonos?",
    answer:
      "Sí. La propuesta incluye 7 materiales adicionales: guía de transición, mascotas mañosas, calculadora nutricional orientativa, guía de prevención, materiales sobre obesidad y certificado de Dueño Ejemplar.",
  },
  {
    question: "¿Puedo verlo desde el celular?",
    answer:
      "Sí. Se trata de un producto digital, por lo que podrás consultar el material desde los dispositivos compatibles indicados por la plataforma de venta.",
  },
  {
    question: "¿La información reemplaza al veterinario?",
    answer:
      "No. El material tiene finalidad educativa y orientativa. Ante dudas sobre alimentación, alergias, enfermedades, tratamientos o necesidades específicas de una mascota, consulta con un veterinario.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-cream text-slate-800">
      {/* =========================================================
          HEADER
      ========================================================== */}
      <header className="sticky top-0 z-50 border-b border-yellow-200 bg-brand-cream/95 backdrop-blur">
        <div className="container-page flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/haciendo-ecos-ebook-logo.png"
              alt="Haciendo Ecos"
              width={45}
              height={45}
              className="h-10 w-10 object-contain"
              priority
            />

            <div>
              <div className="text-lg font-black leading-none text-brand-teal">
                HACIENDO ECOS
              </div>

              <div className="mt-1 text-[10px] font-bold tracking-[0.18em] text-slate-500">
                EBOOKS QUE GENERAN CAMBIOS
              </div>
            </div>
          </Link>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#F4C430] px-5 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D9A900] sm:inline-flex"
          >
            Ver el producto →
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="overflow-hidden">
        <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:py-20">
          {/* Texto */}
          <div>
            <span className="eyebrow">
              🐾 RECETARIO DIGITAL PARA MASCOTAS
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Mascota Sana,
              <span className="block text-brand-teal">
                Cocina Segura
              </span>
            </h1>

            <p className="mt-6 text-xl font-bold leading-8 text-slate-700">
              250 recetas para perros y gatos + 7 materiales adicionales
              para explorar nuevas opciones para tus mascotas.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Un recetario digital que reúne recetas caseras, snacks, premios,
              menús semanales, consejos prácticos y materiales complementarios
              relacionados con el cuidado de perros y gatos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#F4C430] px-7 py-4 text-base font-black text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-[#D9A900]"
              >
                Quiero conocer el ebook →
              </a>

              <a
                href="#contenido"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-brand-teal px-7 py-4 text-base font-black text-brand-teal transition hover:bg-brand-teal hover:text-white"
              >
                Ver contenido
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
              <span>🐶 Perros</span>
              <span>🐱 Gatos</span>
              <span>🍖 Recetas</span>
              <span>🎁 7 bonos</span>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-yellow-200/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-200 bg-white shadow-soft">
              <Image
                src="/images/mascotas.png"
                alt="Mascota Sana - 250 recetas para perros y gatos"
                width={1200}
                height={1200}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOBRE EL PRODUCTO
      ========================================================== */}
      <section
        id="contenido"
        className="border-y border-slate-200 bg-white"
      >
        <div className="container-page py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">SOBRE EL PRODUCTO</span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Todo reunido en un solo recetario digital
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Prepara nuevas recetas para tus mascotas y organiza mejor sus
              comidas con un material pensado para quienes quieren explorar
              opciones caseras para perros y gatos.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.5rem] border border-slate-200 bg-brand-cream p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-4 text-lg font-black text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          250 RECETAS
      ========================================================== */}
      <section className="bg-brand-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">EL RECETARIO</span>

              <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                250 recetas para explorar nuevas opciones
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                La propuesta reúne recetas para perros y gatos, junto con
                ideas para snacks, premios y preparaciones caseras.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="text-3xl">🐶</span>
                  <div>
                    <h3 className="font-black">Para perros</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Recetas, snacks y propuestas para variar sus opciones.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="text-3xl">🐱</span>
                  <div>
                    <h3 className="font-black">Para gatos</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Material y recetas dirigidas también a los gatos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="text-3xl">🦴</span>
                  <div>
                    <h3 className="font-black">Snacks y premios</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Ideas para preparar diferentes premios y antojitos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#F4C430] p-8 text-center shadow-soft sm:p-12">
              <div className="text-7xl">🐶 🐱</div>

              <div className="mt-6 text-6xl font-black text-slate-900">
                250
              </div>

              <p className="mt-2 text-xl font-black text-slate-900">
                recetas para perros y gatos
              </p>

              <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-slate-900" />

              <p className="mt-6 text-sm font-semibold leading-6 text-slate-800">
                Recetas caseras + snacks + premios + menús + materiales
                adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BONOS
      ========================================================== */}
      <section className="bg-slate-900 text-white">
        <div className="container-page py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#F4C430]">
              🎁 MATERIAL ADICIONAL
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Además del recetario, incluye 7 bonos
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Material complementario para ampliar la experiencia y organizar
              mejor el cuidado de tus mascotas.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {bonuses.map((bonus) => (
              <article
                key={bonus.number}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4C430] font-black text-slate-900">
                  {bonus.number}
                </div>

                <div>
                  <h3 className="font-black">{bonus.title}</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {bonus.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARA QUIEN
      ========================================================== */}
      <section className="bg-white">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">¿PARA QUIÉN ES?</span>

              <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                Una propuesta para amantes de las mascotas
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Si te interesa aprender nuevas recetas, organizar mejor las
                comidas de tus mascotas o simplemente encontrar nuevas ideas,
                este material reúne diferentes recursos en un solo lugar.
              </p>
            </div>

            <div className="space-y-3">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex gap-3 rounded-2xl border border-yellow-200 bg-brand-cream p-4"
                >
                  <span className="text-xl">🐾</span>

                  <p className="font-semibold leading-6 text-slate-700">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPRENDIMIENTO
      ========================================================== */}
      <section className="bg-[#E8F4F1]">
        <div className="container-page py-16 text-center lg:py-20">
          <div className="text-5xl">🏠🐾</div>

          <h2 className="mt-5 text-3xl font-black text-slate-900">
            ¿Te interesa emprender desde casa?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            El material también puede servir como inspiración para explorar
            una idea de emprendimiento relacionada con la preparación de
            snacks, premios o recetas caseras para mascotas.
          </p>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-brand-teal px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-1"
          >
            Conocer el producto →
          </a>
        </div>
      </section>

      {/* =========================================================
          CTA PRINCIPAL
      ========================================================== */}
      <section className="bg-[#F4C430]">
        <div className="container-page py-16 text-center lg:py-20">
          <p className="font-black uppercase tracking-[0.18em] text-slate-700">
            MASCOTA SANA · COCINA SEGURA
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black text-slate-900 sm:text-5xl">
            Descubre las 250 recetas y todos los materiales incluidos
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-800">
            Accede a la página oficial del producto para consultar el precio,
            condiciones de compra y detalles completos.
          </p>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-slate-900 px-9 py-4 text-base font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
          >
            Ver Mascota Sana →
          </a>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-slate-700">
            Al realizar una compra mediante este enlace, Haciendo Ecos puede
            recibir una comisión como afiliado.
          </p>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="bg-brand-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">PREGUNTAS FRECUENTES</span>

            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              Antes de conocer el producto
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-black text-slate-900">
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

      {/* =========================================================
          DISCLAIMER
      ========================================================== */}
      <section className="border-t border-slate-200 bg-white">
        <div className="container-page py-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-black text-slate-900">
              Información importante
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              El contenido presentado tiene finalidad educativa y orientativa.
              No sustituye la evaluación, diagnóstico ni indicaciones de un
              profesional veterinario. Las necesidades alimentarias pueden
              variar según cada animal. Ante dudas relacionadas con
              alimentación, alergias, enfermedades, tratamientos o condiciones
              particulares, consulta con un veterinario.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-slate-200 bg-brand-cream">
        <div className="container-page py-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
          >
            <Image
              src="/images/haciendo-ecos-ebook-logo.png"
              alt="Haciendo Ecos"
              width={38}
              height={38}
              className="h-8 w-8 object-contain"
            />

            <span className="font-black text-brand-teal">
              HACIENDO ECOS
            </span>
          </Link>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-5 text-slate-500">
            Haciendo Ecos participa como afiliado del producto y puede recibir
            una comisión por compras realizadas mediante enlaces de afiliado.
            La compra y entrega del producto se realizan en la plataforma
            oficial correspondiente.
          </p>

          <p className="mt-3 text-xs text-slate-400">
            © {new Date().getFullYear()} Haciendo Ecos
          </p>
        </div>
      </footer>
    </main>
  );
}