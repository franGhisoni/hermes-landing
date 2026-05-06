import { FadeIn } from './FadeIn'

const shots = [
  {
    src: '/screenshots/newsroom.png',
    eyebrow: 'Newsroom',
    title: 'Todas las noticias procesadas en una sola vista.',
    body: 'Grid editorial con score de interés, fuente, sección y estado. Filtros por medio, sección y estado para revisar, aprobar, regenerar o publicar en un click.',
  },
  {
    src: '/screenshots/flows.png',
    eyebrow: 'Flows',
    title: 'Reglas de publicación que disparan solas.',
    body: 'Configurá flujos por destino, fuentes, sección, score mínimo y horario. Un cron builder visual para definir cuándo, qué y dónde se publica — sin escribir expresiones cron a mano.',
  },
  {
    src: '/screenshots/settings.png',
    eyebrow: 'Settings',
    title: 'Secciones y scrapeos programados a tu gusto.',
    body: 'Definí las secciones que cubrís, las rutas globales y la frecuencia con la que cada fuente se scrapea. Cada schedule barre todas las secciones configuradas, automático.',
  },
]

export function Showcase() {
  return (
    <section
      id="producto"
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 border-t border-border/40"
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.32em] text-muted mb-6">
            El producto
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-carbon font-semibold leading-tight max-w-3xl mb-16 md:mb-24">
            Una redacción digital, sin redactores.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-24 md:gap-32">
          {shots.map((shot, i) => (
            <FadeIn key={shot.src} delay={i * 0.05}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="border border-border/50 bg-cream rounded-sm overflow-hidden shadow-sm">
                    <img
                      src={shot.src}
                      alt={`${shot.eyebrow} — ${shot.title}`}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-terracotta font-medium mb-4">
                    {shot.eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-carbon font-semibold leading-snug mb-5">
                    {shot.title}
                  </h3>
                  <p className="text-muted text-base md:text-lg leading-relaxed">
                    {shot.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
