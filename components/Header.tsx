'use client'

import { useEffect, useState } from 'react'
import './Header.css'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)

      const section = document.getElementById('inteligencia')
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsOverDark(rect.top <= 55 && rect.bottom >= 20)
      } else {
        setIsOverDark(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`hm-nav${scrolled ? ' hm-nav--scrolled' : ''}${isOverDark ? ' hm-nav--dark' : ''}`}>
      <div className="hm-nav-pill">
        <div className="hm-nav-content">
          <a
            href="#"
            className={`flex items-center gap-3 font-serif text-xl tracking-tight transition-colors duration-300 ${
              isOverDark ? 'text-cream hover:text-terracotta' : 'text-carbon hover:text-terracotta'
            }`}
            aria-label="Hermes — Inicio"
          >
            <img
              src="/logo.png"
              alt=""
              className={`h-7 w-auto transition-all duration-300 ${
                isOverDark ? 'brightness-0 invert' : ''
              }`}
              aria-hidden="true"
            />
            <span>Hermes</span>
          </a>
          <nav aria-label="Navegación principal" className="flex items-center gap-7">
            <LanguageSwitcher dark={isOverDark} />
            <a
              href="#casos"
              className={`hidden sm:block text-sm transition-colors duration-300 tracking-wide ${
                isOverDark ? 'text-cream/70 hover:text-cream' : 'text-muted hover:text-carbon'
              }`}
            >
              Casos
            </a>
            <a
              href="#proceso"
              className={`hidden sm:block text-sm transition-colors duration-300 tracking-wide ${
                isOverDark ? 'text-cream/70 hover:text-cream' : 'text-muted hover:text-carbon'
              }`}
            >
              Proceso
            </a>
            <a
              href="#producto"
              className={`hidden md:block text-sm transition-colors duration-300 tracking-wide ${
                isOverDark ? 'text-cream/70 hover:text-cream' : 'text-muted hover:text-carbon'
              }`}
            >
              Producto
            </a>
            <a
              href="#contacto"
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors duration-300 tracking-wide ${
                isOverDark
                  ? 'text-cream border border-cream/40 hover:border-cream bg-cream/10'
                  : 'text-carbon border border-border/70 px-4 py-1.5 rounded-full hover:border-carbon'
              }`}
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

