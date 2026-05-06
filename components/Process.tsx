import { FadeIn } from './FadeIn'

const steps = [
  {
    num: '01',
    time: 'Captura',
    title: 'Scrapers en cron',
    body: 'Scrapers configurables corren contra las fuentes que elijas — Clarín, La Nación, Infobae, TN, o cualquier medio nuevo que conectes.',
  },
  {
    num: '02',
    time: 'Inteligencia',
    title: 'Score y dedupe',
    body: 'Cada nota se vectoriza con embeddings, se puntúa por interés (1–10) y se deduplica semánticamente contra todo lo procesado.',
  },
  {
    num: '03',
    time: 'Reescritura',
    title: 'Estilo editorial',
    body: 'La IA reescribe título y cuerpo con prompts personalizables por fuente y por destino. Cero copy/paste, cero penalización SEO.',
  },
  {
    num: '04',
    time: 'Imagen',
    title: 'Portada asegurada',
    body: 'Selecciona la mejor imagen de las candidatas, las scorea, y genera una con IA cuando no hay opción válida. Nunca una nota sin portada.',
  },
  {
    num: '05',
    time: 'Publicación',
    title: 'Workflows configurables',
    body: 'Reglas por sección, fuente y score disparan a WordPress por mail, webhooks o redes. Aprobación humana opcional desde el newsroom.',
  },
]

export function Process() {
  return (
    <section
      id="proceso"
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 border-t border-border/40"
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.32em] text-muted mb-14 md:mb-20">
            Cómo funciona
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-10 lg:gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.08}>
              <div className="border-t-2 border-border pt-8">
                <span
                  className="font-serif text-5xl font-black text-terracotta/20 block mb-6 leading-none"
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted mb-2">
                  {step.time}
                </p>
                <h3 className="font-serif text-lg font-semibold text-carbon mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
