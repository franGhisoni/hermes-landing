import { FadeIn } from './FadeIn'

export function Problem() {
  return (
    <section className="py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 border-t border-border/40">
      <div className="max-w-[860px] mx-auto text-center">
        <FadeIn>
          <p className="font-serif text-2xl md:text-3xl lg:text-[2.1rem] text-carbon leading-[1.4] tracking-tight">
            Cada noticia que publicás tarde es un lector que se fue a otro
            medio. Cada copy/paste te penaliza el SEO. Cada hora que un redactor
            pasa filtrando, reescribiendo y buscando portada es plata que se va
            sin tráfico nuevo.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-8 md:mt-10 text-base md:text-lg text-muted tracking-wide">
            Hermes existe para que eso no vuelva a pasar.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
