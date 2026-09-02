'use client'

import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname()
  const router = useRouter()
  const language = pathname.startsWith('/en') ? 'en' : 'es'

  return (
    <label>
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        value={language}
        onChange={(event) => router.push(event.target.value === 'en' ? '/en' : '/')}
        className={`cursor-pointer bg-transparent text-sm tracking-wide outline-none ${
          dark ? 'text-cream/70' : 'text-muted'
        }`}
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </label>
  )
}
