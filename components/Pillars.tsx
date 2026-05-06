import { FadeIn } from './FadeIn'

const pillars = [
  {
    num: '01',
    title: 'Publica antes que la competencia.',
    body: 'Scrapers en cron escanean los medios principales en tiempo real. Cuando una historia importa, Hermes la captura, la procesa y la publica en minutos.',
  },
  {
    num: '02',
    title: 'Decide como tu mejor editor.',
    body: 'Cada nota se vectoriza, se puntúa por interés y se deduplica contra todo lo ya procesado. No publica cualquier cosa: publica lo que mueve la aguja.',
  },
  {
    num: '03',
    title: 'Publica sin que toques un teclado.',
    body: 'Reescribe con tu estilo editorial, asegura imagen de portada y dispara la nota a WordPress, redes o cualquier endpoint. Reglas y horarios configurables, control humano opcional.',
  },
]

export function Pillars() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 border-t border-border/40">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.num} delay={i * 0.12}>
              <div>
                <span
                  className="font-serif font-black text-[6rem] md:text-[7rem] text-border leading-none block mb-4"
                  aria-hidden="true"
                >
                  {pillar.num}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-carbon font-semibold leading-snug mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted leading-relaxed text-base">
                  {pillar.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
