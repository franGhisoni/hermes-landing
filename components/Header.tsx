'use client'

import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-sm border-b border-border/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="font-serif text-xl text-carbon tracking-tight hover:text-terracotta transition-colors duration-300"
          aria-label="Hermes — Inicio"
        >
          Hermes
        </a>
        <nav aria-label="Navegación principal" className="flex items-center gap-8">
          <a
            href="#casos"
            className="hidden sm:block text-sm text-muted hover:text-carbon transition-colors duration-300 tracking-wide"
          >
            Casos
          </a>
          <a
            href="#proceso"
            className="hidden sm:block text-sm text-muted hover:text-carbon transition-colors duration-300 tracking-wide"
          >
            Proceso
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-carbon border border-border/70 px-4 py-2 rounded-sm hover:border-carbon transition-colors duration-300 tracking-wide"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
