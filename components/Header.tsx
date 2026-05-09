'use client'

import { useEffect, useState } from 'react'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`hm-nav${scrolled ? ' hm-nav--scrolled' : ''}`}>
      <div className="hm-nav-pill">
        <div className="hm-nav-content">
          <a
            href="#"
            className="flex items-center gap-3 font-serif text-xl text-carbon tracking-tight hover:text-terracotta transition-colors duration-300"
            aria-label="Hermes — Inicio"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-7 w-auto"
              aria-hidden="true"
            />
            <span>Hermes</span>
          </a>
          <nav aria-label="Navegación principal" className="flex items-center gap-7">
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
              href="#producto"
              className="hidden md:block text-sm text-muted hover:text-carbon transition-colors duration-300 tracking-wide"
            >
              Producto
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-carbon border border-border/70 px-4 py-1.5 rounded-full hover:border-carbon transition-colors duration-300 tracking-wide"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
