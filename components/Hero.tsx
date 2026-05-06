import { FadeIn } from './FadeIn'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
      <div className="max-w-5xl">
        <FadeIn delay={0.1}>
          <p className="text-xs uppercase tracking-[0.32em] text-muted mb-10 md:mb-14">
            Plataforma editorial automática
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            className="font-serif font-black text-carbon leading-[0.9] mb-8 md:mb-12"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}
          >
            La redacción
            <br />
            que nunca
            <br />
            duerme.
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-12 md:mb-16">
            Hermes escanea los medios, decide qué importa, lo reescribe con tu
            estilo y lo publica con imagen — las 24 horas, en tu sitio y en los
            canales que ya usás.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <a
              href="#contacto"
              className="inline-block bg-carbon text-cream text-sm font-medium tracking-[0.14em] uppercase px-8 py-4 rounded-sm hover:bg-[#2d2928] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon"
              aria-label="Agendar una demo de Hermes"
            >
              Agendar demo
            </a>
            <a
              href="#proceso"
              className="text-sm text-carbon tracking-wide underline underline-offset-4 decoration-carbon/30 hover:text-terracotta hover:decoration-terracotta transition-colors duration-300"
            >
              Ver cómo funciona
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
