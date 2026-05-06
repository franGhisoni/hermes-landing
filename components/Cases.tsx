import { FadeIn } from './FadeIn'

const cases = [
  {
    eyebrow: 'Medios digitales',
    title: 'El portal que multiplica volumen sin escalar la redacción.',
    body: 'Cubrir noticias en tiempo real exige redactores 24/7 — caro e inviable. Hermes scrapea las fuentes que vos definís, puntúa qué historias importan, reescribe con tu línea editorial y publica en WordPress por mail. Tu equipo edita y aprueba; el resto, automático.',
  },
  {
    eyebrow: 'Agencias de contenido y SEO',
    title: 'Sitios verticales y de nicho a escala, sin contenido duplicado.',
    body: 'Producís decenas de sitios temáticos y necesitás flujo constante. Hermes deduplica semánticamente con embeddings, reescribe en estilos distintos por sitio, asegura imagen siempre y dispara a múltiples WordPress con prompts y reglas independientes.',
  },
  {
    eyebrow: 'Newsletters y blogs afiliados',
    title: 'El primer titular define el clic.',
    body: 'Para newsletters, blogs verticales y operadores de afiliados. Hermes filtra solo lo que pasa el score mínimo de interés, reescribe en tu tono, agenda publicaciones por horarios y deja todo listo en el dashboard para review humano antes de salir.',
  },
]

export function Cases() {
  return (
    <section
      id="casos"
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-surface/25"
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.32em] text-muted mb-14 md:mb-20">
            Casos de uso
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <FadeIn key={c.eyebrow} delay={i * 0.1}>
              <article className="border border-border/50 bg-cream/70 p-8 md:p-10 rounded-sm flex flex-col gap-5">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-terracotta font-medium">
                  {c.eyebrow}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-carbon font-semibold leading-snug">
                  {c.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  {c.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
