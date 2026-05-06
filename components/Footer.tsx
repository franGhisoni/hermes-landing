export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 py-10 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="font-serif text-lg text-carbon">Hermes</p>
        <p className="text-sm text-muted order-last sm:order-none">
          Un producto de Sodium — {year}
        </p>
        <a
          href="mailto:ghisonifran@gmail.com"
          className="text-sm text-muted hover:text-carbon transition-colors duration-300"
        >
          ghisonifran@gmail.com
        </a>
      </div>
    </footer>
  )
}
