import { FadeIn } from './FadeIn'

const integrations = [
  'WordPress',
  'Webhooks',
  'Twitter / X',
  'Clarín',
  'La Nación',
  'Infobae',
  'TN',
  'RSS',
  'OpenAI',
  'pgvector',
  'Postgres',
  'Prisma',
]

export function Integrations() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-surface/25 border-t border-border/40">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-carbon font-semibold leading-tight mb-6">
            Funciona con lo que ya tenés.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed mb-16 md:mb-20">
            Hermes publica en tu WordPress por email, dispara webhooks
            personalizados, postea en redes y se conecta a las fuentes que
            elijas. Si la usás, la integramos.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ul
            aria-label="Integraciones disponibles"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6"
          >
            {integrations.map((name) => (
              <li
                key={name}
                className="text-sm text-muted/50 font-mono tracking-tight"
              >
                {name}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
