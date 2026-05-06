import { FadeIn } from './FadeIn'

export function ClosingCTA() {
  return (
    <section
      id="contacto"
      className="py-36 md:py-52 lg:py-60 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[860px] mx-auto text-center">
        <FadeIn>
          <h2
            className="font-serif font-black text-carbon leading-[0.92] mb-10 md:mb-14"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Hablemos de la primera nota que vas a publicar con Hermes.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href="mailto:hola@hermes.ai"
            className="inline-block bg-carbon text-cream text-sm font-medium tracking-[0.14em] uppercase px-10 py-5 rounded-sm hover:bg-[#2d2928] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon"
            aria-label="Agendar una reunión de 30 minutos con el equipo de Hermes"
          >
            Agendar reunión de 30 minutos
          </a>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-8 text-sm text-muted/60 leading-relaxed max-w-sm mx-auto">
            Sin compromiso. Sin vendedor. Una conversación técnica para ver si
            Hermes es para tu medio.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
