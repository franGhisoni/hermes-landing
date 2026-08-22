import { FadeIn } from './FadeIn'

const outcomes = [
  {
    label: 'Timing & Arbitraje',
    title: 'Detección de silencios: publica cuando el rival no está.',
    body: 'La IA analiza los patrones horarios de tus competidores. Si un medio rival reduce su frecuencia entre las 14:00 y las 17:00 o los fines de semana, Hermes te señala la ventana óptima para dominar el feed y captar la atención.',
  },
  {
    label: 'Interés vs. Cobertura',
    title: 'Noticias de alto interés que casi nadie cubrió.',
    body: 'Cruza el potencial de cada tema contra la cantidad de veces que ya fue publicado por los demás medios. Detecta notas de alto interés que la competencia casi no cubrió, y frena aquellas sobre temas que ya están saturados en todos lados.',
  },
  {
    label: 'Ventaja Editorial',
    title: 'Superá la cobertura estándar con mejores ángulos.',
    body: 'Compara semánticamente cómo cubren los otros medios el mismo evento. Si todos abordan la noticia desde el mismo ángulo predecible, Hermes sugiere giros de impacto directo y análisis que diferencian tu contenido.',
  },
  {
    label: 'Resumen Estratégico',
    title: 'De gráficos estáticos a directivas claras de acción.',
    body: 'Los dashboards no toman decisiones por sí solos. Hermes genera un reporte diario con razonamiento accionable: qué verticales potenciar hoy, qué nichos liderar y qué decisiones estratégicas moverán la aguja de tu medio.',
  },
]

export function ExecutiveIntelligence() {
  return (
    <section id="inteligencia" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-carbon text-cream">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24">
          <div>
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.32em] text-cream/50 mb-8">
                Inteligencia para dirección
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                No solo automatiza notas. Te ayuda a ganarle a tu competencia.
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-8 text-base md:text-lg text-cream/60 leading-relaxed max-w-xl">
                Una capa de análisis competitivo en tiempo real que traduce millones
                de publicaciones y silencios de mercado en decisiones editoriales
                de alto impacto para quienes dirigen el medio.
              </p>
            </FadeIn>
          </div>

          <div className="border-t border-cream/20">
            {outcomes.map((outcome, index) => (
              <FadeIn key={outcome.label} delay={index * 0.1}>
                <article className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 py-8 md:py-10 border-b border-cream/20">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-terracotta font-medium">
                    {outcome.label}
                  </p>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold leading-snug mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-sm md:text-base text-cream/55 leading-relaxed">
                      {outcome.body}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
